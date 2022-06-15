import styled from 'styled-components';
import Colors from 'styles/Colors';
import { Device } from 'styles/Device';

export const StyledTitle = styled.h2<{ color?: string }>`
  position: relative;
  margin-bottom: 40px;
  font-size: 2rem;

  &::after {
    content: '';
    position: absolute;
    bottom: 0px;
    left: 0;
    opacity: 0.4;
    width: 100%;
    height: 10px;
    background-color: ${({ color }) => color || Colors.vividCyan};
  }

  @media ${Device.tablet} {
    font-size: 3rem;
    margin-bottom: 80px;
  }
`;

export const StyledBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  color: ${Colors.darkGrayishBlue};
  font-size: 12px;

  @media ${Device.tablet} {
    font-size: 14px;
  }
`;

export const StyledName = styled.div`
  width: 30%;
  font-size: 12px;

  @media ${Device.tablet} {
    font-size: 14px;
  }
`;

export const StyledContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
  width: 70%;
  overflow-x: auto;
`;
