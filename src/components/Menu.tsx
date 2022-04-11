import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

function Menu(): JSX.Element {
  return (
    <Header>
      <Nav>
        <Link>
          <NavLink to="/">Search Repository</NavLink>
        </Link>
        <Link>
          <NavLink to="/store">Stored Repository</NavLink>
        </Link>
      </Nav>
    </Header>
  );
}

export default Menu;

const Header = styled.header`
  z-index: 32;
  display: flex;
  padding: 16px;
  font-size: 14px;
  line-height: 1.5;
  align-items: center;
  background: ${({ theme }) => theme.color.black};
  color: ${({ theme }) => theme.color.white};
`;

const Nav = styled.ul`
  display: flex;
  flex-direction: row;
`;

const Link = styled.li`
  padding: 0 2em;
  font-weight: 600;
  a {
    text-decoration: none;
    width: 125px;
    color: ${({ theme }) => theme.color.white};
    display: block;
    opacity: 0.5;
    &::after {
      position: absolute;
      display: block;
      content: ' ';
      bottom: -1;
      margin: 0 auto;
      width: 0;
      border-bottom: 2px solid ${({ theme }) => theme.color.white};
      transition: all 0.15s ease-in-out;
    }
    &:hover {
      opacity: 1;
    }
    &:hover:not(.active)::after {
      width: 125px;
    }
  }
  .active {
    color: ${({ theme }) => theme.color.white};
    border-bottom: 2px solid ${({ theme }) => theme.color.white};
    opacity: 1;
  }
`;
