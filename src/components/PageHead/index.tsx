import { EColorScheme, selectCurrentColorMode } from '@/redux/css';
import { useAppSelector } from '@/utils/hooks';
import React from 'react';
import {
  StyledWrapperHead,
  StyledWrapperHeadContainer,
  StyledWrapperHeadTitle,
  StyledWrapperHeadText,
} from './styled';
import bgrImg from '@img/ilo-header-bgr.jpg';
import bgrImg_dark from '@img/ilo-header-bgr_dark.png';

interface IPageHead {
  title: string;
  textReduced?: boolean;
  text?: string;
}

export default function PageHead({
  title,
  textReduced = false,
  text,
  ...props
}: IPageHead) {
  const theme = useAppSelector(selectCurrentColorMode);

  return (
    <StyledWrapperHead
      image={
        { [EColorScheme.DAY]: bgrImg, [EColorScheme.NIGHT]: bgrImg_dark }[theme]
      }
      {...props}
    >
      <StyledWrapperHeadContainer>
        <StyledWrapperHeadTitle>{title}</StyledWrapperHeadTitle>
        {text && (
          <StyledWrapperHeadText className={textReduced ? 'reduced' : ''}>
            {text}
          </StyledWrapperHeadText>
        )}
      </StyledWrapperHeadContainer>
    </StyledWrapperHead>
  );
}
