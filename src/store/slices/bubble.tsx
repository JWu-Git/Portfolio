import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface DataState {
  values: number[];
}
const initialState: DataState = { values: [] };

const bubbleSlice = createSlice({
  name: 'bubble',
  initialState,
  reducers: {
    bubbleSort(state, action: PayloadAction<number>) {
      const j = action.payload;
      //payload is object j
      if (state.values[j] > state.values[j + 1]) {
        let temp = state.values[j + 1];
        state.values[j + 1] = state.values[j];
        state.values[j] = temp;
      }
    },
    setBubbleData(state, action: PayloadAction<number[]>) {
      state.values = action.payload;
    },
  },
});
export const { bubbleSort, setBubbleData } = bubbleSlice.actions;
export default bubbleSlice.reducer;
