import { useEffect, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '@utils/hooks';
import { selectAuth, clearAuthState } from '@redux/auth';
interface IAuthLayoutProps {
  children: JSX.Element;
}
export default function AuthLayoutBlock({ children }: IAuthLayoutProps) {
  const dispatch = useAppDispatch();
  const { pending } = useAppSelector(selectAuth);
  const timeoutlRef: { current: NodeJS.Timeout | null } = useRef(null);

  useEffect(() => {
    if (pending) {
      const id = setTimeout(() => {
        if (pending) {
          dispatch(clearAuthState());
        }
      }, 5000);
      timeoutlRef.current = id;
    }
    return () => {
      clearTimeout(timeoutlRef.current as NodeJS.Timeout);
    };
  }, []);

  if (pending) {
    return <h1>Loading</h1>;
  }

  return children;
}
