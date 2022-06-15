import styled, { css } from 'styled-components';
import Colors from 'styles/Colors';
import zIndexes from 'styles/zIndexes';
import { ArrowUpIcon } from 'assets/icons';
import useScroll from 'hooks/common/useScroll';
import debounce from 'lodash/debounce';

export default function TopButton(): JSX.Element {
  const isActive = useScroll({ ref: null, height: 250 });

  const handleTopButtonClick = () => {
    document.documentElement.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const debouncedTopButtonClick = debounce(() => {
    handleTopButtonClick();
  }, 300);

  return (
    <StyledTopButton isActive={isActive} onClick={debouncedTopButtonClick}>
      <ArrowUpIcon />
    </StyledTopButton>
  );
}
const StyledTopButton = styled.div<{ isActive: boolean }>`
  z-index: ${zIndexes.topButton};
  position: fixed;
  bottom: 0;
  right: 20px;
  width: 50px;
  color: #fff;
  height: 50px;
  font-size: 25px;
  opacity: 0;
  text-align: center;
  transform: translateY(40px);
  transition: all 0.4s ease;
  cursor: pointer;

  ${({ isActive }) =>
    isActive &&
    css`
      opacity: 1;
      transform: translateY(-20px);
    `}

  & svg {
    path {
      fill: ${Colors.darkGrayishBlue};
    }
  }
`;
