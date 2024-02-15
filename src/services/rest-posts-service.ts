class RestPostsService {
  private restUrl = 'https://dummyjson.com/posts';

  public async getAllPosts(): Promise<any> {
    try {
      const response = await fetch(this.restUrl);
      return await response.json();
    } catch (err) {
      const error = err as Error;
      return new Error(error?.message);

    }
  }
}


const restPostService = new RestPostsService();
export {restPostService};
