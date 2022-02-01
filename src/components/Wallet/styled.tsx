import styled, { css } from 'styled-components';
import { ReactComponent as WalletIcon } from '@icons/wallet.svg';
import { ReactComponent as DropdownArrow } from '@icons/dropdown_arrow.svg';

import breakpoints from '@styles/constants.styled';
import { EColorScheme } from '@/redux/css';

export const StyledWalletContainer = styled.div`
  --logo-width: 46px;
  cursor: pointer;
  overflow: hidden;
  padding: 2px;
  max-width: var(--main-wallet-width);
  position: relative;
  display: grid;
  grid-template-columns: var(--logo-width) 1fr;
  gap: 13px;
  align-items: center;

  background: var(--theme-dark-blue);
  box-shadow: 0 5px 6px var(--theme-light-grey-5);
  border-radius: 5px;
  @media screen and ${breakpoints.Device.tablet} {
    gap: 0;
    width: max-content;
  }

  &[aria-expanded='true'] {
    .dropdown-arrow {
      transform: rotate(-180deg);
    }
  }

  &:after {
    display: none;
  }

  &:before {
    content: '';
    position: absolute;
    background: transparent
      linear-gradient(90deg, #6984ff00 0%, var(--theme-dark-blue) 100%) 0 0
      no-repeat padding-box;
    /* background: var(--theme-dark-blue); */
    z-index: 1;
    width: calc(100% - var(--logo-width));
    height: 100%;
    right: 0;
  }
`;

export const StyledWalletIcon = styled(WalletIcon)``;
export const StyledWalletIconContainer = styled.div`
  padding: 12px 11px;
  background: white;
  border-radius: 3px;
`;
export const StyledWalletData = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-size: 15px;
  font-weight: 500;
  letter-spacing: 0px;
  color: #ffffff;
  user-select: none;
  @media screen and ${breakpoints.Device.tablet} {
    display: none;
  }
`;
export const StyledArrow = styled(DropdownArrow)`
  right: 17px;
  position: absolute;
  z-index: 2;
  transition: 400ms all ease-out;
`;

export const StyledMenuBtn = styled.a`
  display: grid;
  grid-template-columns: min-content 16px;
  gap: 115px;
  align-items: center;
  justify-content: space-between;
  font-family: 'Montserrat', sans-serif;
  font-size: 15px;
  font-weight: 500;
  letter-spacing: 0px;
  color: var(--theme-StyledMenuBtn-color) !important;
  opacity: 1;
  cursor: pointer;
  padding: 26px 44px;
  user-select: none;
  @media screen and ${breakpoints.Device.tablet} {
    padding: 13px 22px;
  }

  svg {
    width: 16px;
    height: 16px;
  }

  &.active,
  &:hover {
    background: transparent
      linear-gradient(
        62deg,
        var(--theme-StyledMenuBtn-hoverBg1) 0%,
        var(--theme-StyledMenuBtn-hoverBg2) 100%
      )
      0% 0% no-repeat padding-box;
  }
`;
export const StyledMenu = styled.ul`
  margin-top: 13px;
  padding: 0;
  background: var(--theme-light-white);
  box-shadow: 0px 3px 5px var(--theme-StyledMenu-shadow);
  border-radius: 10px;
  position: relative;
  overflow: hidden;
`;

export const StyledThemeContainer = css`
  &[data-theme='${EColorScheme.DAY}'] {
    ${StyledMenuBtn} {
      --theme-StyledMenuBtn-color: #191d24;
      --theme-StyledMenuBtn-hoverBg1: #0e101400;
      --theme-StyledMenuBtn-hoverBg2: #c9c9c938;
    }

    ${StyledMenu} {
      --theme-StyledMenu-shadow: #0d101426;
    }
  }

  &[data-theme='${EColorScheme.NIGHT}'] {
    ${StyledMenuBtn} {
      --theme-StyledMenuBtn-color: #c9c9c9;
      --theme-StyledMenuBtn-hoverBg2: #0e1014;
    }

    ${StyledMenu} {
      --theme-StyledMenu-shadow: #0d1014;
    }
  }
`;
