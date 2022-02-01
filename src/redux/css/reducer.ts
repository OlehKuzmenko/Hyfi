import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CssState {
  closed: boolean;
  colorScheme: `${EColorScheme}`;
}

export enum EColorScheme {
  DAY = 'day',
  NIGHT = 'night',
}

const initialState: CssState = {
  closed: false,
  colorScheme: EColorScheme.DAY,
};

export const CssSlice = createSlice({
  name: 'css',
  initialState,
  reducers: {
    changeClosed: (state, action: PayloadAction<boolean>) => {
      state.closed === action.payload
        ? (state.closed = !action.payload)
        : (state.closed = action.payload);
    },
    changeColorScheme: (state, action: PayloadAction<`${EColorScheme}`>) => {
      state.colorScheme = action.payload;
    },
  },
});

export const { changeClosed, changeColorScheme } = CssSlice.actions;

export default CssSlice.reducer;
