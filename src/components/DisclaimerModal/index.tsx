import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {
  StyledBody,
  StyledText,
  StyledFormCheck,
  StyledFormLabel,
  StyledFormControl,
  StyledFromControlContainer,
  StyledDataRow,
  StyledBtn,
  StyledFormGroup,
  StyledValidFeedback,
} from './styled';
import { StyledTitle, StyledHeader, StyledModal } from '@styles/modal.styled';
import { selectIloDisclaimerModalState, openIloDisclaimer } from '@redux/modal';
import { useAppDispatch, useAppSelector } from '@utils/hooks';
import { gradientBtnTypes } from '@components/Btn';
import { useValidation } from 'react-class-validator';
import { DisclaimerModalDto } from './disclaimerModalDto';
import {
  selectIloBuyPriceState,
  changeIloBuyPrice,
  addContributionPrice,
} from '@redux/ilo';

interface ICheckbox {
  disclaimer: boolean | null;
  rools: boolean | null;
}

export default function DisclaimerModal({ ...props }) {
  const dispatch = useAppDispatch();
  const priceValue = useAppSelector(selectIloBuyPriceState);

  const [validate, errors] = useValidation(DisclaimerModalDto);

  const show = useAppSelector(selectIloDisclaimerModalState);
  const [checkboxes, setChecbox] = useState<ICheckbox>({
    disclaimer: null,
    rools: null,
  });

  const handleChecbox = function (event: React.ChangeEvent<HTMLInputElement>) {
    const name = event.target.name as keyof ICheckbox;
    setChecbox({ ...checkboxes, [name]: event.target.checked });
  };

  const handleSubmit = async function (
    evt: React.SyntheticEvent<HTMLFormElement>
  ) {
    const readDisclaimer = checkboxes.disclaimer;
    const understandRegulations = checkboxes.rools;

    evt.preventDefault();
    if (await validate({ priceValue, readDisclaimer, understandRegulations })) {
      dispatch(addContributionPrice(priceValue ?? 0));
      dispatch(openIloDisclaimer(false));
    }
  };
  const handleClose = () => {
    window.scrollTo({
      left: 0,
      top: 0,
    });
    dispatch(openIloDisclaimer(false));
  };

  return (
    <>
      <StyledModal
        {...props}
        className="disclaimer-modal"
        size="xl"
        show={show}
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <StyledHeader className="p-4" closeButton>
          <Modal.Title id="contained-modal-title-vcenter" as={StyledTitle}>
            Disclaimer
          </Modal.Title>
        </StyledHeader>
        <StyledBody className="show-grid p-4">
          <Container as={Form} className="p-0">
            <Row>
              <Col xs={12} className="mb-3">
                <StyledText>FORWARD-LOOKING LOOKING STATEMENTS</StyledText>
                <StyledText>
                  Statements made on this Website that are not historical or
                  current facts are “forward-looking statements”. In some cases,
                  you can identify forward-looking statements by terminology
                  such as "may", "should", "intends", "expects", "plans",
                  "anticipates", "believes", "estimates", "predicts",
                  "potential", or "continue" or the negative of these terms or
                  other comparable terminology. We intend that such
                  forward-looking statements be subject to the safe harbors for
                  such statements. We wish to caution readers not to place undue
                  reliance on any such forward-looking statements, which speak
                  only as of the date made. Any forward-looking statements
                  represent management’s best judgment as to what may occur in
                  the future. However, forward-looking statements are subject to
                  risks, uncertainties and important factors beyond our control
                  that could cause actual results and events to differ
                  materially from historical results of operations and events
                  and those presently anticipated or projected. We disclaim any
                  obligation subsequently to revise any forward-looking
                  statements to reflect events or circumstances after the date
                  of such statement or to reflect the occurrence of anticipated
                  or unanticipated events.
                </StyledText>
              </Col>
              <Container>
                <Form noValidate onSubmit={handleSubmit}>
                  <StyledDataRow>
                    <Col className="checkbox">
                      <StyledFormGroup
                        className={`mb-3 ${
                          !!errors.readDisclaimer ? 'error' : ''
                        }`}
                        controlId="read-disclaimer"
                      >
                        <StyledFormCheck
                          className="checkbox"
                          type="checkbox"
                          name="disclaimer"
                          label="I have read the disclaimer"
                          checked={checkboxes.disclaimer}
                          onChange={handleChecbox}
                          onBlur={() => {
                            const readDisclaimer = checkboxes.disclaimer;
                            validate({ readDisclaimer }, ['readDisclaimer']);
                          }}
                          isInvalid={!!errors.readDisclaimer}
                        />
                        {/*Unlock, if you need error text*/}
                        {/* {errors.readDisclaimer && (
                          <Form.Control.Feedback type="invalid">
                            {errors.readDisclaimer?.map((message, index) => (
                              <p key={index}>{message}</p>
                            ))}
                          </Form.Control.Feedback>
                        )} */}
                      </StyledFormGroup>
                      <StyledFormGroup
                        className={`mb-3 ${
                          !!errors.understandRegulations ? 'error' : ''
                        }`}
                        controlId="understand-regulations"
                      >
                        <StyledFormCheck
                          type="checkbox"
                          name="rools"
                          label="I understand that regulations might differ based on location"
                          checked={checkboxes.rools}
                          onChange={handleChecbox}
                          isInvalid={!!errors.understandRegulations}
                          onBlur={() => {
                            const understandRegulations = checkboxes.rools;
                            validate({ understandRegulations }, [
                              'understandRegulations',
                            ]);
                          }}
                        />
                        {/*Unlock, if you need error text*/}
                        {/* {errors.understandRegulations && (
                          <Form.Control.Feedback type="invalid">
                            {errors.understandRegulations?.map(
                              (message, index) => (
                                <p key={index}>{message}</p>
                              )
                            )}
                          </Form.Control.Feedback>
                        )} */}
                      </StyledFormGroup>
                    </Col>
                    <Col className="input">
                      <StyledFormLabel htmlFor="sumInput">
                        Number of Licenses Fragments:
                      </StyledFormLabel>
                      <StyledFromControlContainer>
                        <StyledFormControl
                          type="text"
                          id="sumInput"
                          aria-describedby="sumInputBlock"
                          data-error={!!errors.priceValue}
                          value={priceValue}
                          onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                          ) => {
                            if (+event.target.value >= 0)
                              dispatch(
                                changeIloBuyPrice(+event.target.value ?? 0)
                              );
                          }}
                          onBlur={() =>
                            validate({ priceValue }, ['priceValue'])
                          }
                          isInvalid={!!errors.priceValue}
                        />
                        {!errors.priceValue && (
                          <StyledValidFeedback type="valid">
                            <p>
                              {priceValue} licenses fragments for {priceValue}
                              BUSD
                            </p>
                          </StyledValidFeedback>
                        )}{' '}
                        {errors.priceValue && (
                          <StyledValidFeedback type="valid">
                            <p>Unnknown ammount of licenses fragments</p>
                          </StyledValidFeedback>
                        )}
                        {/*Unlock, if you need error text*/}
                        {/* <Form.Control.Feedback type="invalid">
                          {errors.priceValue?.map((message, index) => (
                            <p key={index}>{message}</p>
                          ))}
                        </Form.Control.Feedback> */}
                      </StyledFromControlContainer>
                    </Col>
                    <Col className="button">
                      <StyledBtn
                        disabled={
                          Object.keys(errors).length > 0 ||
                          !checkboxes.rools ||
                          !checkboxes.disclaimer
                        }
                        theme={gradientBtnTypes.gradient}
                        onClick={handleSubmit}
                      >
                        Buy
                      </StyledBtn>
                    </Col>
                  </StyledDataRow>
                </Form>
              </Container>
            </Row>
          </Container>
        </StyledBody>
      </StyledModal>
    </>
  );
}
