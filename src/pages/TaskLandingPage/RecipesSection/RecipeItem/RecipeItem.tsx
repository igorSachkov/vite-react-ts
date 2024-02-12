import style from './RecipeItem.module.scss';
import {IRecipe} from '@models/recipes-models.ts';
import star from '@assets/recipesSection/star.png';

export const RecipeItem = (props: IRecipe) => {
  return (
    <div className={style.recipeItem}>
      {props.img}
      <div className={style.content}>
        <span className={`poppins-600 ${style.type}`}>{props.type}</span>
        <h3 className={`poppins-500 ${style.title}`}>{props.title}</h3>
        <div className={style.cardFooter}>
          <span className={`manrope ${style.time}`}>{props.cookingTime}min</span>
          <div className={`manrope ${style.rating}`}><img src={star} alt="star"/>&nbsp;{props.rating}</div>
        </div>
      </div>

    </div>
  );
};
