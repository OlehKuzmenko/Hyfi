import { EColorScheme } from '@/redux/css';
import Tooltip from 'react-bootstrap/Tooltip';
import styled, { css } from 'styled-components';

export const StyledTooltip = styled(Tooltip)`
  .tooltip-inner {
    background: var(--theme-light-StyledTooltip-bg) 0% 0% no-repeat padding-box !important;
    box-shadow: 0px 3px 5px var(--theme-light-StyledTooltip-shadow);
    border-radius: 5px;
  }
  .tooltip-arrow:before {
    border-top-color: var(--theme-light-StyledTooltip-bg) !important;
  }
`;
export const TooltipComponentTheme = css`
  ${StyledTooltip} {
    --theme-light-StyledTooltip-bg: var(--theme-dark-blue);
    --theme-light-StyledTooltip-shadow: #0d101426;
  }
  &[data-theme='${EColorScheme.DAY}'] {
  }
  &[data-theme='${EColorScheme.NIGHT}'] {
    ${StyledTooltip} {
      --theme-light-StyledTooltip-bg: var(--theme-light-black-2);
      --theme-light-StyledBtn-shadow: var(--theme-light-grey-2);
    }
  }
`;
