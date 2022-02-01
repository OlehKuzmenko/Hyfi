import styled from 'styled-components';
import { NavLink as RouterLink } from 'react-router-dom';

export const StyledLink = styled(RouterLink)`
  font-family: 'Montserrat', sans-serif;
  font-size: 15px;
  font-weight: 500;
  letter-spacing: 0;
  color: var(--theme-dark-blue);
  text-decoration: none;

  &.dashboard-blocks__head_link {
    color: var(--theme-dark-blue);
    font-size: 12px;
    line-height: 15px;
  }
`;
