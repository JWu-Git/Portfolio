import { configureStore } from '@reduxjs/toolkit';
import bubbleReducer from './slices/sort';

const store = configureStore({
  reducer: {
    bubble: bubbleReducer,
  },
});
export { store };

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
