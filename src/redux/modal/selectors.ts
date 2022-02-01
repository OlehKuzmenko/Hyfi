import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '@/redux';

export const selectModal = (state: RootState) => state.modal;

export const selectConnectWalletModalState = createSelector(
  selectModal,
  (state) => state.connectWallet
);
export const selectChangeWalletModalState = createSelector(
  selectModal,
  (state) => state.changeWallet
);
export const selectIloDisclaimerModalState = createSelector(
  selectModal,
  (state) => state.iloDisclaimer
);
