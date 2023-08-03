import { createSlice } from '@reduxjs/toolkit';

const initialState = { values: [] };

const bubbleSlice = createSlice({
  name: 'bubble',
  initialState,
  reducers: {
    bubbleSort(state) {
      for (let i = state.values.length - 1; i > 0; i--) {
        for (let j = 0; j <= i - 1; j++) {
          if (state.values[j] > state.values[j + 1]) {
            let temp = state.values[j + 1];
            state.values[j + 1] = state.values[j];
            state.values[j] = temp;
          }
        }
      }
    },
    setBubbleData(state, action) {
      state.values = action.payload;
    },
  },
});

export const { bubbleSort, setBubbleData } = bubbleSlice.actions;
export default bubbleSlice.reducer;
