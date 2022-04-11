import styled from 'styled-components';
import Search from './Search';
import { GoMarkGithub, GoThreeBars, GoHome, GoX, GoRepo } from 'react-icons/go';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

function SideBar(): JSX.Element {
  const [click, setClick] = useState(true);
  return (
    <SideNav className={click ? 'active' : 'nav-menu'}>
      <Logo onClick={() => setClick(!click)}>
        <GitHubIcon />
        <span>GitHub Issue</span>
        <Icon>{click ? <GoX /> : <GoThreeBars />}</Icon>
      </Logo>
      <Nav>
        <Link>
          <Search />
        </Link>
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
  background: ${({ theme }) => theme.color.header_bg};
  padding: 6px 14px;
  transition: all 0.5s ease;
  &.active {
    width: ${({ theme }) => theme.size.header_active};
    span {
      transition: all 0.5s ease;
      opacity: 1;
      margin: 0 auto;
    }
    a {
      span {
        display: block;
        margin: 0;
        padding-left: 10px;
      }
    }
  }
`;

const Logo = styled.div`
  color: ${({ theme }) => theme.color.white};
  display: flex;
  flex-direction: row;
  height: 50px;
  width: 100%;
  align-items: center;
  span {
    font-size: 20px;
    font-weight: 400;
    opacity: 0;
  }
`;

const GitHubIcon = styled(GoMarkGithub)`
  position: absolute;
  left: 5%;
  font-size: 28px;
`;

const Icon = styled.button`
  position: absolute;
  right: 5%;
  font-size: 20px;
  background: transparent;
  color: ${({ theme }) => theme.color.white};
  border: none;
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
    span {
      display: none;
    }
    &:hover {
      color: ${({ theme }) => theme.color.header_bg};
      background: ${({ theme }) => theme.color.white};
    }
  }
  .active {
    color: ${({ theme }) => theme.color.header_bg};
    background: ${({ theme }) => theme.color.white};
  }
`;
