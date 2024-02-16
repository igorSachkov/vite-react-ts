import {createSlice, PayloadAction, SliceSelectors} from '@reduxjs/toolkit';
import {IComment} from '@models/dummy-rest-model.ts';

interface ICommentsValue {
  value: IComment[];
}

/** Бардак с типами, разбираюсь */
export const commentsSlice = createSlice<ICommentsValue, {setValue: (state: ICommentsValue, action: PayloadAction<IComment[]>) => void}, 'comments', SliceSelectors<ICommentsValue>>({
  name: 'comments',
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
export const {setValue} = commentsSlice.actions;

export default commentsSlice.reducer;

export interface ICommentsSelector {
  comments: ICommentsValue
}
