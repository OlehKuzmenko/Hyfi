import React from 'react';
import {
  StyledIcon,
  StyledPartContainer,
  StyledText,
  StyledTitle,
} from './styled';

export interface IPartProps {
  index: number;
  title: React.ReactNode;
  text: React.ReactNode;
}

export default function Part({ index, title, text }: IPartProps) {
  return (
    <StyledPartContainer>
      <StyledIcon>{index}</StyledIcon>
      <StyledTitle>{title}</StyledTitle>
      <StyledText>{text}</StyledText>
    </StyledPartContainer>
  );
}
