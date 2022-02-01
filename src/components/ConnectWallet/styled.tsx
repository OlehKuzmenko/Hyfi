import styled from 'styled-components';
import Modal from 'react-bootstrap/Modal';

export const StyledModal = styled(Modal)`
  background: red 0 0 no-repeat padding-box;
  .modal-content {
    border-radius: 10px;
    box-shadow: 0 3px 5px var(--main-default-block-shadow);
    border: none;
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
    background: red;
    box-shadow: 0 3px 5px red;
    &::before,
    &::after {
      position: absolute;
      top: 50%;
      left: 50%;
      content: '';
      width: 14px;
      height: 1px;
      background: red;
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

export const StyledBody = styled(Modal.Body)`
  .btn {
    &-custom {
      border-radius: 10px;
      color: red;
      background-color: red;
      border-color: red;
      &:hover {
        color: red;
        background-color: red;
        border-color: red;
      }
      &:focus {
        color: red;
        background-color: red;
        border-color: red;
        box-shadow: 0 0 0 0.25rem red;
        &:not(:focus-visible) {
          outline: 0;
        }
      }
    }
  }
`;

export const StyledTitle = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-size: 20px;
  font-weight: 900;
  letter-spacing: 0;
  color: red;
  opacity: 1;
  user-select: none;
`;
