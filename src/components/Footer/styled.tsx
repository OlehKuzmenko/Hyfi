import styled, { css } from 'styled-components';
import { NavLink as RouterLink } from 'react-router-dom';
import { LinksEnum } from '@/interfaces/LinksEnum';
import { EColorScheme } from '@/redux/css';

export const StyledFooter = () => {
  return (
    <StyledFooterWrapper>
      <StyledReportLink to={LinksEnum.REPORT}>Report an issue</StyledReportLink>
    </StyledFooterWrapper>
  );
};

const StyledReportLink = styled(RouterLink)`
  font-family: Montserrat, serif;
  font-weight: 500;
  font-size: 15px;
  line-height: 70px;
  color: var(--theme-StyledReportLink-color);
  margin: 0;
  text-decoration: none;
  cursor: pointer;
  display: none;
`;

const StyledFooterWrapper = styled.footer`
  position: absolute;
  z-index: 18;
  bottom: 0;
  width: 100%;
  padding: 0 36px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: var(--main-footer-height);
  background: var(--theme-light-white) 0 0 no-repeat padding-box;
  border: 1px solid var(--theme-light-grey-2);
  transition: 300ms all ease-in-out;
`;
export const StyledFooterTheme = css`
  &[data-theme='${EColorScheme.DAY}'] {
    ${StyledReportLink} {
      --theme-StyledReportLink-color: var(--theme-light-black-1);
    }
    ${StyledFooterWrapper} {
      --theme-StyledOverlay-backround: #f1f3f5e6;
    }
  }
  &[data-theme='${EColorScheme.NIGHT}'] {
    ${StyledReportLink} {
      --theme-StyledReportLink-color: var(--theme-light-grey-1);
    }
    ${StyledFooterWrapper} {
      --theme-StyledOverlay-backround: #191d24e6;
    }
  }
`;
