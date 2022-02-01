import styled, { css } from 'styled-components';
import breakpoints from '@styles/constants.styled';
import { ReactComponent as Logo } from '@icons/logo.svg';
import { ReactComponent as Sidebar } from '@icons/sidebar.svg';
import { LinksEnum } from '@interfaces/LinksEnum';
import { UserStatusType } from '@/interfaces/IUser';
import { ReactComponent as WalletIcon } from '@icons/wallet.svg';
import { EColorScheme } from '@/redux/css';

export const StyledWalletIcon = styled(WalletIcon)`
  * {
    @media screen and ${breakpoints.Device.tablet} {
      fill: #ffff;
    }
  }
`;

export const StyledHeader = styled.header`
  display: grid;
  grid-template-columns: 245px 24px 1fr;
  grid-template-areas: 'logo side dropdown';
  transition: 300ms all ease-in-out;

  align-items: center;
  padding: 33px 36px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 20;
  background: var(--theme-light-white) 0 0 no-repeat padding-box;
  border: 1px solid var(--theme-light-grey-2);
  max-height: var(--main-top-padding);
  height: var(--main-top-padding);
  @media screen and ${breakpoints.Device.tablet} {
    margin-bottom: 5px;
    grid-template-columns: 50px 50px 24px;
    justify-content: space-between;
    grid-template-areas: 'dropdown logo side';
  }

  &[data-status='${UserStatusType.AUTHED}'] {
  }

  &[data-status='${UserStatusType.VISITOR}'] {
    grid-template-columns: 245px 24px 1fr;
    @media screen and ${breakpoints.Device.tablet} {
      grid-template-columns: max-content 50px 24px;
    }
  }

  .dropdown {
    justify-self: flex-end;
    grid-area: dropdown;
  }

  & > {
    @media screen and ${breakpoints.Device.tablet} {
      margin-bottom: 5px;
    }
  }

  @media screen and ${breakpoints.Device.tablet} {
    padding: 15px 20px;
  }

  .check-box {
    cursor: pointer;
  }
`;

export const StyledLogo = styled(Logo)`
  width: 50px;
  height: 50px;
  * {
    fill: #4364f7;
  }
`;
export const StyledSidebarBtn = styled(Sidebar)`
  transition: all 500ms ease-out;
  * {
    fill: var(--theme-StyledSidebarBtn-backround);
  }
`;

export const StyledCheckbox = styled.input`
  display: none;

  &:checked ~ #sidebar {
    transform: translateX(calc(var(--sidebar-initial-width) * -1));
  }

  &:checked ~ #main-content:not([data-page='${LinksEnum.ILO}']) {
    padding-left: 8.5%;
    transition-delay: 0.2s;
  }

  &:checked ~ #main-content[data-page='${LinksEnum.ILO}'] {
    padding-left: 0;
  }

  &:checked ~ #sidebar .nav-item {
    -webkit-transform: translateX(-200px);
    transform: translateX(-200px);
  }

  &:checked ~ #header #sidebar-logo {
    transform: scale(-1);
  }

  &:checked ~ #sidebar .brand-logo {
    -webkit-transform: translateX(-200px);
    transform: translateX(-200px);
    visibility: hidden;
  }

  @media screen and (min-width: 1050px) {
    &:checked ~ #main-content[data-page='${LinksEnum.ILO}'] .ilo-block {
      grid-template-columns: 1fr 25%;
    }
  }

  &:checked ~ #sidebar .navbar-header {
    visibility: hidden;
  }

  &:checked ~ #main-content .graph-block .graph-block__container {
    grid-template-areas:
      'title . tabs tabs tabs'
      'graph graph graph graph graph'
      'graph graph graph graph graph';
  }

  @media screen and (max-width: 1592px) {
    &:checked ~ #main-content .ilo-header {
      width: calc((100% - 60px) / 3);
    }
  }

  @media screen and ${breakpoints.Device.desktop} {
    &:checked ~ #main-content .ilo-block__img {
      display: block;
    }

    &:checked ~ #main-content {
      padding-left: 40px;
      transition-delay: 0.2s;
    }
  }

  @media screen and (max-width: 1288px) {
    &:checked ~ #main-content .ilo-header {
      width: calc((100% - 30px) / 2);
    }
  }

  @media screen and ${breakpoints.Device.desktop_sm} {
    &:checked ~ #main-content .dashboard-wrapper {
      grid-template-columns: repeat(2, 1fr);
      grid-template-areas:
        'head head'
        'license transactions'
        'account details'
        'graph graph';
    }
  }

  @media screen and (max-width: 1049px) {
    &:checked ~ #main-content .ilo-header {
      width: calc((100% - 60px) / 3);
    }
  }

  @media screen and ${breakpoints.Device.tablet} {
    &:checked ~ #sidebar .nav-item {
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }

    &:checked ~ #sidebar {
      transform: translateX(0);
    }

    &:checked ~ #sidebar .brand-logo {
      -webkit-transform: translateX(0);
      transform: translateX(0);
      visibility: visible;
    }

    &:checked ~ #main-content .dashboard-wrapper {
      grid-template-columns: 1fr;
      grid-template-areas:
        'head'
        'license'
        'transactions'
        'account'
        'details'
        'graph';
    }
  }

  @media screen and (max-width: 966px) {
    &:checked ~ #main-content .ilo-header {
      width: calc((100% - 30px) / 2);
    }
  }
`;
export const StyledOverlay = styled.div`
  display: block;
  background: var(--theme-StyledOverlay-backround);
  @media screen and ${breakpoints.Device.tablet} {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
  }
`;

export const StyledBtnContainer = styled.div`
  position: relative;
  justify-self: flex-end;
  grid-area: dropdown;
  overflow: hidden;

  .wallet-container {
    display: none;
    @media screen and ${breakpoints.Device.tablet} {
      display: flex;
      padding: 14px;
    }
  }

  .home-page_btn {
    @media screen and ${breakpoints.Device.tablet} {
      padding: 2px;
    }
  }

  span {
    @media screen and ${breakpoints.Device.tablet} {
      display: none;
    }
  }
`;

export const NavbarComponentTheme = css`
  &[data-theme='${EColorScheme.DAY}'] {
    ${StyledOverlay} {
      --theme-StyledOverlay-backround: #f1f3f5e6;
    }
    ${StyledHeader} {
      ${StyledSidebarBtn} {
        --theme-StyledSidebarBtn-backround: var(--theme-light-black-2);
      }
    }
  }
  &[data-theme='${EColorScheme.NIGHT}'] {
    ${StyledOverlay} {
      --theme-StyledOverlay-backround: #191d24e6;
    }
    ${StyledHeader} {
      ${StyledSidebarBtn} {
        --theme-StyledSidebarBtn-backround: var(--theme-light-grey-1);
      }
    }
  }
`;
