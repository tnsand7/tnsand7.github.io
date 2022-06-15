import { keyframes } from 'styled-components';
import Colors from 'styles/Colors';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const slideUp = keyframes`
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(0);
  };
`;

const slideDown = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(100%);
  };
`;

const rotate = keyframes`
  100% {
      transform: rotate(360deg);
  }
`;

const pulse = keyframes`
  25% {
    opacity: 0.4;
  }

  100% {
    transform: scale(1);
  }
`;

const circleBackground = keyframes`
  0% {
    fill: ${Colors.orange};
  }

  25% {
    fill: ${Colors.hotOrange};
  }

  50% {
    fill: ${Colors.vividCyan};
  }

  100% {
    fill: ${Colors.orange};
  }
`;

const backwardFlowFirst = keyframes`
  0% {
    transform: translate(0);
  }
  100% {
    transform: translate(-100%);
  }
`;

const backwardFlowSecond = keyframes`
  0% {
    transform: translate(100%);
  }
  100% {
    transform: translate(0);
  }
`;

const forwardFlowFirst = keyframes`
  0% {
    transform: translate(-100%);
  }
  100% {
    transform: translate(0);
  }
`;

const forwardFlowSecond = keyframes`
  0% {
    transform: translate(0);
  }
  100% {
    transform: translate(100%);
  }
`;

const moveLeftAndRight = keyframes`
  0% {
    left: 35%;
  }
  50% {
    left: 25%;
  }
  100% {
    left: 35%;
  }
`;

const transitions = {
  fadeIn,
  fadeOut,
  slideUp,
  slideDown,
  rotate,
  pulse,
  backwardFlowFirst,
  backwardFlowSecond,
  forwardFlowFirst,
  forwardFlowSecond,
  moveLeftAndRight,
  circleBackground,
};

export default transitions;
