import { createSlice } from '@reduxjs/toolkit';

const initialState = { values: [] };

const bubbleSlice = createSlice({
  name: 'bubble',
  initialState,
  reducers: {
    bubbleSort(state, action) {
      const j = action.payload;
      //payload is object j
      if (state.values[j] > state.values[j + 1]) {
        let temp = state.values[j + 1];
        state.values[j + 1] = state.values[j];
        state.values[j] = temp;
      }
    },
    setBubbleData(state, action) {
      state.values = action.payload;
    },
  },
});

export const { bubbleSort, setBubbleData } = bubbleSlice.actions;
export default bubbleSlice.reducer;
