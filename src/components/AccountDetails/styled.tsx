import styled, { css } from 'styled-components';
import Button from '@components/Btn';
import BootstrapButton from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import { StyledBody as SBody } from '@styles/modal.styled';
import { EColorScheme } from '@redux/css';
export const StyledInputGroup = styled(InputGroup)`
  position: relative;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: transparent
      linear-gradient(
        86deg,
        var(--theme-StyledInputGroup-before-1) 0%,
        var(--theme-StyledInputGroup-before-2) 100%
      )
      0 0 no-repeat padding-box;
    z-index: 1;
  }
  input {
    background: var(--theme-StyledInputGroup-input);
    box-shadow: inset 4px 5px 6px var(--theme-StyledInputGroup-boxshadow);
    border-radius: 5px;
    border: 1px solid var(--theme-StyledInputGroup-border);
    color: var(--theme-StyledInputGroup-color);
  }
`;
export const StyledButton = styled(Button)`
  font-family: 'Montserrat', sans-serif;
  font-size: 12px;
  font-weight: 500;
`;
export const StyledButtonWithIcon = styled(BootstrapButton)`
  border: 2px solid transparent;
  &:hover,
  &:focus {
    border: 2px solid var(--theme-dark-blue);
    background: transparent;
    color: var(--theme-dark-blue);
  }
`;
export const StyledText = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  font-weight: 500;
  margin: 0;
  color: var(--theme-dark-blue);
`;
export const StyledBody = styled(SBody)`
  //background: var(--theme-StyledBody-bgr);
  border-radius: 0 0 10px 10px;
  box-shadow: inset 0 3px 5px var(--theme-StyledBody-boxshadow);
`;
export const AccountDetailsComponentTheme = css`
  &[data-theme='${EColorScheme.DAY}'] {
    ${StyledInputGroup} {
      --theme-StyledInputGroup-before-1: #ffffff00;
      --theme-StyledInputGroup-before-2: var(--theme-light-white);
      --theme-StyledInputGroup-input: var(--theme-light-white);
      --theme-StyledInputGroup-boxshadow: var(--theme-light-grey-2);
      --theme-StyledInputGroup-border: var(--theme-light-grey-2);
      --theme-StyledInputGroup-color: var(--theme-light-black-2);
    }
    ${StyledBody} {
      --theme-StyledBody-bgr: var(--theme-light-white);
      --theme-StyledBody-boxshadow: var(--theme-light-grey-2);
    }
  }
  &[data-theme='${EColorScheme.NIGHT}'] {
    ${StyledInputGroup} {
      --theme-StyledInputGroup-before-1: #0e101400;
      --theme-StyledInputGroup-before-2: var(--theme-light-white);
      --theme-StyledInputGroup-input: var(--theme-light-white);
      --theme-StyledInputGroup-boxshadow: var(--theme-light-black-1);
      --theme-StyledInputGroup-border: var(--theme-light-black-2);
      --theme-StyledInputGroup-color: var(--theme-light-grey-4);
    }
    ${StyledBody} {
      --theme-StyledBody-bgr: var(--theme-light-white);
      --theme-StyledBody-boxshadow: var(--theme-light-black-1);
    }
  }
`;
