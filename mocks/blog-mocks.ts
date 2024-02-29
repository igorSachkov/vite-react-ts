import {IBlogServerAnswer, IPost} from '@models/dummy-rest-model.ts';
import {IBlogItemParams} from '@models/blog-models.ts';

/** BlogPage Mock  */

const mockId = 'test_id';
export const mockBlogItemParams: Partial<IBlogItemParams> = {id: mockId};


export const mockBlogItem: IPost = {
  userId: 4,
  id: 4,
  body: 'test_body',
  reactions: 4,
  tags: [],
  title: 'test_title'
};
export const mockBlogGetItemAnswer: Promise<IPost> = new Promise(resolve => resolve(mockBlogItem));

/** Созданире массива моковых объектов IPost */
export function createTheMockBlogArray(count: number): IPost[] {
  const arr: IPost[] = [];
  for (let i = 0; i < count; i++) {
    const item: IPost = {
      userId: i,
      title: `test_title_${i}`,
      body: `body_${i}`,
      tags: [`${i}`],
      reactions: i,
      id: i
    };
    arr.push(item);
  }
  return arr;
}

/** Создание ответа от сервера IBlogServerAnswer */
export function createMockBlogGetAllAnswer(count: number): Promise<IBlogServerAnswer> {
  const mockBlogItems: IPost[] = createTheMockBlogArray(count);
  const mockBlogGetAll: IBlogServerAnswer = {
    posts: mockBlogItems,
    total: mockBlogItems.length,
    skip: 0,
    limit: mockBlogItems.length
  };
  return new Promise<IBlogServerAnswer>(resolve => resolve(mockBlogGetAll));
}
