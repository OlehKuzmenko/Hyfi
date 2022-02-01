import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ModalState {
  connectWallet: boolean;
  changeWallet: boolean;
  iloDisclaimer: boolean;
}

const initialState: ModalState = {
  connectWallet: false,
  changeWallet: false,
  iloDisclaimer: false,
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openConnectWallet: (state, action: PayloadAction<boolean>) => {
      state.connectWallet = action.payload;
    },
    openChangeWallet: (state, action: PayloadAction<boolean>) => {
      state.changeWallet = action.payload;
    },
    openIloDisclaimer: (state, action: PayloadAction<boolean>) => {
      state.iloDisclaimer = action.payload;
    },
  },
});
export const { openConnectWallet, openChangeWallet, openIloDisclaimer } =
  modalSlice.actions;

export default modalSlice.reducer;
