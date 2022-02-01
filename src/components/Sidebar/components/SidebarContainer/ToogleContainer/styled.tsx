import styled, { css } from 'styled-components';
import { ReactComponent as Sun } from './icons/sun_blue.svg';
import { ReactComponent as Moon } from './icons/moon_black.svg';
import { EColorScheme } from '@/redux/css';

export const StyledToggleContainer = styled.div`
  display: grid;
  grid-template-rows: 23px 23px;
  cursor: pointer;
`;
export const StyledMoon = styled(Moon)`
  &.${EColorScheme.NIGHT} path {
    fill: var(--theme-dark-blue);
  }
`;

export const StyledSun = styled(Sun)`
  justify-self: flex-end;
  &.${EColorScheme.NIGHT} path {
    fill: #c9c9c9;
  }
`;
export const StyledThemeToggleCircle = styled.div`
  width: 13px;
  height: 13px;
  transition: 300ms all ease-in-out;
  background: #ffff 0 0 no-repeat padding-box;
  border-radius: 20px;
  transform: translateX(0);
  &.${EColorScheme.NIGHT} {
    transform: translateX(-35px);
  }
`;
export const StyledThemeToggle = styled.div`
  width: 60px;
  height: 23px;
  background: var(--theme-dark-blue) 0 0 no-repeat padding-box;
  border-radius: 50px;
  padding: 5px 7px;
  display: flex;
  justify-content: flex-end;
  grid-area: 2/1/3/3;
  transition: 0.5s;
`;

export const StyledToggleContainerTheme = css`
  &[data-theme='${EColorScheme.DAY}'] {
    ${StyledToggleContainer} {
    }
  }
  &[data-theme='${EColorScheme.NIGHT}'] {
    ${StyledToggleContainer} {
    }
  }
`;
