import {
  IComment,
  ICommentsServerAnswer,
  IDummyRestModel, IPost,
  IBlogServerAnswer, IRecipe,
  IRecipesServerAnswer, IUser, IUsersServerAnswer, IPostComment
} from '@models/dummy-rest-model.ts';


class RestService<T, P> implements IDummyRestModel<T, P> {
  protected readonly restUrl: string;

  constructor(restUrl: string) {
    this.restUrl = restUrl;
  }

  public async getAll(limit?: number, skip?: number): Promise<T> {
    const isHaveLimit = typeof limit === 'number';
    const isHaveSkip = typeof skip === 'number';
    const requestUrl = this.restUrl + '?';
    try {
      let finalRequest = requestUrl;
      if (isHaveLimit) {
        finalRequest += `limit=${limit}&`;
      }
      if (isHaveSkip) {
        finalRequest += `skip=${skip}&`;
      }
      const response = await fetch(finalRequest);
      return await response.json();
    } catch (err) {
      const error = err as Error;
      throw new Error(error?.message);

    }
  }

  public async getItem(item: string | number, select: string[] = []): Promise<P> {
    let requestUrl = this.restUrl + `/${item}`;
    try {
      if (Array.isArray(select) && select.length) {
        requestUrl += '?select=';
        select.forEach(key => requestUrl += `${key},`);
      }
      const response = await fetch(requestUrl);
      return await response.json();
    } catch (err) {
      const error = err as Error;
      throw new Error(error?.message);

    }
  }
}

class CommentsRestService<T, P> extends RestService<T, P> {
  constructor(restUrl: string) {
    super(restUrl);
  }

  public async getAllCommentsByPostId(postId: string | number): Promise<T> {
    const requestUrl = this.restUrl + `/post/${postId}`;
    try {
      const response = await fetch(requestUrl);
      return await response.json();
    } catch (err) {
      const error = err as Error;
      throw new Error(error?.message);

    }
  }

  public async addNewComment(item: IPostComment): Promise<P> {
    const requestUrl = this.restUrl + '/add';
    try {
      const response = await fetch(requestUrl, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(item)
      });
      return await response.json();
    } catch (err) {
      const error = err as Error;
      throw new Error(error?.message);

    }
  }
}


const restBlogService = new RestService<IBlogServerAnswer, IPost>('https://dummyjson.com/posts');
const restRecipesService = new RestService<IRecipesServerAnswer, IRecipe>('https://dummyjson.com/recipes/meal-type/lunch');
const restCommentsService = new CommentsRestService<ICommentsServerAnswer, IComment>('https://dummyjson.com/comments');
const restUserService = new RestService<IUsersServerAnswer, IUser>('https://dummyjson.com/users');
export {restBlogService, restRecipesService, restCommentsService, restUserService};
