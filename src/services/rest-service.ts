import {
  ICommentsServerAnswer,
  IDummyRestModel,
  IPostsServerAnswer,
  IRecipesServerAnswer
} from '@models/dummy-rest-model.ts';
import {CacheForRest} from '@services/cache-service.ts';

class RestService<T> implements IDummyRestModel<T> {
  private readonly restUrl: string;

  constructor(restUrl: string) {
    this.restUrl = restUrl + '?';
  }

  public async getAll(limit?: number, skip?: number): Promise<T> {
    try {
      let finalRequest = this.restUrl;
      if (typeof limit === 'number') {
        finalRequest += `limit=${limit}&`;
      }
      if (typeof skip === 'number') {
        finalRequest += `skip=${skip}&`;
      }
      const response = await fetch(finalRequest);
      return await response.json();
    } catch (err) {
      const error = err as Error;
      throw new Error(error?.message);

    }
  }
}


const restPostService = new RestService<IPostsServerAnswer>('https://dummyjson.com/posts');
const cachedRestPostService = new CacheForRest(restPostService);
const restRecipesService = new RestService<IRecipesServerAnswer>('https://dummyjson.com/recipes/meal-type/lunch');
const restCommentsService = new RestService<ICommentsServerAnswer>('https://dummyjson.com/comments');
export {cachedRestPostService, restRecipesService, restCommentsService};
