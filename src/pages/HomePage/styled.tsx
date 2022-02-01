import styled, { css } from 'styled-components';
import breakpoints from '@styles/constants.styled';
import Btn from '@components/Btn';
import { EColorScheme } from '@redux/css';

export const StyledBtn = styled(Btn)`
  grid-area: btn;
`;

export const HomeWrapper = styled.section`
  width: 100%;
  display: grid;
  grid-auto-columns: 1fr;
  grid-template-columns: max-content 1fr;
  grid-template-rows: auto auto auto;
  gap: 30px 30px;
  grid-template-areas:
    'title title'
    'text text'
    'btn .';
  row-gap: 20px;
  align-items: center;
  grid-area: title;
  @media screen and ${breakpoints.Device.tablet} {
    grid-template-columns: auto;
    grid-template-areas:
      'title title'
      'text text'
      'btn btn';
  }
`;

export const HomeWrappperContainer = styled.section`
  display: grid;
  padding-top: 100px;
  grid-auto-columns: 1fr;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto 134px auto;
  gap: 20px 20px;
  grid-template-areas:
    'title .'
    '. .'
    'cards cards';
  width: 100%;
  padding-bottom: 30px;
  @media screen and ${breakpoints.Device.desktop} {
    grid-template-areas:
      'title title'
      '. .'
      'cards cards';
  }
  @media screen and ${breakpoints.Device.tablet} {
    grid-template-rows: auto 50px auto;
  }
  @media screen and ${breakpoints.Device.tablet} {
    padding-top: 30px;
  }
`;

export const Title = styled.h1`
  font-family: Montserrat, serif;
  font-weight: bold;
  font-size: 40px;
  grid-area: title;
  line-height: 50px;
  color: var(--theme-Title);
  /* grid-area: 1/1 / auto/span 4; */
  @media screen and ${breakpoints.Device.tablet} {
    font-size: 30px;
  }
`;

export const Text = styled.p`
  grid-area: text;
  font-family: Montserrat, serif;
  font-size: 24px;
  line-height: 34px;
  font-weight: 500;
  color: var(--theme-Title);
  /* grid-area: 2/1 / auto/span 4; */
  @media screen and ${breakpoints.Device.tablet} {
    font-size: 20px;
  }
`;

export const InfoContainer = styled.section`
  /* display: flex; */
  /* flex-wrap: wrap; */
  grid-area: cards;
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(352px, 1fr));
  /* grid-area: 4/1 / auto/span 4; */
  @media screen and ${breakpoints.Device.mobile} {
    grid-template-columns: 1fr;
  }
`;

export const HomePageComponentTheme = css`
  &[data-theme='${EColorScheme.DAY}'] {
    ${HomeWrapper} {
      ${Title} {
        --theme-Title: var(--theme-light-black-2);
      }
      ${Text} {
        --theme-Title: var(--theme-light-black-2);
      }
    }
  }

  &[data-theme='${EColorScheme.NIGHT}'] {
    ${HomeWrapper} {
      ${Title} {
        --theme-Title: var(--theme-light-grey-4);
      }
      ${Text} {
        --theme-Title: var(--theme-light-grey-4);
      }
    }
  }
`;
