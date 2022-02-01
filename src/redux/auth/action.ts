import { IUser, UserStatusType } from '@/interfaces/IUser';
import { authedUser } from '@mock/user';
import { createAsyncThunk } from '@reduxjs/toolkit';
// import { persistor } from '@redux/index';
import { AuthState } from './index';

function timeout(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

interface LoginReturned extends IUser {}

export const changeStateField = createAsyncThunk(
  'auth/changeAccountName',
  async (accountWallet: AuthState['changeStateField']) => {
    await timeout(2000);
    return accountWallet;
  }
);

export const loginUserToWebSite = createAsyncThunk(
  'auth/loginUserToWebSite',
  async () => {
    await timeout(2000);
    return authedUser as LoginReturned;
  }
);

export const logoutUserFromWebSite = createAsyncThunk(
  'auth/logoutUserFromWebSite',
  async () => {
    await timeout(2000);
    return {
      accountName: '',
      status: UserStatusType.VISITOR,
    } as LoginReturned;
  }
);
