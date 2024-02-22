import {IComment, IUser} from '@models/dummy-rest-model.ts';

export interface IBlogItemParams {
  id: string;
}

export type UserForBlog = Pick<IUser, 'firstName' | 'lastName' | 'image' | 'id'>;


export interface IAddComment {
  addComment: (comment: IComment) => void;
}
