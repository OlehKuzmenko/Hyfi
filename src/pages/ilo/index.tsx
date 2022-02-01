import React from 'react';
import CompanyLogo from '@components/CompanyLogo';
import { CompanyLogoData } from '@components/CompanyLogo/mocked';
import { DataContainerData } from '@components/DataContainer/mocked';
import { TitleContainerData } from '@components/DataContainer/mocked';

import InputBlock from '@/components/Input';
import {
  IloHead,
  StyledIloBlock,
  StyledIloBlockImg,
  StyledIloBlockTitle,
  StyledIloContainer,
  StyledIloContainerBlocks,
  StyledIloContainerInptBtn,
  StyledIloWrapper,
  StyledDataContainer,
  StyledIloContainerInfo,
  StyledIloBlockBlueText,
  StyledListHeader,
} from '@pages/ilo/styled';
import PageHead from '@/components/PageHead';
import DisclaimerModal from '@components/DisclaimerModal';
import { useAppDispatch, useAppSelector } from '@/utils/hooks';
import {
  selectIloBuyPriceState,
  changeIloBuyPrice,
  selectIloContributionState,
} from '@redux/ilo';
import AuthedUserBtn from './protection/buyBtn';
import AuthedConnectWallet from './protection/connectWallet';
import { IloPageDto } from './iloPage.dto';
import { useValidation } from 'react-class-validator';
import Link from '@components/Link';
import { ReactComponent as ShareLink } from '@icons/link.svg';

interface IiloListData {
  linksTo?: string;
}

export default function Ilo({ linksTo }: IiloListData) {
  const dispatch = useAppDispatch();
  const priceValue = useAppSelector(selectIloBuyPriceState) || 0;
  const contribution = useAppSelector(selectIloContributionState);
  const [validate, errors] = useValidation(IloPageDto);

  const changeValue = function (event: React.ChangeEvent<HTMLInputElement>) {
    const value: number = +event.target.value;

    if (value >= 0) {
      dispatch(changeIloBuyPrice(value));
    }
  };

  const handleSubmit = async function (
    evt: React.SyntheticEvent<HTMLFormElement>
  ) {
    evt.preventDefault();
    if (await validate({ priceValue })) {
    }
  };

  return (
    <StyledIloWrapper>
      <PageHead
        title="ILO"
        text="Owners that seek to raise money for their development of New technologies; IP, Patents Licenses, Brands and Projects (“Assets”) can sell up to a 49% interest in their Assets on the HYFI Platform with a right to buy back interests sold. We will introduce your Assets to our Global network of Brokers who will introduce Investors (Institutional, Corporations, Family Offices, Private Wealth and Individuals) who may buy fractional interests in your Assets."
      />
      <StyledIloBlock className={'ilo-block'}>
        <StyledIloContainer className={'ilo-container'}>
          <IloHead />
          <StyledListHeader className="header ilo-header">
            <h3>
              <CompanyLogo
                title={CompanyLogoData[0].title}
                img={CompanyLogoData[0].img}
                status={CompanyLogoData[0].status}
              />
              <Link to={linksTo ?? '#'}>
                <ShareLink />
              </Link>
            </h3>
          </StyledListHeader>
          <StyledIloContainerBlocks>
            <StyledDataContainer
              listData={[
                DataContainerData[0],
                DataContainerData[1],
                DataContainerData[2],
              ]}
            />
            <StyledDataContainer
              listData={[DataContainerData[3], DataContainerData[4]]}
            />
            <StyledDataContainer listData={TitleContainerData} />
          </StyledIloContainerBlocks>
          <StyledIloBlockTitle>
            Number of Licenses Fragments:
          </StyledIloBlockTitle>
          <StyledIloContainerInptBtn noValidate onSubmit={handleSubmit}>
            <StyledIloContainerInfo>
              <InputBlock
                type="text"
                id="sumInput"
                className={'ilo-page_btn'}
                aria-describedby="sumInputBlock"
                placeholder={String(priceValue) ?? ''}
                value={priceValue}
                onChange={changeValue}
                onBlur={() => validate({ priceValue }, ['priceValue'])}
                isInvalid={!!errors.priceValue}
              />
              {!errors.priceValue && (
                <StyledIloBlockBlueText>
                  {priceValue} licenses fragments for {priceValue} BUSD
                </StyledIloBlockBlueText>
              )}
              {errors.priceValue && (
                <StyledIloBlockBlueText>
                  Unnknown ammount of licenses fragments
                </StyledIloBlockBlueText>
              )}
              <p className="info">
                Your Contribution <span>{contribution} BUSD</span>
              </p>
            </StyledIloContainerInfo>
            <AuthedUserBtn disabled={!!errors.priceValue} />
            <AuthedConnectWallet disabled={!!errors.priceValue} />
          </StyledIloContainerInptBtn>
        </StyledIloContainer>
        <StyledIloBlockImg className={'ilo-block__img'} />
      </StyledIloBlock>
      <DisclaimerModal />
    </StyledIloWrapper>
  );
}
