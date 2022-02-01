import { createAsyncThunk } from '@reduxjs/toolkit';
function timeout(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
// First, create the thunk
export const changeAmmountAsync = createAsyncThunk(
  'counter/changeAmmountAsync',
  async (digit: number, thunkAPI) => {
    await timeout(3000);
    return digit;
  }
);
