import {createSlice, PayloadAction, SliceSelectors} from '@reduxjs/toolkit';
import {IRecipe} from '@models/dummy-rest-model.ts';

interface IRecipesValue {
  value: IRecipe[];
}

/** Бардак с типами, разбираюсь */
export const recipesSlice = createSlice<IRecipesValue, {setValue: (state: IRecipesValue, action: PayloadAction<IRecipe[]>) => void}, 'recipes', SliceSelectors<IRecipesValue>>({
  name: 'recipes',
  initialState: {
    value: []
  },
  reducers: {
    setValue: (state, action) => {
      state.value = action.payload;
    }
  }
});

// Action creators are generated for each case reducer function
export const {setValue} = recipesSlice.actions;

export default recipesSlice.reducer;

export interface IRecipesSelector {
  recipes: IRecipesValue
}
