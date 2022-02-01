import { EColorScheme, selectCurrentColorMode } from '@/redux/css';
import { useAppSelector } from '@/utils/hooks';
import React from 'react';
import { StyledBadge, StyledSpan } from './styled';
import bgr from '@img/Rectangle.png';
import bgr_dark from '@img/Rectangle_dark.png';

interface IPropsImageBadge {
  text: React.ReactNode;
  pathname?: string;
  search?: string;
  hash?: string;
}

export default function ImageBadge({ text, pathname }: IPropsImageBadge) {
  const theme = useAppSelector(selectCurrentColorMode);
  return (
    <StyledBadge
      to={{
        pathname: pathname ? `/${pathname}` : '',
        state: { fromDashboard: true },
      }}
      image={
        { [EColorScheme.DAY]: bgr, [EColorScheme.NIGHT]: bgr_dark }[theme] ?? ''
      }
    >
      <StyledSpan>{text}</StyledSpan>
    </StyledBadge>
  );
}
