import { StyledDashboardWrapper } from '@pages/Dashboard/styled';
import { HeadBlock } from '@pages/Dashboard/components/HeadBlock/HeadBlock';
import { Redirect, Route, Switch } from 'react-router-dom';
import { lazy } from 'react';
import { LinksEnum } from '@/interfaces/LinksEnum';

const Overview = lazy(() => import('./subpage/Overview'));
export enum EDashboardPageTabs {
  OVERVIEW = 'overview',
  LICENSE = 'license',
  TRANSACTIONS = 'transactions',
}

const Dashboard = () => {
  return (
    <StyledDashboardWrapper className={'dashboard-wrapper'}>
      <HeadBlock />
      <Switch>
        <Route
          path={`${LinksEnum.DASHBOARD}/${EDashboardPageTabs.OVERVIEW}`}
          children={<Overview />}
        />
        <Route
          path={`${LinksEnum.DASHBOARD}/${EDashboardPageTabs.LICENSE}`}
          children={<h1>License</h1>}
        />
        <Route
          path={`${LinksEnum.DASHBOARD}/${EDashboardPageTabs.TRANSACTIONS}`}
          children={<h1>Transactions</h1>}
        />
        <Route
          exact
          path="*"
          children={
            <Redirect
              to={`${LinksEnum.DASHBOARD}/${EDashboardPageTabs.OVERVIEW}`}
            />
          }
        />
      </Switch>
    </StyledDashboardWrapper>
  );
};

export default Dashboard;
