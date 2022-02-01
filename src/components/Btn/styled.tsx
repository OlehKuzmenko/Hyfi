import styled, { css } from 'styled-components';
import Button from 'react-bootstrap/Button';
import { EColorScheme } from '@/redux/css';

export enum gradientBtnTypes {
  gradient = 'gradient',
  outline = 'outline',
}

export const BtnStyled = styled(Button)`
  padding: 14px 22px;
  font-family: Montserrat, serif;
  font-weight: 500;
  font-size: 15px;

  &.ilo-page_btn {
    padding: 11px 50px;
    font-size: 12px;
    line-height: 15px;
  }

  &.${gradientBtnTypes.gradient} {
    background: transparent
      linear-gradient(
        180deg,
        var(--theme-light-StyledBtn-grd1) 0%,
        var(--theme-light-StyledBtn-grd2) 100%
      )
      0 0 no-repeat padding-box;
    box-shadow: 0 5px 6px var(--theme-light-StyledBtn-shadow);
    border-radius: 5px;
    border: none;
    color: #ffff;
  }

  &.${gradientBtnTypes.gradient}:focus, &.${gradientBtnTypes.outline}:active {
    box-shadow: 0 5px 6px var(--theme-light-StyledBtn-shadow);
  }

  &.${gradientBtnTypes.outline} {
    border: 2px solid var(--theme-dark-blue);
    background: transparent;
    border-radius: 5px;
    opacity: 0.8;
    color: var(--theme-dark-blue);
  }

  &.${gradientBtnTypes.outline}:focus, &.${gradientBtnTypes.outline}:active {
    box-shadow: none;
  }
`;

export const BtnComponentTheme = css`
  ${BtnStyled} {
    --theme-light-StyledBtn-grd1: var(--theme-light-blue);
    --theme-light-StyledBtn-grd2: var(--theme-dark-blue2);
  }
  &[data-theme='${EColorScheme.DAY}'] {
    ${BtnStyled} {
      --theme-light-StyledBtn-shadow: #0e101429;
    }
  }
  &[data-theme='${EColorScheme.NIGHT}'] {
    ${BtnStyled} {
      --theme-light-StyledBtn-shadow: #00000029;
    }
  }
`;
export default BtnStyled;
