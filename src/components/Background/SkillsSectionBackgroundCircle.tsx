import styled, { css } from 'styled-components';
import Colors from 'styles/Colors';
import { HalfBigCircleIcon } from 'assets/icons';
import zIndexes from 'styles/zIndexes';
import useScroll from 'hooks/common/useScroll';

export default function SkillsSectionBackgroundCircle(): JSX.Element {
  const isActive = useScroll({ ref: null, height: 1600 });

  return (
    <StyledSkillsSectionBackgroundCircle isActive={isActive}>
      <HalfBigCircleIcon />
    </StyledSkillsSectionBackgroundCircle>
  );
}

const StyledSkillsSectionBackgroundCircle = styled.div<{ isActive: boolean }>`
  z-index: ${zIndexes.backgroundCircle};
  width: 100%;
  opacity: 0.2;

  svg {
    position: absolute;
    top: 255%;
    width: 50%;
    right: 0px;
    transform: rotate(180deg);
    max-width: 100rem;

    & circle {
      transition: fill 0.4s ease;
      fill: ${({ isActive }) => (isActive ? Colors.vividCyan : Colors.silver)};
    }
  }
`;
