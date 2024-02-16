import {configureStore} from '@reduxjs/toolkit';
import recipesReducer from '@redux/slices/recipesSlice.ts';
import commentsReducer from '@redux/slices/commentsSlice.ts';


export default configureStore({
  reducer: {
    recipes: recipesReducer,
    comments: commentsReducer
  }
});
