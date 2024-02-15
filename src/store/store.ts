import {configureStore} from '@reduxjs/toolkit';
import recipesReducer from './recipesSlice.ts';


export default configureStore({
  reducer: {
    recipes: recipesReducer
  }
});
