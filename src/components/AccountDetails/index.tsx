import React, { useState, useRef, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {
  StyledBody,
  StyledButton,
  StyledText,
  StyledButtonWithIcon,
  StyledInputGroup,
} from './styled';
import { StyledTitle, StyledHeader, StyledModal } from '@styles/modal.styled';
import { gradientBtnTypes } from '@components/Btn';
import Form from 'react-bootstrap/Form';
import { ReactComponent as Copy } from '@icons/copy.svg';
import { ReactComponent as Link } from '@icons/link.svg';
import Spinner from 'react-bootstrap/Spinner';
import {
  selectChangeWalletModalState,
  openChangeWallet,
  openConnectWallet,
} from '@redux/modal';
import {
  authWalletAddress,
  authWalletType,
  changeStateData,
  changeStateField,
} from '@redux/auth';
import { useAppDispatch, useAppSelector } from '@utils/hooks';
import { useValidation } from 'react-class-validator';
import { HashValidationDto } from './accountdetails.dto';
import { InputGroup } from 'react-bootstrap';

export default function AccountDetails({ ...props }) {
  const [validate, errors] = useValidation(HashValidationDto);

  const show = useAppSelector(selectChangeWalletModalState);
  const type = useAppSelector(authWalletType);
  const fieldLoader = useAppSelector(changeStateData);

  const walletAdress = useAppSelector(authWalletAddress);
  const dispatch = useAppDispatch();

  const intervalRef: { current: NodeJS.Timeout | null } = useRef(null);

  const [walletValue, setWalletValue] = useState(walletAdress);
  const [isCopied, setIsCopied] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const [isEditing, setEditing] = useState(false);
  const toggleEditing = () => {
    setEditing(!isEditing);
  };
  const copyData = () => {
    try {
      inputRef?.current?.focus();
      inputRef?.current?.select();
      const successful = document.execCommand('copy');
      const msg = successful ? 'successful' : 'unsuccessful';
      setIsCopied(true);
      inputRef?.current?.blur();
      window?.getSelection()?.removeAllRanges();
      const id = setTimeout(() => {
        console.log('Copying text command was ' + msg);
        setIsCopied(false);
      }, 5000);
      intervalRef.current = id;
    } catch (err) {
      console.log('Oops, unable to copy');
    }
  };
  const handleSubmit = async function (
    evt: React.SyntheticEvent<HTMLFormElement>
  ) {
    evt.preventDefault();
    if (await validate({ walletValue })) {
      dispatch(changeStateField({ accountName: walletValue }));
    }
  };
  const changeData = () => {
    dispatch(openConnectWallet(true));
  };
  const handleClose = () => dispatch(openChangeWallet(false));
  useEffect(() => {
    if (!show) {
      clearTimeout(intervalRef.current || setTimeout(() => {}, 0));
      setIsCopied(false);
    }
  }, [show]);
  useEffect(() => {
    if (isEditing) {
      inputRef?.current?.focus();
    }
  }, [isEditing]);
  return (
    <>
      <StyledModal
        {...props}
        size="md"
        show={show}
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <StyledHeader className="p-4" closeButton>
          <Modal.Title id="contained-modal-title-vcenter" as={StyledTitle}>
            Launch your wallet
          </Modal.Title>
        </StyledHeader>
        <StyledBody className="show-grid p-4">
          <Container className="p-0">
            <Row>
              <Col
                xs={12}
                className="d-flex justify-content-between align-items-center mb-4"
              >
                <StyledText className="p-12">
                  Connected with{' '}
                  {`${type[0]?.toUpperCase() + type?.slice(1) ?? ''}`}
                </StyledText>
                <StyledButton
                  theme={gradientBtnTypes.outline}
                  className="d-grid gap-1 justify-items-center p-1 px-3"
                  size="lg"
                  onClick={changeData}
                >
                  Change
                </StyledButton>
              </Col>
              <Col xs={12} className="mb-3">
                <Form noValidate onSubmit={handleSubmit}>
                  <StyledInputGroup
                    onClick={toggleEditing}
                    onBlur={() => {
                      setEditing(false);
                    }}
                    className="mb-0 mb-md-3"
                  >
                    <InputGroup>
                      {fieldLoader.accountName && (
                        <InputGroup.Text>
                          <Spinner
                            as="span"
                            animation="border"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                          />
                        </InputGroup.Text>
                      )}
                      <Form.Control
                        ref={inputRef}
                        onChange={(event) => {
                          setWalletValue(event.target.value);
                        }}
                        onBlur={() =>
                          validate({ walletValue }, ['walletValue'])
                        }
                        disabled={isCopied || !!fieldLoader.accountName}
                        readOnly={isCopied || !!fieldLoader.accountName}
                        placeholder="Your wallet"
                        aria-label="Your wallet"
                        aria-describedby="basic-addon1"
                        value={walletValue}
                        isInvalid={!!errors.walletValue}
                      />

                      <Form.Control.Feedback type="invalid">
                        {errors.walletValue?.map((message, index) => (
                          <p key={index}>{message}</p>
                        ))}
                      </Form.Control.Feedback>
                    </InputGroup>
                  </StyledInputGroup>
                </Form>
              </Col>
              <Col xs={12} className="d-flex mb-3 flex-column flex-md-row">
                <StyledButtonWithIcon
                  onClick={copyData}
                  className="d-flex m-0 mr-md-3 mb-xs-2 p-0 me-md-3"
                  variant="outline-primary"
                >
                  <Copy className="d-flex mx-2 my-n1 my-auto" />

                  {isCopied ? 'Copied!' : 'Copy Address'}
                </StyledButtonWithIcon>
                <StyledButtonWithIcon
                  href="#test"
                  className="d-flex m-0 p-0"
                  variant="outline-primary"
                >
                  <Link className="d-flex mx-2 my-auto" />
                  View on Browser
                </StyledButtonWithIcon>
              </Col>
            </Row>
          </Container>
        </StyledBody>
      </StyledModal>
    </>
  );
}
