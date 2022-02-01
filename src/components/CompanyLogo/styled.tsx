import styled, { css } from 'styled-components';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import { EColorScheme } from '@redux/css';

export const StyledSection = styled.section`
  display: grid;
  grid-template-columns: 48px 1fr;
  gap: 8px;
`;

export const StyledImage = styled(Image)``;

export const StyledLogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px;
  grid-area: 1 / 1 / 2 / 2;
  background-color: #ffffff;
  box-shadow: 0 3px 6px var(--theme-light-grey-5);
  border: 2px solid var(--theme-dark-blue);
  border-radius: 50%;
`;

export const StyledDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  grid-area: 1 / 2 / 2 / 3;
`;

export const StyledTitle = styled.h3`
  font-family: 'Montserrat', sans-serif;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 0;
  color: var(--theme-StyledTitle);
  opacity: 1;
  margin: 0;
`;
export const StyledStatus = styled.span`
  font-family: 'Montserrat', sans-serif;
  font-size: 10px;
  line-height: 13px;
  font-weight: 500;
  letter-spacing: 0;
  color: var(--theme-StyledStatus);
  opacity: 1;
`;
export const StyledButton = styled(Button)`
  padding: 4px 3px;
  width: max-content;
  font-family: 'Montserrat', sans-serif;
  font-size: 8px;
  line-height: 10px;
  font-weight: 500;
  //color: red;
  background: var(--theme-StyledButton-bgr) !important;
  &[data-hasstatus='false'] {
    display: none;
  }
  &[data-style='Participating'] {
    border: 1.5px solid var(--theme-green);
    border-radius: 3px;
    opacity: 1;
    color: var(--theme-green);
    &:hover {
      //color: red;
      //background-color: red;
      //border-color: red;
    }
    &:focus {
      //background-color: red;
      //border-color: red;
      //box-shadow: 0 0 0 0.1rem red;
      &:not(:focus-visible) {
        outline: 0;
      }
    }
  }
  &[data-style='Owned'] {
    border: 1.5px solid var(--theme-dark-blue);
    border-radius: 3px;
    opacity: 1;
    color: var(--theme-dark-blue);
    &:hover {
      //color: red;
      //background-color: red;
      //border-color: red;
    }
    &:focus {
      //background-color: red;
      //border-color: red;
      //box-shadow: 0 0 0 0.1rem red;
      &:not(:focus-visible) {
        outline: 0;
      }
    }
  }
`;

export const CompanyLogoComponentTheme = css`
  &[data-theme='${EColorScheme.DAY}'] {
    ${StyledSection} {
      ${StyledTitle} {
        --theme-StyledTitle: var(--theme-light-black-2);
      }

      ${StyledStatus} {
        --theme-StyledStatus: var(--theme-light-black-2);
      }

      ${StyledButton} {
        --theme-StyledButton-bgr: var(--theme-light-white);
      }
    }
  }

  &[data-theme='${EColorScheme.NIGHT}'] {
    ${StyledSection} {
      ${StyledTitle} {
        --theme-StyledTitle: var(--theme-light-grey-4);
      }
      ${StyledStatus} {
        --theme-StyledStatus: var(--theme-light-grey-4);
      }
      ${StyledButton} {
        --theme-StyledButton-bgr: var(--theme-light-white);
      }
    }
  }
`;
