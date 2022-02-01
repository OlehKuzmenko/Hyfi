import { Redirect, Route, Switch, useLocation } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import React, { Suspense } from 'react';
import GloblaStyle from '@utils/theme.style';

import Sidebar from '@components/Sidebar';

import { IRoute } from '@interfaces/IRoutes';
import { LinksEnum } from '@interfaces/LinksEnum';
import { UserStatusType } from '@interfaces/IUser';
import { EDashboardPageTabs } from '@pages/Dashboard';

import { CSSTransition, SwitchTransition } from 'react-transition-group';

import { ReactComponent as Home } from '@icons/home.svg';
import { ReactComponent as Pools } from '@icons/pools.svg';
import { ReactComponent as Chain } from '@icons/chain.svg';
import { ReactComponent as Overview } from '@icons/overview.svg';
import { ReactComponent as Swap } from '@icons/vice-verse_arrows.svg';
import { ReactComponent as Tractor } from '@icons/tractor.svg';

import homeBgrImg from '@img/infographic9.jpg';
import homeBgrImgDark from '@img/infographic9_dark.png';

import { userLoggedStatus } from '@redux/auth';
import { useAppSelector } from '@utils/hooks';

import ErrorFallback from '@layouts/Fallback';
import { StyledContainer } from '@styles/containers.styled';
import { EColorScheme, selectCurrentColorMode } from '@redux/css';
import LicenseList from '@pages/LicenseList/LicenseList';

const Ilo = React.lazy(() => import('@pages/ilo'));
const Report = React.lazy(() => import('@pages/Report'));
const HomePage = React.lazy(() => import('@pages/HomePage'));
const Dashboard = React.lazy(() => import('@pages/Dashboard'));
const HowToTakePart = React.lazy(() => import('@pages/HowToTakePart'));
export default function App() {
  const theme = useAppSelector(selectCurrentColorMode);
  const type = useAppSelector(userLoggedStatus);
  const location = useLocation();
  const routes: {
    [UserStatusType.VISITOR]: IRoute[];
    [UserStatusType.AUTHED]: IRoute[];
  } = {
    [UserStatusType.VISITOR]: [
      {
        name: 'Home',
        path: LinksEnum.MAIN,
        exact: true,
        link: true,
        bgrImg: {
          [EColorScheme.DAY]: homeBgrImg,
          [EColorScheme.NIGHT]: homeBgrImgDark,
        },
        icon: () => <Home />,
        main: () => <HomePage />,
      },
      {
        name: 'NFT Offers',
        path: LinksEnum.ILO,
        link: true,
        icon: () => <Chain />,
        main: () => (
          <StyledContainer>
            <Ilo />
            <HowToTakePart />
          </StyledContainer>
        ),
      },
      {
        name: 'Report',
        path: LinksEnum.REPORT,
        exact: true,
        link: false,
        main: () => <Report />,
      },
      {
        name: 'Pools (coming soon)',
        path: LinksEnum.POOLS,
        link: true,
        icon: () => <Pools />,
        main: () => <h2>Pools for unauthorized</h2>,
      },

      {
        name: 'Overview',
        path: LinksEnum.OVERVIEW,
        link: true,
        icon: () => <Overview />,
        main: () => <h2>Overview for unauthorized</h2>,
      },
      {
        name: 'Swap (coming soon)',
        path: LinksEnum.SWAP,
        link: true,
        icon: () => <Swap />,
        main: () => <h2>Swap for unauthorized</h2>,
      },

      {
        name: 'Farms (coming soon)',
        path: LinksEnum.FARMS,
        link: true,
        icon: () => <Tractor />,
        main: () => <h2>Farms for unauthorized</h2>,
      },
      {
        name: 'Not Match',
        path: LinksEnum.NOTFOUND,
        link: false,
        icon: () => <Overview />,
        main: () => <Redirect to={LinksEnum.MAIN} />,
      },
    ],
    [UserStatusType.AUTHED]: [
      {
        name: 'Home',
        path: LinksEnum.DASHBOARD,
        link: LinksEnum.DASHBOARD + `/${EDashboardPageTabs.OVERVIEW}`,
        icon: () => <Home />,
        main: () => <Dashboard />,
      },
      {
        name: 'Home',
        path: LinksEnum.MAIN,
        exact: true,
        link: false,
        icon: () => <Home />,
        main: () => (
          <Redirect
            to={LinksEnum.DASHBOARD + `/${EDashboardPageTabs.OVERVIEW}`}
          />
        ),
      },
      {
        name: 'NFT Offers',
        path: LinksEnum.ILO,
        link: true,
        icon: () => <Chain />,
        main: () => (
          <StyledContainer>
            <Ilo />
            <HowToTakePart />
          </StyledContainer>
        ),
      },
      {
        name: 'Report',
        path: LinksEnum.REPORT,
        exact: true,
        link: false,
        main: () => <Report />,
      },
      {
        name: 'Pools (coming soon)',
        path: LinksEnum.POOLS,
        link: true,
        icon: () => <Pools />,
        main: () => <h2>Pools</h2>,
      },
      {
        name: 'Overview',
        path: LinksEnum.OVERVIEW,
        link: true,
        icon: () => <Overview />,
        main: () => <h2>Overview</h2>,
      },
      {
        name: 'Swap (coming soon)',
        path: LinksEnum.SWAP,
        link: true,
        icon: () => <Swap />,
        main: () => <h2>Swap</h2>,
      },
      {
        name: 'Farms (coming soon)',
        path: LinksEnum.FARMS,
        link: true,
        icon: () => <Tractor />,
        main: () => <h2>Farms</h2>,
      },
      {
        name: 'License List',
        path: LinksEnum.LICENSE,
        link: true,
        icon: () => <Tractor />,
        main: () => <LicenseList />,
      },
      {
        name: 'Not Match',
        path: LinksEnum.NOTFOUND,
        link: false,
        icon: () => <Overview />,
        main: () => <Redirect to={LinksEnum.MAIN} />,
      },
    ],
  };

  return (
    <>
      <Sidebar routes={routes[type]}>
        <SwitchTransition mode="out-in">
          <CSSTransition
            key={location.pathname}
            classNames="my-node"
            timeout={300}
          >
            <ErrorBoundary FallbackComponent={ErrorFallback}>
              <Suspense fallback={<div>Loading...</div>}>
                <Switch location={location}>
                  {routes[type].map((route, index) => (
                    <Route
                      key={index}
                      path={route.path}
                      exact={route.exact}
                      children={route.main}
                    />
                  ))}
                </Switch>
              </Suspense>
            </ErrorBoundary>
          </CSSTransition>
        </SwitchTransition>
      </Sidebar>
      <GloblaStyle theme={theme} />
    </>
  );
}
