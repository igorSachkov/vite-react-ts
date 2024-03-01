export interface IDummyRestModel<T, P> {
  getAll: (limit?: number, skip?: number) => Promise<T>;
  getItem: (item: string | number, select?: string[]) => Promise<P>;
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
  isLoading: boolean;
}

export interface IComment {
  id: number;
  body: string;
  postId: number;
  user: Pick<IUser, 'id' | 'username'>;
}

export interface IPostComment {
  body: string,
  postId: number,
  userId: number,
}

// any - т.к. не вижу смысла глубоко углубляться в данный интерфейс
export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  username: string;
  password: string;
  birthDate: string;
  image: string;
  height: number;
  weight: number;
  eyeColor: string;
  hair: {
    [key: string]: string
  };
  domain: string;
  ip: string;
  address: {
    [key: string]: string | number | any
  };
  macAddress: string;
  university: string;
  bank: {
    [key: string]: string | number
  };
  company: {
    [key: string]: string | number | any
  };
  ein: string;
  ssn: string;
  userAgent: string;
}


interface IServerAnswer {
  limit: number;
  skip: number;
  total: number;
}

export interface IRecipesServerAnswer extends IServerAnswer {
  recipes: IRecipe[];
}

export interface IBlogServerAnswer extends IServerAnswer {
  posts: IPost[];
}

export interface ICommentsServerAnswer extends IServerAnswer {
  comments: IComment[];
}

export interface IUsersServerAnswer extends IServerAnswer {
  users: IUser[];
}
