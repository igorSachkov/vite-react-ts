import style from './RecipeItem.module.scss';
import star from '@assets/recipesSection/star.png';
import {IRecipe} from '@models/dummy-rest-model.ts';

export const RecipeItem = (props: IRecipe) => {
  return (
    <div className={style.recipeItem}>
      <img className={style.recipeImage} src={props.image} alt="recipe image"/>
      <div className={style.content}>
        <span className={`poppins-600 ${style.type}`}>{props.cuisine}</span>
        <h3 className={`poppins-500 ${style.title}`}>{props.name}</h3>
        <div className={style.cardFooter}>
          <span className={`manrope ${style.time}`}>{props.cookTimeMinutes}min</span>
          <div className={`manrope ${style.rating}`}><img src={star} alt="star"/>&nbsp;{props.rating}</div>
        </div>
      </div>

    </div>
  );
};
