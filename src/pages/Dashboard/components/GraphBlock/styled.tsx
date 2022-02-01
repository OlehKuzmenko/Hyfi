import styled, { css } from 'styled-components';
import breakpoints from '@styles/constants.styled';
import { EColorScheme } from '@redux/css';

export const StyledGraphWrapper = styled.div`
  border: 1px solid var(--theme-StyledGraphWrapper-border);
  height: 100%;
  border-radius: 10px;
  padding: 30px;
  display: grid;
  align-items: center;
  margin-top: 26px;
  grid-template-columns: repeat(5, 1fr);
  grid-row-gap: 20px;
  grid-template-areas:
    'title . tabs tabs tabs'
    'graph graph graph graph graph'
    'graph graph graph graph graph';

  @media screen and ${breakpoints.Device.desktop_sm} {
    grid-template-areas:
      'tabs tabs tabs tabs tabs'
      'title . . . .'
      'graph graph graph graph graph'
      'graph graph graph graph graph';
  }

  @media screen and ${breakpoints.Device.mobile} {
    padding: 15px;
  }
`;

export const StyledGraphWrapperTitle = styled.p`
  font-family: Montserrat, serif;
  font-weight: 900;
  font-size: 20px;
  line-height: 24px;
  color: var(--theme-StyledGraphWrapperTitle);
  grid-area: title;
  margin-bottom: 0;
`;

export const StyledGraphContainer = styled.div`
  width: 100%;
  height: 100%;
  grid-area: graph;
`;

export const DashboardGraphBlockComponentTheme = css`
  &[data-theme='${EColorScheme.DAY}'] {
    ${StyledGraphWrapper} {
      --theme-StyledGraphWrapper-border: var(--theme-light-grey-2);

      ${StyledGraphWrapperTitle} {
        --theme-StyledGraphWrapperTitle: var(--theme-light-black-2);
      }
    }
  }

  &[data-theme='${EColorScheme.NIGHT}'] {
    ${StyledGraphWrapper} {
      --theme-StyledGraphWrapper-border: var(--theme-light-black-1);

      ${StyledGraphWrapperTitle} {
        --theme-StyledGraphWrapperTitle: var(--theme-light-grey-4);
      }
    }
  }
`;
