import styled from 'styled-components';
import Colors from 'styles/Colors';
import { BigCircleIcon } from 'assets/icons';
import zIndexes from 'styles/zIndexes';
import useScroll from 'hooks/common/useScroll';

export default function MainBannerBackgroundCircle(): JSX.Element {
  const isFixed = useScroll({ ref: null, height: 100 });
  return (
    <StyledMainBannerBackgroundCircle isFixed={isFixed}>
      <BigCircleIcon />
    </StyledMainBannerBackgroundCircle>
  );
}

const StyledMainBannerBackgroundCircle = styled.div<{ isFixed: boolean }>`
  z-index: ${zIndexes.backgroundCircle};
  width: 100%;

  svg {
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    max-width: 100rem;

    & circle {
      transition: fill 0.4s ease;
      fill: ${({ isFixed }) => (isFixed ? Colors.vividCyan : Colors.black)};
    }
  }
`;
