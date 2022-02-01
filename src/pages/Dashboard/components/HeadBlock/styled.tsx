import styled, { css } from 'styled-components';
import breakpoints from '@styles/constants.styled';
import { EColorScheme } from '@redux/css';

export const StyledHeadBlockTitle = styled.h2`
  font-family: Montserrat, serif;
  font-weight: 900;
  font-size: 20px;
  line-height: 27px;
  color: var(--theme-StyledHeadBlockTitle);
  margin-bottom: 0 !important;

  @media screen and ${breakpoints.Device.tablet} {
    margin-bottom: 10px !important;
  }
`;

export const DashboardHeadBlockComponentTheme = css`
  &[data-theme='${EColorScheme.DAY}'] {
    ${StyledHeadBlockTitle} {
      --theme-StyledHeadBlockTitle: var(--theme-light-black-2);
    }
  }

  &[data-theme='${EColorScheme.NIGHT}'] {
    ${StyledHeadBlockTitle} {
      --theme-StyledHeadBlockTitle: var(--theme-light-grey-4);
    }
  }
`;
