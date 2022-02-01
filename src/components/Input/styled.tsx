import styled, { css } from 'styled-components';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import { EColorScheme } from '@redux/css';

export const StyledInputGroupText = styled(InputGroup.Text)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Montserrat', sans-serif;
  font-size: 12px;
  line-height: 15px;
  font-weight: bold;
  letter-spacing: 0;
  color: red;
  opacity: 1;

  border-left: none;
  background: red 0 0 no-repeat padding-box;
`;

export const StyledInputGroup = styled(InputGroup)`
  position: relative;
  /* max-width: 259px; */

  /* &.ilo-page_btn {
    margin-bottom: 0 !important;
    margin-right: 30px;
  } */
  &[data-gradient='true'] {
    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: var();
      border-radius: 5px;
    }
  }
  &[data-gradient='true'] {
    input {
      box-shadow: inset 0 3px 6px var(--theme-light-grey-2);
    }
  }
  &[data-badge='true'] {
    &:before {
      content: '';
      top: 0;
      left: 0;
      position: absolute;
      width: 100%;
      height: 100%;
      box-shadow: inset 0 3px 6px var(--theme-light-grey-2);
      border-radius: 5px;
      z-index: 1;
    }
    input {
      box-shadow: none;
      background: var(--theme-light-white) 0 0 no-repeat padding-box;
      font-family: 'Montserrat', sans-serif;
      font-size: 12px;
      line-height: 15px;
      font-weight: bold;
      letter-spacing: 0;
      color: red;
      &::placeholder {
        font-family: 'Montserrat', sans-serif;
        font-size: 12px;
        line-height: 15px;
        font-weight: bold;
        letter-spacing: 0;
        color: red;
      }
      opacity: 1;
      border-right: none;
    }
  }

  input {
    background: #ffff 0 0% no-repeat padding-box;
    box-shadow: inset 4px 5px 6px #c9c9c9;
    border-radius: 5px;
    padding: 9.5px 14px;
    color: var(--theme-light-black-2);
    &[type='number'] {
      -moz-appearance: textfield;
      &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button {
        -webkit-appearance: none;
      }
    }
  }
`;

export const StyledFormControl = styled(Form.Control)`
  max-height: 39px;
`;

export const ImportComponentTheme = css`
  ${StyledInputGroup} {
  }
  &[data-theme='${EColorScheme.DAY}'] {
  }
  &[data-theme='${EColorScheme.NIGHT}'] {
    ${StyledInputGroup} {
    }
  }
`;
