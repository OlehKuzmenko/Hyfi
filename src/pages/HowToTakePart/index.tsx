import React from 'react';
import Part from './components/Parts';
import {
  StyledContainer,
  StyledPageHeader,
  StyledPageContainer,
} from './styled';
import { takePartData } from './mockedData';
export default function HowToTakePart() {
  return (
    <StyledContainer>
      <StyledPageHeader title="How to take part" textReduced />
      <StyledPageContainer>
        {takePartData.map((elm, index) => (
          <Part
            key={index}
            index={index + 1}
            title={elm.title}
            text={elm.text}
          />
        ))}
      </StyledPageContainer>
    </StyledContainer>
  );
}
