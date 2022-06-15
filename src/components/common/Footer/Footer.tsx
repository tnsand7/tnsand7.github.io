import styled from 'styled-components';
import Colors from 'styles/Colors';

export default function Footer(): JSX.Element {
  return <StyledFooter>© 2022. KimYunJeong All Rights Reserved</StyledFooter>;
}

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: ${Colors.darkGrayishBlue};
  color: ${Colors.white};
`;
