import styled from 'styled-components';
import { GoHome, GoRepo } from 'react-icons/go';
import { NavLink } from 'react-router-dom';
import Logo from '../atoms/Logo';
import SaveStorage from './SaveStorage';

function SideBar(): JSX.Element {
  return (
    <SideNav>
      <Logo />
      <Nav>
        <Link>
          <NavLink to="/">
            <GoHome />
            <span>HOME</span>
          </NavLink>
        </Link>
        <Link>
          <NavLink to="/store">
            <GoRepo />
            <span>STORE</span>
          </NavLink>
        </Link>
      </Nav>
      <SaveStorage />
    </SideNav>
  );
}

export default SideBar;

const SideNav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: ${({ theme }) => theme.size.header};
  background: ${({ theme }) => theme.color.main_black};
  padding: 6px 14px;
  transition: all 0.5s ease;
`;

const Nav = styled.ul`
  margin-top: 20px;
`;

const Link = styled.li`
  position: relative;
  height: 50px;
  width: 100%;
  list-style: none;
  list-style: none;
  line-height: 50px;
  margin: 5px 0;
  a {
    color: ${({ theme }) => theme.color.white};
    display: flex;
    align-items: center;
    text-decoration: none;
    border-radius: 12px;
    transition: all 0.4s ease;
    svg {
      font-size: 20px;
      width: 20px;
      height: 20px;
      padding: 0.8em;
    }
    &:hover {
      color: ${({ theme }) => theme.color.main_black};
      background: ${({ theme }) => theme.color.white};
    }
  }
  .active {
    color: ${({ theme }) => theme.color.main_black};
    background: ${({ theme }) => theme.color.white};
  }
`;
