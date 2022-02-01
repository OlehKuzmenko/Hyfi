import React from 'react';
import {
  StyledDataContainer,
  StyledLogoContainer,
  StyledSection,
  StyledImage,
  StyledTitle,
  StyledStatus,
  StyledButton,
} from './styled';

interface ICompanyLogoProps {
  title?: string;
  img?: string;
  status?: string;
}

export default function CompanyLogo({ title, img, status }: ICompanyLogoProps) {
  return (
    <StyledSection>
      <StyledLogoContainer>
        <StyledImage
          src={img}
          data-hasimage={!!img?.length ?? false}
          rounded
          fluid
        />
      </StyledLogoContainer>
      <StyledDataContainer>
        <StyledTitle data-hastitle={!!title?.length ?? false}>
          {!!title?.length ? title : 'Missing data'}
        </StyledTitle>
        <StyledStatus>Status</StyledStatus>
        <StyledButton
          data-style={status}
          data-hasstatus={!!status?.length ?? false}
        >
          {status}
        </StyledButton>
      </StyledDataContainer>
    </StyledSection>
  );
}
