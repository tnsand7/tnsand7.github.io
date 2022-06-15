import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import Colors from 'styles/Colors';
import { BottomModalBase } from 'components/common/Modal';
import { SmallCircleIcon } from 'assets/icons';
import { PROJECTS_DETAIL } from 'constants/projects';
import { StyledBox, StyledName, StyledContent } from 'components/styles';

export type ProjectDetailModalProps = {
  projectId: number;
  closeModal: () => void;
};

export const tagColor = (state: string): FlattenSimpleInterpolation => {
  switch (state) {
    case 'Front-End':
      return css`
        border: 1px solid ${Colors.orange};
        background-color: ${Colors.banana};
        color: ${Colors.orange};
      `;
    case 'Back-End':
      return css`
        border: 1px solid ${Colors.orange};
        background-color: ${Colors.white};
        color: ${Colors.orange};
      `;
    default:
      return css``;
  }
};

const getProjectById = (projectId: number) =>
  PROJECTS_DETAIL.find((project) => project.id === projectId);

export default function ProjectDetailModal({
  projectId,
  closeModal,
}: ProjectDetailModalProps): JSX.Element | null {
  const project = getProjectById(projectId);

  if (!project) {
    return null;
  }

  return (
    <BottomModalBase closeModal={closeModal}>
      <StyledHeader>
        <SmallCircleIcon onClick={closeModal} />
        <SmallCircleIcon />
        <SmallCircleIcon />
      </StyledHeader>
      <StyledBody>
        <StyledDescription>
          <p>{project.subTitle}</p>
        </StyledDescription>
        <StyledBox>
          <StyledName>담당 업무</StyledName>
          <StyledContent>
            {project.duties?.map((duty) => (
              <StyledTag key={duty} duty={duty}>
                {duty}
              </StyledTag>
            ))}
          </StyledContent>
        </StyledBox>
        {project.mainTitle && (
          <StyledBox>
            <StyledName>작업명</StyledName>
            <StyledContent>{project.mainTitle}</StyledContent>
          </StyledBox>
        )}
        {project.task && (
          <StyledBox>
            <StyledName>주요 업무</StyledName>
            <StyledContent>{project.task}</StyledContent>
          </StyledBox>
        )}
        {project.workingTime && (
          <StyledBox>
            <StyledName>작업소요 시간</StyledName>
            <StyledContent>{project.workingTime}</StyledContent>
          </StyledBox>
        )}
        {project.frontend && (
          <StyledBox>
            <StyledName>프론트엔드 환경</StyledName>
            <StyledContent>{project.frontend}</StyledContent>
          </StyledBox>
        )}
        {project.backend && (
          <StyledBox>
            <StyledName>백엔드 환경</StyledName>
            <StyledContent>{project.backend}</StyledContent>
          </StyledBox>
        )}
        {project.otherTools && (
          <StyledBox>
            <StyledName>기타</StyledName>
            <StyledContent>{project.otherTools}</StyledContent>
          </StyledBox>
        )}
      </StyledBody>
    </BottomModalBase>
  );
}

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 10px 15px;
  width: 100%;
  height: 45px;
  background-color: ${Colors.darkGray};
  border-radius: 8px 8px 0 0;

  & svg {
    width: 10px;
    height: 10px;
    cursor: pointer;

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
const StyledBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  padding: 20px;
  font-size: 12px;

  ${StyledName} {
    font-size: 12px;
  }

  ${StyledContent} {
    font-size: 12px;
    font-weight: 400;
  }
`;

const StyledDescription = styled.div`
  border-radius: 8px;
  padding: 2px;
  font-weight: 400;
  background-color: ${Colors.whiteSmoke};

  & p {
    position: relative;
    padding: 10px;
  }
`;

const StyledTag = styled.span<{ duty: string }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 20px;
  padding: 2px 8px;
  border-radius: 14px;
  font-size: 12px;
  font-weight: 700;
  line-height: 16px;
  ${({ duty }) => duty && tagColor(duty)};
`;
