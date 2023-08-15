import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface DataState {
  values: number[];
  first_index: number;
  second_index: number;
  //two indices even tho 1 can work to make other componants reuseable with other sorting algorithms
}
const initialState: DataState = {
  values: [],
  first_index: -100,
  second_index: -100,
};

const bubbleSlice = createSlice({
  name: 'bubble',
  initialState,
  reducers: {
    setBubbleData(state, action: PayloadAction<number[]>) {
      state.values = action.payload;
    },
    setBubbleIndices(
      state,
      action: PayloadAction<{ first_index: number; second_index: number }>
    ) {
      state.first_index = action.payload.first_index;
      state.second_index = action.payload.second_index;
    },
    resetIndices(state) {
      state.first_index = -100;
      state.second_index = -100;
    },
  },
});

export const { setBubbleData, setBubbleIndices, resetIndices } =
  bubbleSlice.actions;
export default bubbleSlice.reducer;
