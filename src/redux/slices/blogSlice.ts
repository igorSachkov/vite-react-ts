import {createSlice, PayloadAction, SliceSelectors} from '@reduxjs/toolkit';
import {IPost} from '@models/dummy-rest-model.ts';

interface IBlogValue {
  value: IPost[];
}

/** Бардак с типами, разбираюсь */
export const blogSlice = createSlice<IBlogValue, {setValue: (state: IBlogValue, action: PayloadAction<IPost[]>) => void}, 'blog', SliceSelectors<IBlogValue>>({
  name: 'blog',
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
export const {setValue} = blogSlice.actions;

export default blogSlice.reducer;

export interface IBlogSelector {
  posts: IBlogValue
}
