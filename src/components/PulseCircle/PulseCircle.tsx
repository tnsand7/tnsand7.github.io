import styled from 'styled-components';
import Colors from 'styles/Colors';
import { ThreeBigCircleIcon } from 'assets/icons';
import transitions from 'styles/transitions';
import zIndexes from 'styles/zIndexes';

export default function PulseCircle(): JSX.Element {
  return (
    <StyledPulseCircle>
      <ThreeBigCircleIcon />
    </StyledPulseCircle>
  );
}

const StyledPulseCircle = styled.div`
  z-index: ${zIndexes.mainBannerText};
  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 100rem;

    & circle {
      fill: ${Colors.hotOrange};
      transform: scale(0);
      opacity: 0;
      transform-origin: 50% 50%;
      animation: ${transitions.pulse} 3s cubic-bezier(0.5, 0.5, 0, 1);
      animation-iteration-count: infinite;

      &:nth-child(2) {
        fill: ${Colors.vividCyan};
        animation: ${transitions.pulse} 3s 1.5s cubic-bezier(0.5, 0.5, 0, 1);
        animation-iteration-count: infinite;
      }

      &:nth-child(3) {
        fill: ${Colors.orange};
        animation: ${transitions.pulse} 3s 2.25s cubic-bezier(0.5, 0.5, 0, 1);
        animation-iteration-count: infinite;
      }
    }
  }
`;
