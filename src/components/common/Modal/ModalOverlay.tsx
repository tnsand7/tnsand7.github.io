import styled from 'styled-components';
import zIndexes from 'styles/zIndexes';

function ModalOverlay(): JSX.Element {
  return <StyledModalOverlay />;
}

const StyledModalOverlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  left: 0;
  top: 0;
  z-index: ${zIndexes.modalOverlay};
`;

export default ModalOverlay;
