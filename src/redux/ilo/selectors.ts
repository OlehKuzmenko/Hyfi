import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '@redux/index';

export const selectIlo = (state: RootState) => state.ilo;

export const selectIloBuyPriceState = createSelector(
  selectIlo,
  (state) => state.buyPrice
);
export const selectIloContributionState = createSelector(
  selectIlo,
  (state) => state.contributionPrice
);
// export const selectChangeWalletModalState = createSelector(
//   selectModal,
//   (state) => state.changeWallet
// );
// export const selectIloDisclaimerModalState = createSelector(
//   selectModal,
//   (state) => state.iloDisclaimer
// );
