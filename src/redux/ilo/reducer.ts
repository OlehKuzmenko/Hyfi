import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IloState {
  buyPrice: number;
  contributionPrice: number;
}

const initialState: IloState = {
  buyPrice: 0,
  contributionPrice: 0,
};

export const iloSlicer = createSlice({
  name: 'ilo',
  initialState,
  reducers: {
    changeIloBuyPrice: (state, action: PayloadAction<number>) => {
      state.buyPrice = action.payload;
    },
    addContributionPrice: (state, action: PayloadAction<number>) => {
      state.buyPrice = 0;
      state.contributionPrice += action.payload;
    },
  },
});
export const { changeIloBuyPrice, addContributionPrice } = iloSlicer.actions;

export default iloSlicer.reducer;
