import { configureStore } from '@reduxjs/toolkit';
import bubbleReducer from './slices/bubble';

const store = configureStore({
  reducer: {
    bubble: bubbleReducer,
  },
});
export { store };

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
