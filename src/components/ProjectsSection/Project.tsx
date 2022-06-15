import styled from 'styled-components';
import Colors from 'styles/Colors';
import type { TProject } from 'constants/projects';
import type { TProjectRef } from './types';
import { SmallCircleIcon, OpenFolderIcon, CloseFolderIcon } from 'assets/icons';

export type ProjectProps = {
  index: number;
  project: TProject;
  projectRef: React.MutableRefObject<TProjectRef[]>;
  onProjectClick: (projectId: number) => void;
};

export default function Project({
  index,
  project,
  projectRef,
  onProjectClick,
}: ProjectProps): JSX.Element {
  return (
    <StyledBox
      key={index}
      className="project-items"
      ref={(el: HTMLDivElement) =>
        (projectRef.current[index] = {
          el,
          project,
        })
      }
      visible={project.visible}
      inlineStyle={project.inlineStyle || `transform: translate3d(0px, 0}px, 0);`}
      onClick={() => onProjectClick(project.id)}
    >
      <StyledBoxHeader>
        <SmallCircleIcon />
        <SmallCircleIcon />
        <SmallCircleIcon />
      </StyledBoxHeader>
      <StyledBoxBody>
        <StyledFolderWrapper>
          <CloseFolderIcon />
          <OpenFolderIcon />
        </StyledFolderWrapper>
        <StyledProjectName>{project.title}</StyledProjectName>
      </StyledBoxBody>
    </StyledBox>
  );
}

const StyledBox = styled.div<{ inlineStyle: string; visible: boolean }>`
  display: flex;
  flex-direction: column;
  min-width: 200px;
  max-width: 200px;
  height: 180px;
  border: 2px solid ${Colors.darkGray};
  border-radius: 8px;
  box-shadow: 5px 5px 10px ${Colors.silver};
  transition: ease 0.3s;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  ${({ inlineStyle }) => inlineStyle};
`;

const StyledBoxHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 10px 15px;
  height: 50px;
  background-color: ${Colors.darkGray};
  border-top-left-radius: 1px;
  border-top-right-radius: 1px;

  & svg {
    width: 10px;
    height: 10px;

    &:nth-child(1) {
      fill: #fb5b57;
    }

    &:nth-child(2) {
      fill: #e3bf44;
    }

    &:nth-child(3) {
      fill: #57c041;
    }
  }
`;

const StyledBoxBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  cursor: pointer;

  & svg {
    width: 60px;
    height: 55px;

    path {
      fill: ${Colors.vividCyan};
    }
  }
`;

const StyledFolderWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 75%;

  svg {
    position: absolute;
    left: 70px;

    &:first-child {
      display: block;
    }
    &:last-child {
      display: none;
    }
  }

  &:hover {
    svg {
      &:first-child {
        display: none;
      }
      &:last-child {
        display: block;
      }
    }
  }
`;

const StyledProjectName = styled.div`
  display: -webkit-box;
  width: 85%;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  word-break: break-all;
  font-size: 12px;
  text-align: center;
`;
