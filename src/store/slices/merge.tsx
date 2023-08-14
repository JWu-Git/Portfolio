import { createSlice } from '@reduxjs/toolkit';

const initialState = { values: [] };

const mergeSlice = createSlice({
  name: 'merge',
  initialState,
  reducers: {
    mergeSort(state, action) {
      const f = async () => {
        for (let i = 0; i < state.values.length; i++) {
          await new Promise((res) => setTimeout(res, 1000));
          let j = i;

          while (j > 0 && state.values[j] < state.values[j - 1]) {
            let temp = state.values[j - 1];
            state.values[j - 1] = state.values[j];
            state.values[j] = temp;
            j = j - 1;
          }
        }
      };

      f();
    },
    setMergeData(state, action) {
      state.values = action.payload;
    },
  },
});

export const { mergeSort, setMergeData } = mergeSlice.actions;
export default mergeSlice.reducer;
