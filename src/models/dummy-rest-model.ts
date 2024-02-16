export interface IDummyRestModel<T> {
  getAll: (limit?: number) => Promise<T>;
}

export interface IRecipe {
  id: number;
  name: string;
  ingredients: string[];
  instructions: string[];
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  servings: number;
  difficulty: string;
  cuisine: string;
  caloriesPerServing: number;
  tags: string[];
  userId: number;
  image: string;
  rating: number;
  reviewCount: number;
  mealType: string[];
}

export interface IPost {
  id: number;
  title: string;
  body: string;
  userId: number;
  tags: string[];
  reactions: number;
}

interface IUser {
  id: number;
  username: string;
}

export interface IComment {
  id: number;
  body: string;
  postId: number;
  user: IUser;
}


interface IServerAnswer {
  limit: number;
  skip: number;
  total: number;
}

export interface IRecipesServerAnswer extends IServerAnswer {
  recipes: IRecipe[];
}

export interface ICommentsServerAnswer extends IServerAnswer {
  comments: IComment[];
}
