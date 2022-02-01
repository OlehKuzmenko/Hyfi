import styled, { css } from 'styled-components';
import Modal from 'react-bootstrap/Modal';
import breakpoints from '@styles/constants.styled';
import { EColorScheme } from '@redux/css';

export const StyledTitle = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-size: 20px;
  font-weight: 900;
  letter-spacing: 0;
  color: var(--theme-StyledTitle);
  opacity: 1;
  user-select: none;
`;

export const StyledBody = styled(Modal.Body)`
  .btn {
    &-custom {
      border-radius: 10px;
      color: var(--theme-StyledBody-color);
      background-color: var(--theme-StyledBody-bgr);
      border-color: var(--theme-StyledBody-border);

      &:hover {
        color: var(--theme-dark-blue);
        background-color: var(--theme-StyledBody-hover-bgr);
        border-color: var(--theme-dark-blue);
      }

      &:focus {
        color: var(--theme-dark-blue);
        background-color: var(--theme-StyledBody-focus-bgr);
        border-color: var(--theme-dark-blue);
        box-shadow: 0 0 0 0.25rem black;

        &:not(:focus-visible) {
          outline: 0;
        }
      }
    }
  }
`;

export const StyledModal = styled(Modal)`
  background: var(--theme-StyledModal);

  .modal-content {
    border-radius: 10px;
    box-shadow: 0 3px 5px var(--theme-StyledModal-boxshadow);
    border: none;
    background: var(--theme-StyledModal-bgr);
  }

  &:not(.disclaimer-modal) {
    .modal-header {
      border-bottom: 1px solid var(--theme-StyledModal-border-bottom);
    }
  }

  &.disclaimer-modal {
    .modal-dialog {
      @media screen and (min-width: ${breakpoints.Responsive.desktop}) {
        max-width: 1376px;
      }
    }
  }
`;

export const StyledHeader = styled(Modal.Header)`
  .btn-close {
    position: relative;
    margin-top: -70px;
    margin-right: -45px;
    border-radius: 50%;
    width: 47px;
    height: 47px;
    opacity: 1;
    background: var(--theme-dark-blue);
    box-shadow: 0 3px 5px var(--theme-dark-blue);
    @media screen and (max-width: 575px) {
      margin-top: -70px;
      margin-right: -27px;
    }

    &::before,
    &::after {
      position: absolute;
      top: 50%;
      left: 50%;
      content: '';
      width: 14px;
      height: 1px;
      background: var(--theme-StyledHeader-after-bgr);
      transform: scale(2);
      border-radius: 15%;
    }

    &::before {
      transform: translate(-50%, -50%) rotate(45deg) scale(1.8);
    }

    &::after {
      transform: translate(-50%, -50%) rotate(-45deg) scale(1.8);
    }
  }
`;

export const ModalComponentTheme = css`
  &[data-theme='${EColorScheme.DAY}'] {
    ${StyledTitle} {
      --theme-StyledTitle: var(--theme-light-black-2);
    }

    ${StyledBody} {
      --theme-StyledBody-bgr: var(--theme-light-grey-4);
      --theme-StyledBody-color: var(--theme-light-black-2);
      --theme-StyledBody-hover-bgr: var(--theme-light-grey-4);
      --theme-StyledBody-focus-bgr: var(--theme-light-grey-4);
      --theme-StyledBody-border: var(--theme-light-grey-4);
      --theme-StyledBody-hover-border: var(--theme-light-grey-4);
      --theme-StyledBody-focus-border: var(--theme-light-grey-4);
    }

    ${StyledModal} {
      --theme-StyledModal: rgba(241, 243, 245, 0.9);
      --theme-StyledModal-boxshadow: var(--theme-grey);
      --theme-StyledModal-bgr: var(--theme-light-white);
      --theme-StyledModal-border-bottom: var(--theme-light-grey-2);
    }

    ${StyledHeader} {
      --theme-StyledHeader-after-bgr: var(--theme-light-white);
    }
  }

  &[data-theme='${EColorScheme.NIGHT}'] {
    ${StyledTitle} {
      --theme-StyledTitle: var(--theme-light-grey-4);
    }

    ${StyledBody} {
      --theme-StyledBody-bgr: var(--theme-light-black-1);
      --theme-StyledBody-color: var(--theme-light-grey-4);
      --theme-StyledBody-hover-bgr: var(--theme-light-black-1);
      --theme-StyledBody-focus-bgr: var(--theme-light-black-1);
      --theme-StyledBody-border: var(--theme-light-black-1);
      --theme-StyledBody-hover-border: var(--theme-light-black-1);
      --theme-StyledBody-focus-border: var(--theme-light-black-1);
    }

    ${StyledModal} {
      --theme-StyledModal: rgba(25, 29, 36, 0.9);
      --theme-StyledModal-boxshadow: var(--theme-black);
      --theme-StyledModal-bgr: var(--theme-light-white);
      --theme-StyledModal-border-bottom: var(--theme-black);
    }

    ${StyledHeader} {
      --theme-StyledHeader-after-bgr: #ffffff;
    }
  }
`;
