import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '@redux/index';

export const selectAuth = (state: RootState) => state.auth;

export const authSelectorState = createSelector(selectAuth, (state) => state);

export const userLoggedStatus = createSelector(
  selectAuth,
  (state) => state.data.status
);
export const authWalletAddress = createSelector(
  selectAuth,
  (state) => state.data.accountName
);
export const authWalletType = createSelector(
  selectAuth,
  (state) => state.data.walletType
);
export const changeStateData = createSelector(
  selectAuth,
  (state) => state.changeStateField
);
