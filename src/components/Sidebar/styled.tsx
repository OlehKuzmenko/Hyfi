import styled, { css } from 'styled-components';
import breakpoints from '@styles/constants.styled';
import { IRoute } from '@interfaces/IRoutes';
import Link from '@components/Link';
import { LinksEnum } from '@interfaces/LinksEnum';
import SidebarContainer from './components/SidebarContainer';
import { changeClosed, EColorScheme } from '@/redux/css';
import { StyledNetworksContainerTheme } from './components/SidebarContainer/styled';
import React from 'react';
import useWindowDimensions, { useAppDispatch } from '@utils/hooks';

const StyledAside = styled.aside`
  position: fixed;
  z-index: 19;
  padding: 0 0 20px;
  min-width: var(--sidebar-initial-width);
  width: var(--sidebar-initial-width);
  background: var(--theme-light-white) 0 0 no-repeat padding-box;
  height: calc(100vh - var(--main-top-padding));
  visibility: visible;
  opacity: 1;
  transform: translateX(0);
  transition: 250ms ease-in;
  border: 1px solid var(--theme-light-grey-2);
  border-top: none;
  @media screen and ${breakpoints.Device.tablet} {
    position: fixed;
    top: 82px;
    height: 100%;
    overflow: auto;
  }

  @media screen and ${breakpoints.Device.tablet} {
    transform: translateX(calc(var(--sidebar-initial-width) * -1));
  }
`;
const StyledAsideMain = styled.main`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: none;
  overflow-y: scroll;
  overflow-x: hidden;
  padding-bottom: 60%;

  @media screen and ${breakpoints.Device.tablet} {
    justify-content: flex-start;
  }
  &::-webkit-scrollbar {
    width: 5px;
    height: 4px;
    background-color: var(--theme-light-white);
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: var(--theme-StyledAsideListElement-bg2);
  }
`;

const StyledAsideListElement = styled(Link)`
  display: grid;
  grid-template-columns: minmax(max-content, 24px) 1fr;
  gap: 25px;
  padding: 30px 36px;
  cursor: pointer;
  transition: 200ms all ease-in-out;
  transform: translateX(0);
  user-select: none;
  color: var(--theme-StyledAsideListElement-text);
  span {
    transition: 300ms all ease-in-out;
    text-decoration: none;
    margin: 0;
  }

  align-items: center;
  text-decoration: none;

  svg {
    * {
      transition: 300ms all ease-in-out;
      fill: var(--theme-StyledAsideListElement-text);
    }
  }

  &.active {
    pointer-events: none;
  }

  &:hover,
  &.active {
    color: var(--theme-StyledAsideListElement-active);

    background: transparent
      linear-gradient(
        62deg,
        var(--theme-StyledAsideListElement-bg1) 0%,
        var(--theme-StyledAsideListElement-bg2) 100%
      )
      119px 0 no-repeat padding-box;

    /* background: transparent linear-gradient(62deg, #0e101400 0%, #c9c9c938 100%)
      0% 0% no-repeat padding-box; */
    svg {
      * {
        fill: var(--theme-StyledAsideListElement-active);
      }
    }
  }
`;

const StyledList = styled.ul`
  list-style: none;
  padding-left: 0;
`;

type AsideProps = {
  routes: IRoute[];
};

interface ISidebarClosing {
  onClick?: (event: React.SyntheticEvent<HTMLLIElement>) => void;
}

export const AsideComponent = function (
  { routes }: AsideProps,
  { onClick }: ISidebarClosing
) {
  const dispatch = useAppDispatch();
  const { width } = useWindowDimensions();
  const sidebarClosing = (event: React.SyntheticEvent<HTMLLIElement>) => {
    if (width <= 768) {
      if (onClick) {
        onClick(event);
      }
      window.scrollTo({ left: 0, top: 0 });
      dispatch(changeClosed(true));
    }
  };

  return (
    <StyledAside id="sidebar">
      <StyledAsideMain>
        <StyledList>
          {routes.map(({ link, name, path, exact, ...props }, index) =>
            link ? (
              <li key={index} onClick={sidebarClosing}>
                <StyledAsideListElement
                  activeClassName="active"
                  isActive={(_, { pathname }) => {
                    if (typeof link === 'string') {
                      return (
                        pathname.split('/')[1] ===
                        (typeof link === 'string' ? link.split('/')[1] : path)
                      );
                    }
                    return (
                      pathname === (typeof link === 'string' ? link : path)
                    );
                  }}
                  to={typeof link === 'string' ? link : path}
                  exact={exact}
                  className="nav-item"
                >
                  {props.icon && <props.icon />}
                  <span>{name}</span>
                </StyledAsideListElement>
              </li>
            ) : null
          )}
        </StyledList>
        <SidebarContainer />
      </StyledAsideMain>
    </StyledAside>
  );
};

export const AsideComponentTheme = css`
  &[data-theme='${EColorScheme.DAY}'] {
    --theme-StyledAsideListElement-bg1: #0e101400;
    --theme-StyledAsideListElement-bg2: #c9c9c98c;
    --theme-StyledAsideListElement-text: var(--theme-light-black-2);
    --theme-StyledAsideListElement-active: var(--theme-dark-blue);
  }
  &[data-theme='${EColorScheme.NIGHT}'] {
    --theme-StyledAsideListElement-bg1: #0e101400;
    --theme-StyledAsideListElement-bg2: #0e1014;
    --theme-StyledAsideListElement-text: #c9c9c9;
    --theme-StyledAsideListElement-active: var(--theme-dark-blue);
  }
`;

interface StyledContainerProps {
  bgrImg?: string;
  children?: JSX.Element;
}

const StyledMain = styled.main`
  width: 100%;
  padding-bottom: var(--main-footer-height);
  color: var(--theme-StyledMain-color);
  &[data-page='${LinksEnum.ILO}'] {
    padding-left: var(--sidebar-initial-width);
  }
  &:not([data-page='${LinksEnum.ILO}']) {
    padding-left: calc(var(--sidebar-initial-width) + 4.1%);
    padding-right: 40px;
  }

  &[data-page='${LinksEnum.REPORT}'] {
    padding-left: var(--sidebar-initial-width);
    padding-right: 0;
    padding-bottom: var(--main-footer-height);
  }

  @media screen and ${breakpoints.Device.tablet} {
    &:not([data-page='${LinksEnum.ILO}']) {
      padding-left: 20px;
      padding-right: 20px;
    }

    &[data-page='${LinksEnum.ILO}'] {
      padding-left: 0;
    }
  }

  transition-duration: 0.5s;
  display: flex;
  align-items: center;
  ${(props: StyledContainerProps) => {
    return css`
      background: var(--theme-StyledMain-bg) url(${props.bgrImg ?? ''})
        no-repeat center/cover;
    `;
  }}
`;

export const StyledContainer = function ({
  children,
  ...props
}: StyledContainerProps) {
  return (
    <StyledMain id="main-content" {...props}>
      {children}
    </StyledMain>
  );
};
export const StyledContainerTheme = css`
  &[data-theme='${EColorScheme.DAY}'] {
    --theme-StyledMain-bg: #f1f3f5;
    --theme-StyledMain-color: var(--theme-light-black-2);
  }
  &[data-theme='${EColorScheme.NIGHT}'] {
    --theme-StyledMain-bg: var(--theme-light-black-1);
    --theme-StyledMain-color: var(--theme-light-grey-4);
  }
`;

export const SidebarComponentTheme = css`
  ${AsideComponentTheme}
  ${StyledContainerTheme}
  ${StyledNetworksContainerTheme}
`;
