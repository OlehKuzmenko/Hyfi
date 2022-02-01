import { CurrencyEnum } from '@/interfaces/CurrencyEnums';
import React, { useRef, useState } from 'react';
import { useAppDispatch, useAppSelector, useCopyText } from '@utils/hooks';
import {
  authWalletAddress,
  changeStateField,
  changeStateData,
} from '@redux/auth';
import {
  AccountNameContainer,
  AssetsContainer,
  StyledImage,
  StyledForm,
  StyledFormLabel,
  StyledFormControl,
  StyledGradientContainer,
  StyledCopyTextBtn,
  StyledCopyLink,
  StyledFormGroup,
  AccountAssetElemet,
  AccountAssetHeader,
} from './styled';
import { AccountNameDto } from './AccountNameDto';
import { useValidation } from 'react-class-validator';
import Form from 'react-bootstrap/Form';
import { StyledDashboardBlock } from '@pages/Dashboard/styled';

export interface IAssetData {
  logo: string;
  name: string;
  ammount: number;
  price: number;
  currency: `${CurrencyEnum}`;
}

interface IAccountNameProps {
  avaliableAsset?: IAssetData[];
}

export default function AccountName({ avaliableAsset }: IAccountNameProps) {
  const [validate, errors] = useValidation(AccountNameDto);

  const dispatch = useAppDispatch();
  const accountName = useAppSelector(authWalletAddress);
  const [localAccountName, setAccountName] = useState(accountName);
  const changeDataState = useAppSelector(changeStateData);
  const [clicked, setClicked] = useState(false);
  const [isCopy, invokeCopyText] = useCopyText();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async function (
    evt: React.SyntheticEvent<HTMLFormElement>
  ) {
    evt.preventDefault();

    if (await validate({ localAccountName })) {
      console.log('Validation go');
      dispatch(changeStateField({ accountName: localAccountName }));
    }
  };

  return (
    <StyledDashboardBlock className={'account-block'}>
      <AccountNameContainer>
        <StyledForm noValidate onSubmit={handleSubmit}>
          <StyledImage
            src="https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg"
            rounded
            fluid
          />
          <StyledFormGroup controlId="exampleForm.ControlInput1">
            <StyledFormLabel>Wallet address</StyledFormLabel>
            <StyledGradientContainer
              data-clicked={clicked}
              onClick={() => {
                if (changeDataState.accountName || isCopy) {
                  return null;
                }
                inputRef.current?.focus();
                setClicked(true);
              }}
            >
              <StyledFormControl
                ref={inputRef}
                type="text"
                disabled={changeDataState.accountName || isCopy}
                placeholder="Account name"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setAccountName(event.target.value);
                }}
                isInvalid={!!errors.localAccountName}
                value={localAccountName}
                onBlur={async () => {
                  setClicked((prevState) => !prevState);
                  validate({ localAccountName }, ['localAccountName']);
                }}
              />
            </StyledGradientContainer>
            {errors.localAccountName && (
              <Form.Control.Feedback type="invalid">
                {errors.localAccountName?.map((message, index) => (
                  <p key={index}>{message}</p>
                ))}
              </Form.Control.Feedback>
            )}
          </StyledFormGroup>
          <StyledCopyTextBtn
            type="button"
            onClick={() => {
              invokeCopyText(accountName);
            }}
          >
            <StyledCopyLink />
            {!isCopy ? 'Copy text' : 'Copied!'}
          </StyledCopyTextBtn>
        </StyledForm>
      </AccountNameContainer>
      <AssetsContainer>
        <AccountAssetHeader ammount={8000} />
        {avaliableAsset?.map((elm, index) => (
          <AccountAssetElemet key={index} {...elm} />
        ))}
      </AssetsContainer>
    </StyledDashboardBlock>
  );
}
