import {IComment, ICommentsServerAnswer} from '@models/dummy-rest-model.ts';

/** Comments Mock */
export const mockComments: IComment[] = [
  {
    body: 'test_comment_body',
    postId: 4,
    id: 4,
    user: {
      id: 5,
      username: 'test_user_name'
    }
  }
];

export const mockCommentsAnswer: ICommentsServerAnswer = {
  comments: mockComments,
  total: mockComments.length,
  limit: 0,
  skip: 0
};

export const mockCommentsServiceAnswer: Promise<ICommentsServerAnswer> = new Promise(resolve => resolve(mockCommentsAnswer));
