import styled from 'styled-components';
import Colors from 'styles/Colors';
import { SKILLS } from 'constants/skills';
import { StyledTitle, StyledBox, StyledName, StyledContent } from 'components/styles';
import { SkillsSectionBackgroundCircle } from 'components/Background';
import { Device } from 'styles/Device';

export default function SkillsSection(): JSX.Element {
  return (
    <StyledSkillsSection id='skills'>
      <StyledTitle>SKILLS</StyledTitle>
      {SKILLS?.map(skill => (
        <StyledBox key={skill.name}>
          <StyledName>{skill.name}</StyledName>
          <StyledContent>
            {skill.content?.map(content => (
              <StyledText key={content}>{content}</StyledText>
            ))}
          </StyledContent>
        </StyledBox>
      ))}
      <SkillsSectionBackgroundCircle />
    </StyledSkillsSection>
  );
}

const StyledSkillsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 20px;
  background-color: ${Colors.white};
`;

const StyledText = styled.span`
  position: relative;
  font-size: 10px;
  font-weight: 400;
  white-space: nowrap;

  &:not(:last-child) {
    &::after {
      content: '';
      position: absolute;
      bottom: 4px;
      width: 2px;
      height: 10px;
      margin-left: 6px;
      border-radius: 5px;
      background-color: ${Colors.vividCyan};
    }
  }

  @media ${Device.tablet} {
    font-size: 14px;
  }
`;
