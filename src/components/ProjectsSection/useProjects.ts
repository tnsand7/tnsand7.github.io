import type { TProjectRef } from './types';
import { PROJECTS } from 'constants/projects';

export default function useProjects() {
  const getProjectsOffset = () => {
    return [...document.querySelectorAll('.project-items')].map((item) => {
      const { offsetLeft, offsetTop } = item as HTMLElement;
      return { x: offsetLeft, y: offsetTop };
    });
  };

  const getCookedData = (
    projectsRef: React.MutableRefObject<TProjectRef[]>,
    selectedKey: string
  ) => {
    if (!selectedKey) {
      return PROJECTS;
    }

    let [equalCount, notEqualCount] = [0, 0];
    return projectsRef.current.map((item) => {
      const { el, project } = item;
      const projectsPos = JSON.parse(String(window.sessionStorage.getItem('projectsPos')));
      const isEqual = project.key === selectedKey || false;
      const currentX = el.offsetLeft;
      const currentY = el.offsetTop;

      const { x: targetX, y: targetY } = isEqual
        ? projectsPos[equalCount]
        : projectsPos[projectsPos.length - equalCount - 1];

      const moveX = currentX > targetX ? -1 * (currentX - targetX) : targetX - currentX;
      const moveY = currentY > targetY ? -1 * (currentY - targetY) : targetY - currentY;

      if (isEqual) {
        equalCount += 1;
      } else {
        notEqualCount += 1;
      }

      return {
        ...project,
        visible: isEqual,
        inlineStyle: `transform: translate3d(${moveX}px, ${moveY}px, 0);`,
      };
    });
  };

  return {
    getProjectsOffset,
    getCookedData,
  };
}
