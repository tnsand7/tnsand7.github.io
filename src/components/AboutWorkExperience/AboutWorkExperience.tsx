import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Colors from 'styles/Colors';
import { StyledTitle, StyledContent } from 'components/styles';
import { Device } from 'styles/Device';
import { EXPERIENCE } from 'constants/experience';
import type { TExperience } from 'constants/experience';
import { SmallCircleIcon } from 'assets/icons';

export default function AboutWorkExperience(): JSX.Element {
  const [arrOpen, setArrOpen] = useState(Array.from({ length: EXPERIENCE.length }, () => false));
  const [selectedKey, setSelectedKey] = useState(1);
  const [experience, setExperience] = useState<TExperience>(
    EXPERIENCE.filter((data) => data.id === selectedKey)[0]
  );

  const handleTabClick = (id: number) => {
    setSelectedKey(id);
  };

  useEffect(() => {
    setExperience(EXPERIENCE.filter((data) => data.id === selectedKey)[0]);
  }, [selectedKey]);

  return (
    <StyledAboutWorkExperience id="aboutworkexperience">
      <StyledTitle>ABOUT WORK EXPERIENCE</StyledTitle>
      <StyledBox>
        <StyledBoxHeader>
          <StyledIconBlock>
            <SmallCircleIcon />
            <SmallCircleIcon />
            <SmallCircleIcon />
          </StyledIconBlock>
          <StyledTabBlock>
            {EXPERIENCE?.map((data) => (
              <StyledTabItem
                isActive={selectedKey === data.id}
                key={data.id}
                onClick={() => handleTabClick(data.id)}
              >
                {data.name}
              </StyledTabItem>
            ))}
          </StyledTabBlock>
        </StyledBoxHeader>
        <StyledBoxBody>
          {experience?.description?.map((description) => (
            <p key={description}>- {description}</p>
          ))}
        </StyledBoxBody>
      </StyledBox>
    </StyledAboutWorkExperience>
  );
}

const StyledAboutWorkExperience = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  ${StyledContent} {
    width: 100%;
  }
`;

const StyledBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 300px;
  border: 2px solid ${Colors.darkGray};
  border-radius: 8px;
  box-shadow: 5px 5px 10px ${Colors.silver};
`;

const StyledBoxHeader = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  background-color: ${Colors.darkGray};
  border-top-left-radius: 1px;
  border-top-right-radius: 1px;
`;

const StyledIconBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 10px 15px;

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

  @media ${Device.tablet} {
    gap: 10px;

    & svg {
      width: 20px;
      height: 20px;
    }
  }
`;

const StyledTabBlock = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;

  @media ${Device.tablet} {
    margin-left: 20px;
  }
`;

const StyledTabItem = styled.div<{ isActive: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  width: 20%;
  padding-left: 5px;
  margin-top: 10px;
  border-radius: 5px 5px 0 0;
  color: ${Colors.white};
  width: 85%;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  word-break: break-all;
  background-color: ${({ isActive }) => (isActive ? Colors.sonicSilver : Colors.darkGray)};
  cursor: pointer;

  &:hover {
    opacity: ${({ isActive }) => (isActive ? 1 : 0.5)};
    background-color: ${({ isActive }) => (isActive ? Colors.sonicSilver : Colors.sonicSilver)};
    transition: background-color 0.4s ease;
  }

  &::after {
    content: '';
    position: absolute;
    right: 0;
    width: 1px;
    height: 100%;
    background-color: ${Colors.sonicSilver};
  }

  @media ${Device.tablet} {
    padding-left: 35px;

    &::before {
      content: '';
      position: absolute;
      left: 10px;
      width: 15px;
      height: 15px;
      color: ${Colors.white};
      border-radius: 4px;
      background-color: ${Colors.lightSilver};
    }
  }
`;

const StyledBoxBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  justify-content: center;
  gap: 10px;
  width: 100%;
  height: 100%;
  padding: 20px;
  border-top: 8px solid ${Colors.sonicSilver};
  font-size: 12px;

  @media ${Device.tablet} {
    font-size: 14px;
  }
`;
