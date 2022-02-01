import styled, { css } from 'styled-components';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import { ReactComponent as Copy } from '@icons/copy.svg';
import { IAssetData } from '.';
import { EColorScheme } from '@redux/css';

export const StyledImage = styled(Image)`
  height: 62px;
  width: 62px;
  border-radius: 50% !important;
  box-shadow: 0 3px 6px var(--theme-light-grey-5);
  border: 2px solid var(--theme-dark-blue);

  &.small {
    height: 32px;
    width: 32px;
    border: 2px solid var(--theme-dark-blue);
  }
`;

export const StyledCopyLink = styled(Copy)``;

export const StyledCopyTextBtn = styled.button`
  display: grid;
  grid-template-columns: auto auto;
  gap: 7px;
  background: var(--theme-StyledCopyTextBtn);
  outline: none;
  border: none;
  grid-area: btn;
  width: fit-content;
  align-self: baseline;
  font-family: 'Montserrat', sans-serif;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0;
  color: var(--theme-dark-blue);
`;

export const StyledForm = styled(Form)`
  display: grid;
  grid-template-columns: 62px 1fr;
  gap: 24px 20px;
  grid-template-areas:
    'icon input'
    '. btn';
`;

export const StyledGradientContainer = styled.div`
  position: relative;

  &[data-clicked='true'] {
    &::before {
      display: none;
    }
  }

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
    border-radius: 5px;
    background: transparent
      linear-gradient(
        85deg,
        var(--theme-StyledGradientContainer_before-1) 0%,
        var(--theme-StyledGradientContainer_before-2) 100%
      )
      0 0 no-repeat padding-box;
  }
`;

export const StyledFormControl = styled(Form.Control)`
  position: relative;
  background: var(--theme-StyledFormControl-bgr) 0 0 no-repeat padding-box;
  box-shadow: inset 4px 5px 6px var(--theme-StyledFormControl-boxshadow);
  border-radius: 5px;
  border: 1px solid var(--theme-StyledFormControl-border);
  font-family: 'Montserrat', sans-serif;
  font-size: 15px;
  font-weight: 500;
  letter-spacing: 0;
  color: var(--theme-StyledFormControl-color) !important;
  opacity: 1;
  padding: 6px 18px;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    background: red;
    height: 100%;
  }
`;

export const StyledFormGroup = styled(Form.Group)`
  .invalid-feedback {
    display: flex;
    flex-direction: column;
  }
`;
export const StyledFormLabel = styled(Form.Label)`
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 0;
  color: var(--theme-StyledFormLabel);
  opacity: 1;
`;

export const StyledContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: red 0 0 no-repeat padding-box;
  box-shadow: 0 3px 5px red;
  border-radius: 10px;
`;

export const AccountNameContainer = styled.div`
  padding: 30px;
`;
export const AssetsContainer = styled.div`
  padding: 30px 25px 30px 30px;
  max-height: 243px;
  overflow: auto;
  background: var(--theme-AssetsContainer-bgr) 0 0 no-repeat padding-box;
  box-shadow: inset 0 3px 5px var(--theme-AssetsContainer-boxshadow);

  &::-webkit-scrollbar {
    width: 5px; /* width of the entire scrollbar */
  }

  &::-webkit-scrollbar-track {
    background: var(
      --theme-AssetsContainer-scrollbar-track
    ); /* color of the tracking area */
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(
      --theme-AssetsContainer-scrollbar-thumb-bgr
    ); /* color of the scroll thumb */
    border-radius: 20px; /* roundness of the scroll thumb */
    border: 1px solid var(--theme-AssetsContainer-scrollbar-thumb-border); /* creates padding around scroll thumb */
  }
`;

const StyledAccountElemContainer = styled.div`
  display: grid;
  grid-template-columns: 32px 1fr max-content;
  grid-template-rows: 1fr;
  align-items: center;
  gap: 7px;
  grid-template-areas: '. . .';
  border-bottom: 1px solid var(--theme-StyledAccountElemContainer);
  padding: 5px 0;
  margin-top: 10px;

  &.header {
    gap: 0;
    margin: 0;
    justify-content: space-between;
    grid-template-columns: 1fr 1fr;
  }
`;

const StyledNameText = styled.span`
  font-family: 'Montserrat', sans-serif;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 0;
  color: var(--theme-StyledNameText);
  opacity: 1;
`;

const StyledPriceContainer = styled.div`
  display: grid;
  justify-items: flex-end;
`;
const StyledAmmount = styled.span`
  font-family: 'Montserrat', sans-serif;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 0;
  color: var(--theme-dark-blue);
  opacity: 1;
