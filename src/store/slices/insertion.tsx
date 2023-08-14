import { createSlice } from '@reduxjs/toolkit';

const initialState = { values: [] };

const insertionSlice = createSlice({
  name: 'insertion',
  initialState,
  reducers: {
    insertionSort(state, action) {
      const i = action.payload;
      let j = i;
      while (j > 0 && state.values[j] < state.values[j - 1]) {
        let temp = state.values[j - 1];
        state.values[j - 1] = state.values[j];
        state.values[j] = temp;
        j = j - 1;
      }
    },
    setInsertionData(state, action) {
      state.values = action.payload;
    },
  },
});

export const { insertionSort, setInsertionData } = insertionSlice.actions;
export default insertionSlice.reducer;
