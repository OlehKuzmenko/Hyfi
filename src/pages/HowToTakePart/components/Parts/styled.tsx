import styled, { css } from 'styled-components';
import { EColorScheme } from '@redux/css';

export const StyledPartContainer = styled.section`
  padding: 25px 30px;
  display: grid;
  grid-template-columns: 40px 1fr;
  gap: 13px 24px;
  grid-template-areas:
    'icon title'
    '. text';
  background: var(--theme-StyledPartContainer-bgr) 0 0 no-repeat padding-box;
  box-shadow: 0 3px 5px var(--theme-StyledPartContainer-boxshadow);
  border: 1px solid var(--theme-StyledPartContainer-border);
  border-radius: 10px;
  opacity: 1;
`;

export const StyledIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  grid-area: icon;
  font-family: 'Montserrat', sans-serif;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 0;
  color: var(--theme-dark-blue);
  opacity: 1;
  background: var(--theme-StyledIcon-bgr) 0 0 no-repeat padding-box;
  box-shadow: 0 3px 5px var(--theme-StyledIcon-boxshadow);
  border-radius: 50%;
`;

export const StyledTitle = styled.h3`
  font-family: 'Montserrat', sans-serif;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 0;
  color: var(--theme-dark-blue);
  opacity: 1;
  grid-area: title;
  margin: 0;
`;

export const StyledText = styled.p`
  grid-area: text;
  font-family: 'Montserrat', sans-serif;
  font-size: 15px;
  font-weight: 500;
  letter-spacing: 0;
  color: var(--theme-StyledText);
  opacity: 1;
  margin: 0;
`;

export const HowToTakePartComponentTheme = css`
  &[data-theme='${EColorScheme.DAY}'] {
    ${StyledPartContainer} {
      --theme-StyledPartContainer-bgr: var(--theme-light-white);
      --theme-StyledPartContainer-boxshadow: var(--theme-grey);
      --theme-StyledPartContainer-border: var(--theme-dark-blue);

      ${StyledIcon} {
        --theme-StyledIcon-bgr: var(--theme-light-white);
        --theme-StyledIcon-boxshadow: var(--theme-grey);
      }

      ${StyledText} {
        --theme-StyledText: var(--theme-light-black-2);
      }
    }
  }

  &[data-theme='${EColorScheme.NIGHT}'] {
    ${StyledPartContainer} {
      --theme-StyledPartContainer-bgr: var(--theme-light-white);
      --theme-StyledPartContainer-boxshadow: var(--theme-black);
      --theme-StyledPartContainer-border: var(--theme-dark-blue-80);

      ${StyledIcon} {
        --theme-StyledIcon-bgr: var(--theme-light-black-2);
        --theme-StyledIcon-boxshadow: var(--theme-black);
      }

      ${StyledText} {
        --theme-StyledText: var(--theme-light-grey-4);
      }
    }
  }
`;
