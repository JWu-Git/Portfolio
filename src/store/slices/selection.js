import { createSlice } from '@reduxjs/toolkit';

const initialState = { values: [] };

const selectionSlice = createSlice({
  name: 'selection',
  initialState,
  reducers: {
    selectionSort(state, action) {
      let current_index = action.payload;
      let min_index = current_index;
      for (let j = current_index + 1; j < state.values.length; j++) {
        if (state.values[j] < state.values[min_index]) {
          min_index = j;
        }
      }
      if (min_index !== current_index) {
        let temp = state.values[min_index];
        state.values[min_index] = state.values[current_index];
        state.values[current_index] = temp;
      }
    },
    setSelectionData(state, action) {
      state.values = action.payload;
    },
  },
});

export const { selectionSort, setSelectionData } = selectionSlice.actions;
export default selectionSlice.reducer;
