import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '@/redux';

export const selectCss = (state: RootState) => state.css;

export const selectClosedSidebarState = createSelector(
  selectCss,
  (state) => state.closed
);

export const selectCurrentColorMode = createSelector(
  selectCss,
  (state) => state.colorScheme
);
