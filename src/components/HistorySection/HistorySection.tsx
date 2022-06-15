import { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import Colors from 'styles/Colors';
import { StyledTitle } from 'components/styles';
import { HISTORY } from 'constants/history';
import type { THistory } from 'constants/history';
import { Device } from 'styles/Device';
import zIndexes from 'styles/zIndexes';

const LIMIT = 10;
export default function HistorySection(): JSX.Element {
  const [offset, setOffset] = useState<number>(0);
  const [history, setHistory] = useState<THistory[]>(HISTORY.slice(offset, LIMIT));

  const handleReadMoreButton = () => {
    if (history.length < HISTORY.length) {
      setOffset((prevState) => (prevState += 1));
    }
  };

  useEffect(() => {
    if (offset > 0) {
      setHistory((prevState) => [
        ...prevState,
        ...HISTORY.slice(offset * LIMIT, offset * LIMIT + LIMIT),
      ]);
    }
  }, [offset]);

  return (
    <StyledHistorySection id="history">
      <StyledTitle>HISTORY</StyledTitle>
      <StyledTimelineBox>
        {history?.map((data, idx) => (
          <StyledTimeline key={`${data.date}-${idx}`}>
            <StyledDate>{data.date}</StyledDate>
            <StyledCompany>{data.company}</StyledCompany>
            <StyledName>{data.title}</StyledName>
            <StyledDescription>{data.description}</StyledDescription>
          </StyledTimeline>
        ))}
        {history.length < HISTORY.length && (
          <StyledReadMoreButton type="button" onClick={handleReadMoreButton}>
            View More!
          </StyledReadMoreButton>
        )}
      </StyledTimelineBox>
    </StyledHistorySection>
  );
}

const StyledCommonFontStyles = css`
  font-weight: 600;
  font-size: 10px;
  letter-spacing: 0.1em;

  @media ${Device.tablet} {
    font-size: 14px;
  }
`;

const StyledHistorySection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const StyledTimelineBox = styled.div`
  position: relative;
  width: 100%;
  margin-left: 10px;
  padding: 30px 0px;
  border-left: 2px solid ${Colors.lightGray};
`;

const StyledTimeline = styled.div`
  position: relative;
  padding-left: 30px;
  padding-bottom: 50px;

  &::before {
    position: absolute;
    top: 0;
    left: -2px;
    width: 2px;
    height: 20px;
    content: ' ';
    background-color: ${Colors.lightBlack};
  }
`;

const StyledDate = styled.div`
  margin-bottom: 5px;
  ${StyledCommonFontStyles};
`;

const StyledCompany = styled.h4`
  position: relative;
  margin-bottom: 5px;
  margin-left: 10px;
  width: fit-content;
  ${StyledCommonFontStyles};

  &::after {
    content: '';
    position: absolute;
    bottom: 0px;
    left: 0;
    opacity: 0.4;
    width: 100%;
    height: 7px;
    background-color: ${Colors.gray};
  }
`;

const StyledName = styled.h4`
  margin-bottom: 5px;
  margin-left: 10px;
  ${StyledCommonFontStyles};
`;

const StyledDescription = styled.h4`
  margin-left: 10px;
  color: ${Colors.gray};
  ${StyledCommonFontStyles};
  font-style: italic;
`;

const StyledReadMoreButton = styled.button`
  z-index: ${zIndexes.readMore};
  position: absolute;
  width: 100px;
  height: 40px;
  border-radius: 8px;
  border: 1px solid ${Colors.darkGrayishBlue};
  font-size: 12px;
  cursor: pointer;
`;
