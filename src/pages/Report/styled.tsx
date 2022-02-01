import styled, { css } from 'styled-components';
import ReportBgr from '@img/report_bgr.jpg';
import breakpoints from '@styles/constants.styled';
import Form from 'react-bootstrap/Form';
import Btn from '@components/Btn';
import { EColorScheme } from '@redux/css';

export const StyledForm = styled(Form)`
  width: 100%;
  max-width: 709px;
  max-height: 839px;
  padding: 65px 179px 65px 75px;
  background: var(--theme-StyledForm-bgr);
  box-shadow: 0 3px 5px var(--theme-StyledForm-boxshadow);
  border-radius: 10px;

  @media screen and ${breakpoints.Device.desktop} {
    padding: 65px 75px;
  }
`;

export const StyledFormControl = styled(Form.Control)`
  box-shadow: inset 4px 5px 6px var(--theme-StyledFormControl-boxshadow);
  width: 100%;
  border-radius: 5px;
  border: 1px solid var(--theme-StyledFormControl-border);
  background: var(--theme-StyledFormControl-bgr);
`;

export const StyledTitle = styled.h1`
  font-family: Montserrat, serif;
  font-weight: bold;
  font-size: 40px;
  line-height: 50px;
  color: var(--theme-StyledTitle);
  margin-bottom: 30px;
`;

export const StyledInputText = styled.p`
  font-family: Montserrat, serif;
  font-weight: 500;
  font-size: 15px;
  line-height: 70px;
  color: var(--theme-StyledInputText);
  margin: 0;
`;

export const StyledInputLabel = styled.label`
  height: 50px;
  width: 184px;
  padding: 16px 27px;
  border: 2px solid var(--theme-dark-blue);
  border-radius: 5px;
  opacity: 0.8;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  margin-bottom: 30px;
`;

export const StyledFormLabel = styled(Form.Label)`
  font-family: Montserrat, serif;
  font-weight: 500;
  font-size: 15px;
  line-height: 19px;
  position: relative;
  color: var(--theme-StyledFormLabel);

  &:after {
    content: '*';
    position: absolute;
    top: -2px;
    right: -7px;
    color: #f5044e;
  }
`;

export const StyledReport = styled.div`
  width: 100%;
  height: 100%;
  background: url(${ReportBgr}) no-repeat center/cover;
  padding: 75px 0 76px var(--sidebar-initial-width);

  @media screen and ${breakpoints.Device.desktop} {
    padding: 75px 20px calc(6% + 50px) calc(var(--sidebar-initial-width) + 20px);
    display: flex;
    justify-content: center;
  }
`;

export const StyledBtn = styled(Btn)`
  padding: 15px 60px;
`;

export const ReportFormComponentTheme = css`
  &[data-theme='${EColorScheme.DAY}'] {
    ${StyledForm} {
      --theme-StyledForm-bgr: var(--theme-light-white);
      --theme-StyledForm-boxshadow: var(--theme-grey);

      ${StyledFormControl} {
        --theme-StyledFormControl-boxshadow: var(--theme-light-grey-2);
        --theme-StyledFormControl-border: var(--theme-light-grey-2);
        --theme-StyledFormControl-bgr: var(--theme-light-white);
      }

      ${StyledTitle} {
        --theme-StyledTitle: var(--theme-light-black-2);
      }

      ${StyledInputText} {
        --theme-StyledInputText: var(--theme-light-grey-2);
      }

      ${StyledFormLabel} {
        --theme-StyledFormLabel: var(--theme-light-black-2);
      }
    }
  }
  &[data-theme='${EColorScheme.NIGHT}'] {
    ${StyledForm} {
      --theme-StyledForm-bgr: var(--theme-light-white);
      --theme-StyledForm-boxshadow: var(--theme-black);

      ${StyledFormControl} {
        --theme-StyledFormControl-boxshadow: var(--theme-light-grey-2);
        --theme-StyledFormControl-border: var(--theme-light-grey-2);
        --theme-StyledFormControl-bgr: var(--theme-light-white);
      }

      ${StyledTitle} {
        --theme-StyledTitle: var(--theme-light-grey-4);
      }

      ${StyledInputText} {
        --theme-StyledInputText: var(--theme-light-grey-4);
      }

      ${StyledFormLabel} {
        --theme-StyledFormLabel: var(--theme-light-grey-4);
      }
    }
  }
`;
