import { configureStore } from '@reduxjs/toolkit';

import bubbleReducer from './slices/bubble';
import insertionReducer from './slices/insertion';

const store = configureStore({
  reducer: {
    bubble: bubbleReducer,
    insertion: insertionReducer,
  },
});
export { store };

export * from './slices/bubble';
export * from './slices/insertion';
