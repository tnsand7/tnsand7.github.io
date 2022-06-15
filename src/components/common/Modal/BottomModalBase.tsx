import { useRef } from 'react';
import styled from 'styled-components';
import Colors from 'styles/Colors';
import zIndexes from 'styles/zIndexes';
import ModalOverlay from './ModalOverlay';
import useHideScroll from 'hooks/common/useHideScroll';
import transitions from 'styles/transitions';
import useOffsetParentClick from 'hooks/common/useOffsetParentClick';

export type BottomModalBaseProps = {
  children: React.ReactNode;
  closeModal?: () => void;
};

function BottomModalBase({ children, closeModal }: BottomModalBaseProps): JSX.Element {
  const modalRef = useRef<HTMLDivElement>(null);

  useHideScroll();
  useOffsetParentClick(modalRef, closeModal ?? (() => undefined));
  return (
    <>
      <ModalOverlay />
      <StyledBottomModalBaseBlock>
        <StyledBottomSheet ref={modalRef}>
          <StyledBottomSheetBody>{children}</StyledBottomSheetBody>
        </StyledBottomSheet>
      </StyledBottomModalBaseBlock>
    </>
  );
}

const StyledBottomModalBaseBlock = styled.div`
  z-index: ${zIndexes.bottomModal};
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const StyledBottomSheet = styled.div`
  z-index: ${zIndexes.modal};
  position: relative;
  width: 100%;
  max-height: 90%;
  border-radius: 24px 24px 0 0;
  background-color: ${Colors.white};
  animation: ${transitions.slideUp} 0.25s forwards ease-in;
`;

const StyledBottomSheetBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  font-size: 53px;
  overflow-y: hidden;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export default BottomModalBase;
