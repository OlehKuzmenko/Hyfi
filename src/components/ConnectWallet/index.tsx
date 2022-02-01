import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {
  StyledTitle,
  StyledBody,
  StyledHeader,
  StyledModal,
} from '@styles/modal.styled';
import { ReactComponent as Metamask } from './icons/fox.svg';
import { ReactComponent as WalletConnect } from './icons/wallet_connect.svg';
import { useAppDispatch, useAppSelector } from '@utils/hooks';
import { setWalletType, loginUserToWebSite, authWalletType } from '@redux/auth';
import {
  selectConnectWalletModalState,
  openConnectWallet,
  openChangeWallet,
} from '@redux/modal';
import { WalletType } from '@/interfaces/IUser';

export default function ConnectWallet({ ...props }) {
  const show = useAppSelector(selectConnectWalletModalState);
  const type = useAppSelector(authWalletType);

  const dispatch = useAppDispatch();

  const handleClose = () => dispatch(openConnectWallet(false));

  const selectWalletType = function ({
    target,
  }: React.MouseEvent<HTMLButtonElement> & {
    target: {
      value: WalletType;
    };
  }) {
    const value = target.value;
    if (Object.values(WalletType).includes(value)) {
      dispatch(setWalletType(value));
      if (!type) {
        dispatch(loginUserToWebSite());
      } else {
        dispatch(openChangeWallet(true));
      }
    }
    dispatch(openConnectWallet(false));
  };

  return (
    <StyledModal
      {...props}
      show={show}
      onHide={handleClose}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <StyledHeader className="p-4" closeButton>
        <Modal.Title id="contained-modal-title-vcenter" as={StyledTitle}>
          Connect Wallet
        </Modal.Title>
      </StyledHeader>
      <StyledBody className="show-grid p-4">
        <Container>
          <Row className="d-flex justify-content-around">
            <Col xs={12} md={6} className="ps-xs-0 pe-md-3 mb-3 mb-sm-0">
              <Button
                value={WalletType.METAMASK}
                className="d-grid gap-1 justify-items-center w-100 m-0 py-4 h-100"
                variant="custom"
                size="lg"
                onClick={selectWalletType}
              >
                <Metamask className="mx-auto" />
                Metamask
              </Button>
            </Col>
            <Col xs={12} md={6} className="ps-md-3 pe-xs-0 ">
              <Button
                value={WalletType.WALLETCONNECT}
                className="d-grid gap-1 justify-items-center w-100 m-0 py-4 h-100"
                variant="custom"
                size="lg"
                onClick={selectWalletType}
              >
                <WalletConnect className="mx-auto" />
                WalletConnect
              </Button>
            </Col>
          </Row>
        </Container>
      </StyledBody>
    </StyledModal>
  );
}
