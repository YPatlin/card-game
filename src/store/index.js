import { configureStore } from '@reduxjs/toolkit';
import blocksReducer from './blocks-slice';

export default configureStore({
  reducer: {
    blocks: blocksReducer,
  },
});
