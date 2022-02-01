import React, { useMemo } from 'react';
import { AsideComponent, StyledContainer } from './styled';
import Navbar from '@components/Navbar';
import { IRoute } from '@interfaces/IRoutes';
import { StyledFooter } from '@components/Footer/styled';
import { useLocation } from 'react-router-dom';
import { useAppSelector } from '@/utils/hooks';
import { selectCurrentColorMode } from '@/redux/css';
type SidebarProps = {
  routes: IRoute[];
  children?: JSX.Element;
};

export default function Sidebar({
  routes,
  children = <h1>Error</h1>,
}: SidebarProps) {
  const theme = useAppSelector(selectCurrentColorMode);

  const location = useLocation();
  const currentRoute = useMemo(() => {
    return routes.find(({ path }) => {
      return path === location.pathname;
    });
  }, [location.pathname]);

  return (
    <>
      <Navbar route={routes[0]} />
      <AsideComponent routes={routes} />
      <StyledContainer
        data-page={currentRoute?.path ?? ''}
        bgrImg={(currentRoute?.bgrImg && currentRoute?.bgrImg[theme]) ?? ''}
      >
        {children}
      </StyledContainer>
      <StyledFooter />
    </>
  );
}
