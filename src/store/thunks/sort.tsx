import { createAsyncThunk } from '@reduxjs/toolkit';
import { setBubbleData, setBubbleIndices, resetIndices } from '../slices/sort';
import { swap } from '../utils/swap';
import { wait } from '../utils/wait';
export const bubbleSortThunk = createAsyncThunk(
  'bubbleSort/start',
  async (arr: number[], thunkAPI) => {
    thunkAPI.dispatch(setBubbleData(arr));
    const length = arr.length;
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i; j++) {
        thunkAPI.dispatch(
          setBubbleIndices({
            first_compare_index: j,
            second_compare_index: j + 1,
          })
        );
        if (arr[j] > arr[j + 1]) {
          arr = swap(arr, j);
          await wait(0);
          thunkAPI.dispatch(setBubbleData(arr));
        }
      }
    }
    thunkAPI.dispatch(resetIndices()); //change all bars back to non-compare color
  }
);
