import { EColorScheme } from '@/redux/css';
import styled, { css } from 'styled-components';
import { StyledToggleContainerTheme } from './ToogleContainer/styled';

export const StyledNetworksContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledNetworkLink = styled.a`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  background: var(--theme-StyledNetworkLink-bg) 0 0 no-repeat padding-box;
  box-shadow: 0 3px 5px var(--theme-StyledNetworkLink-shadow);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 300ms all ease-in-out;

  svg * {
    transition: 300ms all ease-in-out;
    fill: var(--theme-StyledNetworkLink-color);
  }
  &:not(:last-child) {
    margin-right: 8px;
  }
`;

export const StyledToggleContainer = styled.div`
  display: grid;
  grid-template-rows: 23px 23px;
  cursor: pointer;
`;
export const StyledSidebarContainer = styled.div`
  width: var(--sidebar-initial-width);
  padding: 0 33px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: 500ms;
`;

export const StyledNetworksContainerTheme = css`
  &[data-theme='${EColorScheme.DAY}'] {
    ${StyledNetworkLink} {
      --theme-StyledNetworkLink-bg: var(--theme-light-white);
      --theme-StyledNetworkLink-shadow: #0d101426;
      --theme-StyledNetworkLink-color: var(--theme-light-black-2);
    }
  }
  &[data-theme='${EColorScheme.NIGHT}'] {
    ${StyledNetworkLink} {
      --theme-StyledNetworkLink-bg: var(--theme-dark-blue);
      --theme-StyledNetworkLink-shadow: #0d1014;
      --theme-StyledNetworkLink-color: #ffff;
    }
  }
  ${StyledToggleContainerTheme}
`;
