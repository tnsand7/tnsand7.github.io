import React, { useState, useRef, useLayoutEffect } from 'react';
import useProjects from './useProjects';
import styled from 'styled-components';
import ProjectDetailModal from './ProjectDetailModal';
import ProjectsFilter from './ProjectsFilter';
import Project from './Project';
import { StyledTitle } from 'components/styles';
import { PROJECTS } from 'constants/projects';
import type { TProjectRef } from './types';
import useBooleanState from 'hooks/common/useBooleanState';

export default function ProjectsSection(): JSX.Element {
  const [isOpenModal, { toggle: toggleModal }] = useBooleanState(false);
  const [projects, setProjects] = useState(PROJECTS);
  const [selectedKey, setSelectedKey] = useState('');
  const [selectedProjectId, setSelectedProjectId] = useState(1);
  const { getProjectsOffset, getCookedData } = useProjects();
  const projectsRef = useRef<TProjectRef[]>(new Array(projects.length));
  const filters = [...new Set(PROJECTS.map((p) => p.key))];

  const handleFilterItemClick = (e: React.MouseEvent<HTMLElement>) => {
    const tempSelectedKey = String(e.currentTarget.dataset.key);
    if (selectedKey !== tempSelectedKey) {
      setProjects(getCookedData(projectsRef, tempSelectedKey));
      setSelectedKey(tempSelectedKey);
    }
  };

  const handleProjectClick = (projectId: number) => {
    setSelectedProjectId(projectId);
    toggleModal();
  };

  useLayoutEffect(() => {
    const updateSize = () => {
      window.sessionStorage.setItem('projectsPos', JSON.stringify(getProjectsOffset()));
      setProjects(getCookedData(projectsRef, selectedKey));
    };
    updateSize();

    window.addEventListener('resize', updateSize);
    return () => {
      window.removeEventListener('resize', updateSize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedKey]);

  return (
    <StyledProjectsSection id="projects">
      {isOpenModal && <ProjectDetailModal projectId={selectedProjectId} closeModal={toggleModal} />}
      <StyledTitle>PROJECTS</StyledTitle>
      <ProjectsFilter filters={filters} selectedKey={selectedKey} onClick={handleFilterItemClick} />
      <StyledContent>
        {projects?.map((project, key) => (
          <Project
            key={project.id}
            index={key}
            project={project}
            projectRef={projectsRef}
            onProjectClick={handleProjectClick}
          />
        ))}
      </StyledContent>
    </StyledProjectsSection>
  );
}

const StyledProjectsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const StyledContent = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 25px;
`;
