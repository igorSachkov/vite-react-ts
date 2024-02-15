import {IDummyRestModel, IPost, IRecipesServerAnswer} from '@models/dummy-rest-model.ts';

class RestService<T> implements IDummyRestModel<T> {
  private readonly restUrl: string;

  constructor(restUrl: string) {
    this.restUrl = restUrl;
  }

  public async getAll(limit?: number): Promise<T> {
    try {
      let finalRequest = this.restUrl;
      if (typeof limit === 'number') {
        finalRequest += `?limit=${limit}`;
      }
      const response = await fetch(finalRequest);
      return await response.json();
    } catch (err) {
      const error = err as Error;
      throw new Error(error?.message);

    }
  }
}


const restPostService = new RestService<IPost>('https://dummyjson.com/posts');
const restRecipesService = new RestService<IRecipesServerAnswer>('https://dummyjson.com/recipes');
export {restPostService, restRecipesService};
