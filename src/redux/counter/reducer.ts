import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PURGE } from 'redux-persist';
import { changeAmmountAsync } from './action';

interface CounterState {
  value: number;
  status: 'loading' | 'finished' | 'error';
}

const initialState: CounterState = {
  value: 0,
  status: 'loading',
};

export const counterSlice = createSlice({
  name: 'counter',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
      state.status = 'finished';
    },
    decrement: (state) => {
      state.value -= 1;
      state.status = 'finished';
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
      state.status = 'finished';
    },
    decrementByAmount: (state, action: PayloadAction<number>) => {
      state.value -= action.payload;
      state.status = 'finished';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(changeAmmountAsync.pending, (state, action) => {
        state.status = 'loading';

        // Add user to the state array
      })
      .addCase(changeAmmountAsync.fulfilled, (state, action) => {
        // Add user to the state array
        state.status = 'finished';
        state.value += action.payload;
      })
      .addCase(changeAmmountAsync.rejected, (state, action) => {
        // Add user to the state array
        state.status = 'error';
      });

    builder.addCase(PURGE, (state) => {
      return initialState;
    });
  },
});
export const { increment, decrement, incrementByAmount, decrementByAmount } =
  counterSlice.actions;

export default counterSlice.reducer;
