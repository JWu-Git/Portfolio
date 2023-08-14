import { configureStore } from '@reduxjs/toolkit';
import bubbleReducer from './slices/bubble';
import insertionReducer from './slices/insertion';
import selectionReducer from './slices/selection';
import mergeReducer from './slices/merge';

const store = configureStore({
  reducer: {
    bubble: bubbleReducer,
    insertion: insertionReducer,
    merge: mergeReducer,
    selection: selectionReducer,
  },
});
export { store };

export * from './slices/bubble';
export * from './slices/insertion';
export * from './slices/selection';
export * from './slices/merge';
