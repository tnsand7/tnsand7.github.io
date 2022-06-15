import styled from 'styled-components';
import Colors from 'styles/Colors';
import zIndexes from 'styles/zIndexes';
import { beforeLoadingBarAnimation, afterLoadingBarAnimation } from 'styles/keyframes';
import useHideScroll from 'hooks/common/useHideScroll';

export default function LoadingBar(): JSX.Element {
  useHideScroll();

  return (
    <StyledLoadingBarWrapper>
      <StyledLoadingBar />
    </StyledLoadingBarWrapper>
  );
}

const StyledLoadingBarWrapper = styled.div`
  z-index: ${zIndexes.loadingBar};
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(100vw - 8px);
  height: 100vh !important;
  background-color: rgba(0, 0, 0, 0.9);
`;

const StyledLoadingBar = styled.div`
  z-index: ${zIndexes.loadingBar};
  position: relative;
  width: 40px;
  height: 40px;
  background-color: ${Colors.lightGreen};

  &:before {
    content: '';
    position: absolute;
    height: 10px;
    width: 10px;
    border-radius: 10px;
    background-color: ${Colors.vividCyan};
    -webkit-animation: ${beforeLoadingBarAnimation} 1.5s ease-in-out infinite;
    animation: ${beforeLoadingBarAnimation} 1.5s ease-in-out infinite;
  }

  &:after {
    content: '';
    position: absolute;
    z-index: 0;
    top: 0px;
    left: 0px;
    height: 40px;
    width: 0px;
    opacity: 1;
    background-color: ${Colors.vividCyan};
    -webkit-animation: ${afterLoadingBarAnimation} 4s ease-in-out infinite;
    animation: ${afterLoadingBarAnimation} 4s ease-in-out infinite;
  }
`;
