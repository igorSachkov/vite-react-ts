import {ReactNode} from 'react';
import {IIterableProps} from '@models/app-models.ts';

export interface IRecipe extends IIterableProps {
  type: string;
  title: string;
  cookingTime: number;
  rating: number;
  img: ReactNode;
}
