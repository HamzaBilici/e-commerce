import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import {getDummy} from '../actions/getDummy'

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
    extraReducers: (builder) => {
    builder.addCase(getDummy.fulfilled, (state, action) => {
      state.value = action.payload.value;
    });
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;