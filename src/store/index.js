import { configureStore } from '@reduxjs/toolkit';

import bubbleReducer from './slices/bubble';
import { bubbleSort, setBubbleData } from './slices/bubble';

const store = configureStore({ reducer: bubbleReducer });
export { store, bubbleSort, setBubbleData };
