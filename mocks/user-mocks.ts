import {IUser} from '@models/dummy-rest-model.ts';

/** User (partial, for blog) Mock */
export const mockUserForBlog = {
  firstName: 'test_first_name',
  id: 4,
  image: 'test_img_url',
  lastName: 'test_last_name'
} as IUser;

export const mockUserServiceAnswer: Promise<IUser> = new Promise(resolve => resolve(mockUserForBlog));



