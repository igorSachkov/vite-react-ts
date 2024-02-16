import {configureStore} from '@reduxjs/toolkit';
import recipesReducer from '@redux/slices/recipesSlice.ts';


export default configureStore({
  reducer: {
    recipes: recipesReducer
  }
});
