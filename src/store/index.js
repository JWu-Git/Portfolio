import { configureStore } from '@reduxjs/toolkit';

import bubbleReducer from './slices/bubble';
import insertionReducer from './slices/insertion';
import selectionReducer from './slices/selection';

const store = configureStore({
  reducer: {
    bubble: bubbleReducer,
    insertion: insertionReducer,
    selection: selectionReducer,
  },
});
export { store };

export * from './slices/bubble';
export * from './slices/insertion';
export * from './slices/selection';
