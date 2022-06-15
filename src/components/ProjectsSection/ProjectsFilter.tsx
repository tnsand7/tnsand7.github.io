import styled, { css } from 'styled-components';
import Colors from 'styles/Colors';
import { Device } from 'styles/Device';

export type ProjectsFilterProps = {
  filters: string[];
  selectedKey: string;
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
};

export default function ProjectsFilter({
  filters,
  selectedKey,
  onClick,
}: ProjectsFilterProps): JSX.Element {
  return (
    <StyledFilter>
      <StyledFilterItem data-key="" isActive={false} onClick={onClick}>
        all
      </StyledFilterItem>
      {filters?.map((filter) => (
        <StyledFilterItem
          key={filter}
          data-key={filter}
          isActive={selectedKey === filter}
          onClick={onClick}
        >
          {filter}
        </StyledFilterItem>
      ))}
    </StyledFilter>
  );
}

const StyledFilter = styled.ul`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  margin-bottom: 70px;

  @media ${Device.tablet} {
    flex-direction: row;
  }
`;

const StyledFilterItem = styled.li<{ isActive: boolean }>`
  position: relative;
  width: fit-content;
  color: ${Colors.darkGrayishBlue};
  font-size: 14px;
  text-transform: uppercase;
  transition: color 0.4s ease;
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    display: inline-block;
    bottom: 0px;
    left: 0;
    opacity: 0.4;
    width: 0%;
    height: 10px;
    background-color: ${Colors.vividCyan};
    transition: width 0.4s ease;
  }

  ${({ isActive }) =>
    isActive &&
    css`
      color: ${Colors.lightSilver};
      &::after {
        width: 100%;
      }
    `}

  &:hover {
    color: ${Colors.lightSilver};
  }
`;
