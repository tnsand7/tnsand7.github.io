import styled from 'styled-components';
import Colors from 'styles/Colors';
import PulseCircle from 'components/PulseCircle/PulseCircle';
import transitions from 'styles/transitions';
import { Device } from 'styles/Device';
import zIndexes from 'styles/zIndexes';
import { MainBannerBackgroundCircle } from 'components/Background';

export default function MainBanner(): JSX.Element {
  return (
    <StyledMainBanner>
      <StyledMainTitle>Grow Your Team With Me</StyledMainTitle>
      <StyledShadowTitle>Front-End Developer</StyledShadowTitle>
      <PulseCircle />
      <MainBannerBackgroundCircle />
    </StyledMainBanner>
  );
}

const StyledMainBanner = styled.div`
  z-index: ${zIndexes.mainBanner};
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${Colors.lightGray};
`;

const StyledMainTitle = styled.h1`
  z-index: ${zIndexes.mainBannerText};
  color: ${Colors.darkGrayishBlue};
  font-size: 2rem;

  @media ${Device.tablet} {
    font-size: 4rem;
  }
`;

const StyledShadowTitle = styled.h2`
  z-index: ${zIndexes.mainBannerShadowText};
  position: absolute;
  opacity: 0.5;
  margin-top: 40px;
  color: ${Colors.white};
  font-size: 2rem;
  text-shadow: -1px 1px ${Colors.black};
  text-transform: uppercase;
  animation: ${transitions.moveLeftAndRight} 4s linear infinite;

  @media ${Device.tablet} {
    font-size: 4rem;
  }
`;
