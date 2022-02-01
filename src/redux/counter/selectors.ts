import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '@redux/index';

export const selectCount = (state: RootState) => state.counter;

export const countSelectorState = createSelector(selectCount, (state) => state);
