import styled, { css } from 'styled-components';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import { EColorScheme } from '@/redux/css';

export enum TabsTypes {
  white = 'white',
}

export const StyledNav = styled(Nav)`
  background: var(--theme-light-StyledNav-bg) 0% 0% no-repeat padding-box;
  transition: all 300ms ease-out;

  border-radius: 5px;
  padding: 2px;
  grid-area: tabs;
`;
export const StyledNavItem = styled(Nav.Item)``;
export const StyledLink = styled(NavLink)`
  font-family: 'Montserrat', sans-serif;
  font-size: 12px;
  font-weight: normal;
  letter-spacing: 0px;
  color: var(--theme-light-StyledNavLink-defColor);
  transition: all 300ms ease-out;
  text-align: center;
  &.active {
    pointer-events: none;
    border: 0;
    border-radius: 5px;
    background: transparent
      linear-gradient(
        180deg,
        var(--theme-light-StyledBtn-grd1) 0%,
        var(--theme-light-StyledBtn-grd2) 100%
      )
      0% 0% no-repeat padding-box;

    box-shadow: 0 5px 6px var(--main-default-link-color);
    color: #ffff !important;
  }
`;
export const StyledNavLink = styled(Nav.Link)`
  font-family: 'Montserrat', sans-serif;
  font-size: 12px;
  font-weight: normal;
  letter-spacing: 0;
  color: var(--theme-light-StyledNavLink-defColor);
  text-align: center;
  transition: all 300ms ease-out;

  &.active {
    border: 0;
    border-radius: 5px;
    background: transparent
      linear-gradient(
        180deg,
        var(--theme-light-StyledBtn-grd1) 0%,
        var(--theme-light-StyledBtn-grd2) 100%
      )
      0% 0% no-repeat padding-box;

    box-shadow: 0 5px 6px var(--main-default-link-color);
    color: #ffff !important;
  }

  &.${TabsTypes.white}.active {
    border-radius: 5px;
    border: 0;
  }
`;

export const StyledNavTheme = css`
  ${StyledNavLink}, ${StyledLink} {
    --theme-light-StyledNavLink-grd1: var(--theme-light-blue);
    --theme-light-StyledNavLink-grd2: var(--theme-dark-blue2);
    --theme-light-StyledNavLink-defColor: var(--theme-light-black-2);
  }
  ${StyledNav} {
    --theme-light-StyledNav-bg: var(--theme-light-grey-4);
  }
  &[data-theme='${EColorScheme.NIGHT}'] {
    ${StyledNav} {
      --theme-light-StyledNav-bg: var(--theme-light-black-1);
    }
    ${StyledNavLink}, ${StyledLink} {
      --theme-light-StyledNavLink-grd1: var(--theme-light-blue);
      --theme-light-StyledNavLink-grd2: var(--theme-dark-blue2);
      --theme-light-StyledNavLink-defColor: var(--theme-light-grey-4);
    }
  }
`;
