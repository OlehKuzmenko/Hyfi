import styled, { css } from 'styled-components';
import breakpoints from '@styles/constants.styled';
import { Link } from 'react-router-dom';
import { EColorScheme } from '@redux/css';

interface IStyledBadgeProps {
  image: string;
}

export const StyledBadge = styled(Link)<IStyledBadgeProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 164px;
  padding: 34px;
  background-image: url(${(p) => p.image});
  background-size: cover;
  box-shadow: 0px 3px 5px #0d101426;
  border-radius: 10px;
  text-decoration: none;
  transition: transform 300ms ease-out;
  &:hover {
    transform: translateY(-10px);
  }
`;

export const StyledSpan = styled.span`
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  font-size: 24px;
  letter-spacing: 0;
  color: var(--theme-StyledBadge);
  opacity: 1;
  @media screen and ${breakpoints.Device.tablet} {
    font-size: 20px;
  }
`;

export const HomePageImgBadgeComponentTheme = css`
  &[data-theme='${EColorScheme.DAY}'] {
    ${StyledBadge} {
      ${StyledSpan} {
        --theme-StyledBadge: var(--theme-light-black-2);
      }
    }
  }

  &[data-theme='${EColorScheme.NIGHT}'] {
    ${StyledBadge} {
      ${StyledSpan} {
        --theme-StyledBadge: var(--theme-light-grey-4);
      }
    }
  }
`;
