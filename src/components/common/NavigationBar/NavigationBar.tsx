import styled, { css } from 'styled-components'
import Colors from 'styles/Colors'
import { Device } from 'styles/Device'

export type NavigationBarProps = {
  isFixed: boolean
}

export default function NavigationBar({ isFixed }: NavigationBarProps): JSX.Element {
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    const targetId = String(e.currentTarget.dataset.key)
    document.getElementById(targetId)?.scrollIntoView({
      behavior: 'smooth',
    })
  }

  return (
    <StyledNavigationBar isFixed={isFixed}>
      <StyledNavigationItemBox>
        <StyledNavigationItem data-key='aboutme' onClick={handleClick}>
          ABOUT ME
        </StyledNavigationItem>
        <StyledNavigationItem data-key='skills' onClick={handleClick}>
          SKILLS
        </StyledNavigationItem>
        <StyledNavigationItem data-key='history' onClick={handleClick}>
          HISTORY
        </StyledNavigationItem>
        <StyledNavigationItem data-key='aboutworkexperience' onClick={handleClick}>
          EXPERIENCE
        </StyledNavigationItem>
        <StyledNavigationItem data-key='projects' onClick={handleClick}>
          PROJECTS
        </StyledNavigationItem>
        <StyledNavigationItem data-key='companies' onClick={handleClick}>
          COMPANIES
        </StyledNavigationItem>
      </StyledNavigationItemBox>
    </StyledNavigationBar>
  )
}

const StyledNavigationItemBox = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 5px;
  padding: 10px 20px;
  font-size: 10px;

  @media ${Device.tablet} {
    gap: 20px;
    font-size: 16px;
  }
`

const StyledNavigationItem = styled.li`
  transition: font-size ease 0.8s, color ease 0.4s;
  cursor: pointer;

  &:hover {
    color: ${Colors.vividCyan};
  }
`

const StyledNavigationBar = styled.nav<{ isFixed: boolean }>`
  position: fixed;
  display: flex;
  flex-direction: column;
  width: 100vw;
  background-color: transparent;

  ${({ isFixed }) =>
    isFixed &&
    css`
      ${StyledNavigationItemBox} {
        opacity: 0.7;
        color: ${Colors.white};
        background-image: linear-gradient(to left, ${Colors.orange}, ${Colors.vividCyan}),
          linear-gradient(to right, ${Colors.vividCyan}, ${Colors.orange});
        background-clip: content-box, border-box;
        font-size: 10px;
      }

      @media ${Device.tablet} {
        ${StyledNavigationItemBox} {
          font-size: 14px;
        }

        ${StyledNavigationItem} {
          &:hover {
            color: ${Colors.darkGrayishBlue};
          }
        }
      }
    `}
`
