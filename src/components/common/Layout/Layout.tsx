import { useRef } from 'react';
import styled from 'styled-components';
import zIndexes from 'styles/zIndexes';
import NavigationBar from 'components/common/NavigationBar';
import Footer from 'components/common/Footer';
import useScroll from 'hooks/common/useScroll';

export type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps): JSX.Element {
  const navigationRef = useRef<HTMLDivElement>(null);
  const isNavigationFixed = useScroll({ ref: navigationRef, height: 250 });

  return (
    <StyledLayout>
      <StyledHeader>
        <NavigationBar isFixed={isNavigationFixed} />
      </StyledHeader>
      <StyledBody>{children}</StyledBody>
      <Footer />
    </StyledLayout>
  );
}

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const StyledHeader = styled.header`
  z-index: ${zIndexes.header};
`;

const StyledBody = styled.main``;
const StyledFooter = styled.footer`
  height: 400px;
`;
