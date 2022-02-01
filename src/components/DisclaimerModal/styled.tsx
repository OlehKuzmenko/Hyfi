import styled, { css } from 'styled-components';
import { StyledBody as SBody } from '@styles/modal.styled';
import Form from 'react-bootstrap/Form';
import { ReactComponent as Chain } from '@icons/chain.svg';
import Row from 'react-bootstrap/Row';
import Btn from '@components/Btn';
import breakpoints from '@styles/constants.styled';
import { EColorScheme } from '@redux/css';

export const StyledBtn = styled(Btn)`
  width: 100%;
`;
export const StyledLogo = styled(Chain)`
  width: 32px;
  height: 32px;
`;

export const StyledFormLabel = styled(Form.Label)`
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 15px;
  line-height: 19px;
  letter-spacing: 0;
  color: var(--theme-StyledFormLabel);
  opacity: 1;
  margin-bottom: 12.5px;
`;

export const StyledFormGroup = styled(Form.Group)`
  &.error {
    .invalid-feedback {
      display: block;
    }
  }
`;

export const StyledFromControlContainer = styled.div`
  position: relative;

  .text-container {
    position: absolute;
    display: grid;
    align-items: center;
    gap: 13px;
    grid-template-columns: 32px 1fr;
    top: 12px;
    right: 10px;
  }
`;

export const StyledDataRow = styled(Row)`
  display: grid;
  grid-template-columns: 3fr minmax(min-content, 330px) minmax(
      min-content,
      330px
    );
  align-items: flex-end;
  grid-template-areas: 'checkbox input button';
  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas:
      'checkbox checkbox checkbox checkbox'
      'input input button button';
  }
  @media screen and ${breakpoints.Device.mobile} {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-areas:
      'checkbox'
      'input' 'button';
  }

  .button {
    grid-area: button;
    align-self: center;
    margin-bottom: 10px;
  }

  .checkbox {
    grid-area: checkbox;
  }

  .input {
    grid-area: input;
  }
`;

export const StyledValidFeedback = styled(Form.Control.Feedback)`
  display: inline-flex;
  font-family: Montserrat, serif;
  font-weight: 500;
  font-size: 10px;
  line-height: 13px;
  color: var(--theme-dark-blue);
`;

export const StyledFormControl = styled(Form.Control)`
  background: var(--theme-StyledFormControl-bgr) 0 0 no-repeat padding-box;
  box-shadow: inset 0 3px 6px var(--theme-StyledFormControl-boxshadow);
  border: 1px solid var(--theme-StyledFormControl-border);
  border-radius: 5px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0;
  color: var(--theme-StyledFormControl-color);
  opacity: 1;
  padding: 12px 60px 12px 20px;
  -webkit-appearance: none;
  appearance: none;
  -moz-appearance: textfield !important;
  margin: 0 !important;

  &:focus {
    padding: 12px 20px;

    & ~ .text-container {
      display: none;
    }
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */

  &[type='number'] {
    -moz-appearance: textfield;
  }
`;
export const StyledFormCheck = styled(Form.Check)`
  .form-check-input {
    background: var(--theme-StyledFormCheck-bgr);
    border: 1px solid var(--theme-light-blue);

    &:checked {
      background-color: var(--theme-light-blue);
      border-color: var(--theme-light-blue);
    }
  }

  .form-check-label {
    font: normal normal medium 12px/24px Montserrat;
    letter-spacing: 0;
    color: var(--theme-light-blue);
    opacity: 1;
  }
`;

export const StyledText = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: var(--theme-StyledText);
`;

export const StyledBody = styled(SBody)`
  font: normal normal medium 14px/24px Montserrat;
  letter-spacing: 0;
  color: var(--theme-StyledBody-color);
  background: var(--theme-StyledBody-bgr) 0 0 no-repeat padding-box;
  border-radius: 0 0 10px 10px;
  box-shadow: inset 0 3px 5px var(--theme-StyledBody-boxshadow);
`;

export const DisclaimerModalComponentTheme = css`
  &[data-theme='${EColorScheme.DAY}'] {
    ${StyledFormLabel} {
      --theme-StyledFormLabel: var(--theme-light-black-2);
    }

    ${StyledFormControl} {
      --theme-StyledFormControl-bgr: var(--theme-light-white);
      --theme-StyledFormControl-boxshadow: var(--theme-light-grey-2);
      --theme-StyledFormControl-border: var(--theme-light-grey-2);
      --theme-StyledFormControl-color: var(--theme-light-black-2);
    }

    ${StyledFormCheck} {
      --theme-StyledFormCheck-bgr: var(--theme-light-white);
    }

    ${StyledText} {
      --theme-StyledText: var(--theme-light-black-2);
    }

    ${StyledBody} {
      --theme-StyledBody-bgr: var(--theme-light-white);
      --theme-StyledBody-color: var(--theme-light-black-2);
      --theme-StyledBody-boxshadow: var(--theme-grey);
    }
  }

  &[data-theme='${EColorScheme.NIGHT}'] {
    ${StyledFormLabel} {
      --theme-StyledFormLabel: var(--theme-light-grey-4);
    }

    ${StyledFormControl} {
      --theme-StyledFormControl-bgr: var(--theme-light-white);
      --theme-StyledFormControl-boxshadow: var(--theme-light-black-1);
      --theme-StyledFormControl-border: var(--theme-light-black-1);
      --theme-StyledFormControl-color: var(--theme-light-grey-4);
    }

    ${StyledFormCheck} {
      --theme-StyledFormCheck-bgr: var(--theme-light-white);
    }

    ${StyledText} {
      --theme-StyledText: var(--theme-light-grey-4);
    }

    ${StyledBody} {
      --theme-StyledBody-bgr: var(--theme-light-white);
      --theme-StyledBody-color: var(--theme-light-grey-4);
      --theme-StyledBody-boxshadow: var(--theme-black);
    }
  }
`;
