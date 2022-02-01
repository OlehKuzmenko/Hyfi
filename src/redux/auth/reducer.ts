import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  loginUserToWebSite,
  logoutUserFromWebSite,
  changeStateField,
} from './action';
import { PURGE } from 'redux-persist';
import { IUser, WalletType } from '@interfaces/IUser';

export interface AuthStateData extends IUser {}

export interface AuthState {
  data: AuthStateData;
  pending: boolean;
  error: boolean;
  changeStateField: {
    [x in keyof AuthStateData]?: AuthStateData[x] | boolean;
  };
}

const initialState: AuthState = {
  data: { accountName: '', status: 'visitor', walletType: '' },
  pending: false,
  error: false,
  changeStateField: {
    accountName: false,
    status: false,
    walletType: false,
  },
};

export const counterSlice = createSlice({
  name: 'auth',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setWalletType: (state, action: PayloadAction<`${WalletType}`>) => {
      state.data.walletType = action.payload;
    },
    clearAuthState: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(changeStateField.pending, (state, { meta: { arg } }) => {
        Object.entries(arg).forEach(([key]) => {
          state.changeStateField[key as keyof AuthState['data']] = true;
        });
      })
      .addCase(changeStateField.fulfilled, (state, { payload }) => {
        Object.entries(payload).forEach(([key, value]) => {
          if (key === 'accountName') {
            state.data[key] = `${value}`;
          }
          state.changeStateField[key as keyof AuthState['changeStateField']] =
            false;
        });
      })
      .addCase(changeStateField.rejected, (state, { meta: { arg } }) => {
        Object.entries(arg).forEach(([key]) => {
          state.changeStateField[key as keyof AuthState['changeStateField']] =
            false;
        });
      });

    builder
      .addCase(loginUserToWebSite.pending, (state) => {
        state.pending = true;
      })
      .addCase(loginUserToWebSite.fulfilled, (state, { payload }) => {
        state.pending = false;
        state.data.accountName = payload.accountName;
        state.data.status = payload.status;
      })
      .addCase(loginUserToWebSite.rejected, (state) => {
        state.pending = false;
        state.error = true;
      });

    builder
      .addCase(logoutUserFromWebSite.pending, (state) => {
        state.pending = true;
      })
      .addCase(logoutUserFromWebSite.fulfilled, (state, { payload }) => {
        state.pending = false;
        state.data = initialState.data;
      })
      .addCase(logoutUserFromWebSite.rejected, (state) => {
        return initialState;
      });

    builder.addCase(PURGE, (state) => {
      return initialState;
    });
  },
});
export const { setWalletType, clearAuthState } = counterSlice.actions;

export default counterSlice.reducer;
