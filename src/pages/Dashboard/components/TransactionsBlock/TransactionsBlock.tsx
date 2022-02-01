import { StyledListHeader } from '@components/DataContainer/styled';
import {
  StyledDashboardBlock,
  StyledDashboardBlockTitle,
} from '@pages/Dashboard/styled';
import Link from '@components/Link';
import React from 'react';
import { ReactComponent as ShareLink } from '@icons/link.svg';
import { StyledDashboardBlockTransactions } from '@pages/Dashboard/components/TransactionsBlock/styled';

export const TransactionsBlock = () => {
  return (
    <StyledDashboardBlock className={'transactions-block'}>
      <StyledListHeader className="header dashboard-blocks__head_title">
        <StyledDashboardBlockTitle>
          Recent Transactions
        </StyledDashboardBlockTitle>
        <Link className="dashboard-blocks__head_link" to={'#'}>
          View all
        </Link>
      </StyledListHeader>
      <StyledListHeader className="header dashboard-blocks__head_title">
        <StyledDashboardBlockTransactions>
          0xfbb1...bb98
        </StyledDashboardBlockTransactions>
        <Link className="dashboard-blocks__head_link" to={'#'}>
          <ShareLink />
        </Link>
      </StyledListHeader>
      <StyledListHeader className="header dashboard-blocks__head_title">
        <StyledDashboardBlockTransactions>
          0xfbb1...bb98
        </StyledDashboardBlockTransactions>
        <Link className="dashboard-blocks__head_link" to={'#'}>
          <ShareLink />
        </Link>
      </StyledListHeader>
      <StyledListHeader className="header dashboard-blocks__head_title">
        <StyledDashboardBlockTransactions>
          0xfbb1...bb98
        </StyledDashboardBlockTransactions>
        <Link className="dashboard-blocks__head_link" to={'#'}>
          <ShareLink />
        </Link>
      </StyledListHeader>
      <StyledListHeader className="header dashboard-blocks__head_title">
        <StyledDashboardBlockTransactions>
          0xfbb1...bb98
        </StyledDashboardBlockTransactions>
        <Link className="dashboard-blocks__head_link" to={'#'}>
          <ShareLink />
        </Link>
      </StyledListHeader>
      <StyledListHeader className="header dashboard-blocks__head_title">
        <StyledDashboardBlockTransactions>
          0xfbb1...bb98
        </StyledDashboardBlockTransactions>
        <Link className="dashboard-blocks__head_link" to={'#'}>
          <ShareLink />
        </Link>
      </StyledListHeader>
      <StyledListHeader className="header dashboard-blocks__head_title">
        <StyledDashboardBlockTransactions>
          0xfbb1...bb98
        </StyledDashboardBlockTransactions>
        <Link className="dashboard-blocks__head_link" to={'#'}>
          <ShareLink />
        </Link>
      </StyledListHeader>
    </StyledDashboardBlock>
  );
};
