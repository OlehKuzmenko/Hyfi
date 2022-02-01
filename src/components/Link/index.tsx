import { NavLinkProps } from 'react-router-dom';
import { useAppSelector } from '@utils/hooks';
import { selectAuth } from '@redux/auth';
import { StyledLink } from './styled';
import React from 'react';

const Link = React.forwardRef(({ to, ...props }: NavLinkProps, ref) => {
  const auth = useAppSelector(selectAuth);
  return (
    <StyledLink
      className={auth?.pending ? 'disabled' : ''}
      to={!auth?.pending ? to : `#`}
      {...props}
    />
  );
});
export default Link;
