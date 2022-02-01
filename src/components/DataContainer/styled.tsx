import Button from 'react-bootstrap/Button';
import styled, { css } from 'styled-components';
import { EColorScheme } from '@redux/css';
import breakpoints from '@styles/constants.styled';

export const StyledButton = styled(Button)``;

export const StyledSection = styled.section``;

export const StyledListHeader = styled.h3`
  display: grid;
  grid-template-columns: 1fr max-content;
  gap: 10px;
  border-bottom: 1px solid var(--theme-StyledListElement);
  padding: 13.5px 0;
  align-items: flex-end;
  font-family: 'Montserrat', sans-serif;
  font-size: 12px;
  line-height: 15px;
  font-weight: 500;
  letter-spacing: 0;

  &.ilo-header {
    width: calc((100% - 60px) / 3);

    @media screen and (max-width: 1592px) {
      width: calc((100% - 30px) / 2);
    }

    @media screen and ${breakpoints.Device.desktop} {
      width: calc((100% - 60px) / 3);
    }

    @media screen and (max-width: 1270px) {
      width: calc((100% - 30px) / 2);
    }

    @media screen and (max-width: 970px) {
      width: 100%;
    }

    @media screen and (max-width: 768px) {
      width: calc((100% - 30px) / 2);
    }

    @media screen and (max-width: 666px) {
      width: 100%;
    }
    border-bottom: 1px solid #c9c9c9;
    margin-bottom: 0;
  }
`;

export const StyledList = styled.ul`
  padding: 0;

  & .list-header__first-item {
    min-height: 78px;
  }
`;

export const StyledListElement = styled.li`
  padding: 13.5px 0;
  display: grid;
  grid-template-areas: '. .';
  border-bottom: 1px solid var(--theme-StyledListElement);

  p {
    margin: 0;
  }

  .title {
    padding: 0;
    font-family: 'Montserrat', sans-serif;
    font-size: 12px;
    line-height: 15px;
    font-weight: 500;
    letter-spacing: 0;
    color: var(--theme-StyledListElement_title);
    opacity: 1;
    text-align: left;
    width: fit-content;
    margin-right: 10px;
  }

  .value {
    align-self: flex-end;
    text-align: end;
    font-family: 'Montserrat', sans-serif;
    font-size: 12px;
    line-height: 15px;
    font-weight: bold;
    letter-spacing: 0;
    color: var(--theme-dark-blue);
    opacity: 1;
  }
`;

export const DataContainerComponentTheme = css`
  &[data-theme='${EColorScheme.DAY}'] {
    ${StyledSection} {
      ${StyledListElement}, ${StyledListHeader} {
        --theme-StyledListElement: var(--theme-light-grey-2);
        --theme-StyledListElement_title: var(--theme-light-black-2);
      }
    }
  }

  &[data-theme='${EColorScheme.NIGHT}'] {
    ${StyledSection} {
      ${StyledListElement}, ${StyledListHeader} {
        --theme-StyledListElement: var(--theme-black);
        --theme-StyledListElement_title: var(--theme-light-grey-4);
      }
    }
  }
`;
