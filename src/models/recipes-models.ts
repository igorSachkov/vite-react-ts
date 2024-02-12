import {ReactNode} from 'react';

export interface IRecipe {
  type: string;
  title: string;
  cookingTime: number;
  rating: number;
  img: ReactNode;
  key: number;
}
