import {IDummyRestModel, IPost, IRecipe} from '@models/dummy-rest-model.ts';

class RestService<T> implements IDummyRestModel<T> {
  private readonly restUrl: string;

  constructor(restUrl: string) {
    this.restUrl = restUrl;
  }

  public async getAll(): Promise<T[] | Error> {
    try {
      const response = await fetch(this.restUrl);
      return await response.json();
    } catch (err) {
      const error = err as Error;
      return new Error(error?.message);

    }
  }
}


const restPostService = new RestService<IPost>('https://dummyjson.com/posts');
const restRecipesService = new RestService<IRecipe>('https://dummyjson.com/recipes');
export {restPostService, restRecipesService};
