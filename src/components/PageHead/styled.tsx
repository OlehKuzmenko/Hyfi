import styled, { css } from 'styled-components';
import breakpoints from '@styles/constants.styled';
import { EColorScheme } from '@redux/css';

interface IStyledWrapperHead {
  image: string;
}

export const StyledWrapperHead = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 50px 0;
  ${(props: IStyledWrapperHead) =>
    css`
      background: url(${props.image}) no-repeat bottom/cover;
    `}
  position: relative;
  z-index: 1;
`;

export const StyledWrapperHeadContainer = styled.div`
  width: 90%;
  max-width: 1266px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 3;
`;

export const StyledWrapperHeadTitle = styled.h1`
  font-family: Montserrat, serif;
  font-weight: bold;
  font-size: 40px;
  line-height: 50px;
  color: var(--theme-light-StyledWrapperHeadTitle);
`;

export const IloWrapperHeadTitleComponentTheme = css`
  &[data-theme='${EColorScheme.DAY}'] {
    ${StyledWrapperHeadTitle} {
      --theme-light-StyledWrapperHeadTitle: var(--theme-light-black-2);
    }
  }
  &[data-theme='${EColorScheme.NIGHT}'] {
    ${StyledWrapperHeadTitle} {
      --theme-light-StyledWrapperHeadTitle: var(--theme-light-grey-4);
    }
  }
`;

export const StyledWrapperHeadText = styled.p`
  font-family: Montserrat, serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 27px;
  color: var(--theme-light-StyledWrapperHeadTitle);
  &.reduced {
    max-width: 50%;
    @media screen and ${breakpoints.Device.desktop} {
      max-width: 100%;
    }
  }
`;
