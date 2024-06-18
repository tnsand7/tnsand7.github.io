import styled from 'styled-components';
import Colors from 'styles/Colors';
import { StyledTitle, StyledBox, StyledName, StyledContent } from 'components/styles';
import { Device } from 'styles/Device';
import { useEffect } from 'react';

export default function AboutMeSection(): JSX.Element {
  useEffect(() => {
    const plays = [500, 600, 150, 800, 2500];
    const genres = ['classic', 'pop', 'classic', 'classic', 'pop'];

    const hashTables = genres.reduce((acc: any, genre, idx) => {
      acc[genre] = acc[genre]
        ? {
            total: acc[genre].total + plays[idx],
            datas: [...acc[genre].datas, idx].sort((a: any, b: any) => plays[b] - plays[a]),
          }
        : {
            total: plays[idx],
            datas: [idx],
          };

      return acc;
    }, {});

    const answer = Object.keys(hashTables)
      .sort((a, b) => hashTables[b].total - hashTables[a].total)
      .reduce((acc: any, key) => {
        return [...acc, ...hashTables[key].datas.splice(0, 2)];
      }, []);
  }, []);

  return (
    <StyledAboutMeSection id='aboutme'>
      <StyledTitle>ABOUT ME</StyledTitle>
      <StyledBox>
        <StyledName>Name</StyledName>
        <StyledContent>김윤정</StyledContent>
      </StyledBox>
      <StyledBox>
        <StyledName>Birthday</StyledName>
        <StyledContent>1993.10.09</StyledContent>
      </StyledBox>
      <StyledBox>
        <StyledName>Mail</StyledName>
        <StyledContent>tnsand7@naver.com</StyledContent>
      </StyledBox>
      <StyledBox>
        <StyledName>Phone</StyledName>
        <StyledContent>010-9254-8906</StyledContent>
      </StyledBox>
      <StyledBox>
        <StyledName>Key Strengths</StyledName>
        <StyledHashTagContent>
          <StyledHashTag># 3년간 성적우수장학생</StyledHashTag>
          <StyledHashTag># 교수님추천 & 인턴 경험</StyledHashTag>
          <StyledHashTag># 구매대행 및 배송대행관련 e-커머스서비스 경험</StyledHashTag>
          <StyledHashTag># 학원차량 공유관련 모빌리티서비스 경험</StyledHashTag>
          <StyledHashTag># 키즈 앱 플랫폼 서비스 경험</StyledHashTag>
          <StyledHashTag># 운송 플랫폼 서비스 경험</StyledHashTag>
          <StyledHashTag># 개발기한을 단 한번도 넘겨본 적 없는 직원</StyledHashTag>
          <StyledHashTag># 빠른 코드분석 및 업무파악으로 단시간내에 실무수행 가능</StyledHashTag>
          <StyledHashTag>
            # Back-End 개발 경험에 의한 좀 더 수월한 API 연동 작업 및 백엔드개발팀과의 원활한 소통 능력
          </StyledHashTag>
        </StyledHashTagContent>
      </StyledBox>
    </StyledAboutMeSection>
  );
}

const StyledAboutMeSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 20px;
  background-color: ${Colors.white};

  ${StyledContent} {
    display: flex;
    flex-direction: column;
    font-weight: 400;
  }
`;

const StyledHashTag = styled.span`
  padding: 4px;
  border-radius: 8px;
  color: ${Colors.darkGrayishBlue};
  background-color: ${Colors.white};
  font-size: 12px;
  font-weight: 600;
`;

const StyledHashTagContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 10px;
  width: 70%;

  @media ${Device.tablet} {
    flex-direction: row;
    font-size: 12px;
  }
`;
