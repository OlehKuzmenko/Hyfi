import {
  StyledDashboardBlock,
  StyledDashboardBlockTitle,
} from '@pages/Dashboard/styled';
import { StyledListHeader } from '@components/DataContainer/styled';
import Link from '@components/Link';
import { CompanyLogoData } from '@components/CompanyLogo/mocked';
import {
  StyledDropdownBtn,
  StyledDropdownBtnText,
} from '@components/DataContainer';
import React from 'react';
import {
  StyledCompanyLogo,
  StyledDropdownArrow,
} from '@pages/Dashboard/components/LicenseBlock/styled';

export const DashboardLicenseBlock = () => {
  return (
    <StyledDashboardBlock className={'license-block'}>
      <StyledListHeader className="header dashboard-blocks__head_title">
        <StyledDashboardBlockTitle>License</StyledDashboardBlockTitle>
        <Link className="dashboard-blocks__head_link" to={'#'}>
          View all
        </Link>
      </StyledListHeader>
      <ListHeader />
      <ListHeader />
      <ListHeader />
      <ListHeader />
    </StyledDashboardBlock>
  );
};

const ListHeader = () => {
  return (
    <StyledListHeader className="header">
      <StyledCompanyLogo
        title={CompanyLogoData[0].title}
        img={CompanyLogoData[0].img}
        status={CompanyLogoData[0].status}
      />
      <StyledDropdownBtn>
        <StyledDropdownBtnText>Details</StyledDropdownBtnText>
        <StyledDropdownArrow />
      </StyledDropdownBtn>
    </StyledListHeader>
  );
};