`;
const StyledPrice = styled.span`
  display: flex;
  font-family: 'Montserrat', sans-serif;
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0;
  color: var(--theme-StyledPrice);
`;

export const AccountAssetElemet = (data: IAssetData) => {
  return (
    <StyledAccountElemContainer>
      <StyledImage src={data?.logo ?? ''} className="small" />
      <StyledNameText>{data?.name ?? ''}</StyledNameText>
      <StyledPriceContainer>
        <StyledAmmount>
          {Number(data?.ammount ?? 0).toLocaleString('en-GB')}
        </StyledAmmount>
        <StyledPrice>{`$${Number(data?.price ?? 0).toLocaleString('en-GB')} ${
          data?.currency
        }`}</StyledPrice>
      </StyledPriceContainer>
    </StyledAccountElemContainer>
  );
};

interface IAccountAssetElemet {
  ammount: number;
}

export const AccountAssetHeader = (data: IAccountAssetElemet) => {
  return (
    <StyledAccountElemContainer className="header">
      <StyledNameText>Assets</StyledNameText>
      <StyledPriceContainer>
        <StyledAmmount>
          Balance: ${Number(data?.ammount ?? 0).toLocaleString('en-GB')}
        </StyledAmmount>
      </StyledPriceContainer>
    </StyledAccountElemContainer>
  );
};

export const AccountNameDtoComponentTheme = css`
  &[data-theme='${EColorScheme.DAY}'] {
    ${StyledCopyTextBtn} {
      --theme-StyledCopyTextBtn: var(--theme-light-white);
      --theme-StyledCopyTextBtn-color: var(--theme-light-white);
    }

    ${StyledGradientContainer} {
      --theme-StyledGradientContainer_before-1: #ffffff00;
      --theme-StyledGradientContainer_before-2: var(--theme-light-white);
    }

    ${StyledFormControl} {
      --theme-StyledFormControl-bgr: var(--theme-light-white);
      --theme-StyledFormControl-boxshadow: var(--theme-light-grey-2);
      --theme-StyledFormControl-border: var(--theme-light-grey-2);
      --theme-StyledFormControl-color: var(--theme-light-black-2);
    }

    ${StyledFormLabel} {
      --theme-StyledFormLabel: var(--theme-light-black-2);
    }

    ${AssetsContainer} {
      --theme-AssetsContainer-bgr: var(--theme-light-white);
      --theme-AssetsContainer-boxshadow: var(--theme-light-grey-2);
      --theme-AssetsContainer-scrollbar-track: var(--theme-light-white);
      --theme-AssetsContainer-scrollbar-thumb-bgr: var(--theme-light-grey-2);
      --theme-AssetsContainer-scrollbar-thumb-border: var(--theme-light-grey-2);
    }

    ${StyledAccountElemContainer} {
      --theme-StyledAccountElemContainer: var(--theme-light-grey-2);
    }

    ${StyledNameText} {
      --theme-StyledNameText: var(--theme-light-black-2);
    }

    ${StyledPrice} {
      --theme-StyledPrice: var(--theme-light-grey-2);
    }
  }

  &[data-theme='${EColorScheme.NIGHT}'] {
    ${StyledCopyTextBtn} {
      --theme-StyledCopyTextBtn: var(--theme-light-white);
    }

    ${StyledGradientContainer} {
      --theme-StyledGradientContainer_before-1: #0e101400;
      --theme-StyledGradientContainer_before-2: var(--theme-light-black-1);
    }

    ${StyledFormControl} {
      --theme-StyledFormControl-bgr: var(--theme-light-white);
      --theme-StyledFormControl-boxshadow: var(--theme-light-grey-2);
      --theme-StyledFormControl-border: var(--theme-light-grey-2);
      --theme-StyledFormControl-color: var(--theme-light-grey-4);
    }

    ${StyledFormLabel} {
      --theme-StyledFormLabel: var(--theme-light-grey-4);
    }

    ${AssetsContainer} {
      --theme-AssetsContainer-bgr: var(--theme-light-white);
      --theme-AssetsContainer-boxshadow: var(--theme-light-grey-2);
      --theme-AssetsContainer-scrollbar-track: var(--theme-light-white);
      --theme-AssetsContainer-scrollbar-thumb-bgr: var(--theme-light-grey-4);
      --theme-AssetsContainer-scrollbar-thumb-border: var(--theme-light-grey-2);
    }

    ${StyledAccountElemContainer} {
      --theme-StyledAccountElemContainer: var(--theme-light-grey-2);
    }

    ${StyledNameText} {
      --theme-StyledNameText: var(--theme-light-grey-4);
    }

    ${StyledPrice} {
      --theme-StyledPrice: var(--theme-light-grey-4);
    }
  }
`;
