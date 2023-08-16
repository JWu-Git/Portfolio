import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface DataState {
  numbers: number[];
  first_compare_index: number;
  second_compare_index: number;
  is_sorting: boolean;
  //two indices even tho 1 can work to make other componants reuseable with other sorting algorithms
}
const initialState: DataState = {
  numbers: [],
  first_compare_index: -100,
  second_compare_index: -100,
  is_sorting: false,
};

const sortSlice = createSlice({
  name: 'bubble',
  initialState,
  reducers: {
    setNumbers(state, action: PayloadAction<number[]>) {
      state.numbers = action.payload;
      state.is_sorting = true;
    },
    setIndices(
      state,
      action: PayloadAction<{
        first_compare_index: number;
        second_compare_index: number;
      }>
    ) {
      state.first_compare_index = action.payload.first_compare_index;
      state.second_compare_index = action.payload.second_compare_index;
    },
    resetIndices(state) {
      state.first_compare_index = -100;
      state.second_compare_index = -100;
      state.is_sorting = false;
    },
  },
});

export const { setNumbers, setIndices, resetIndices } = sortSlice.actions;
export default sortSlice.reducer;
