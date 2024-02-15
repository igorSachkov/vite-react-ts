import style from './RecipesSection.module.scss';
import {RecipeItem} from '@pages/Eatly/TaskLandingPage/RecipesSection/RecipeItem/RecipeItem.tsx';
import {Link} from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {useEffect, useState} from 'react';
import {restRecipesService} from '@services/rest-service.ts';
import {IRecipe} from '@models/dummy-rest-model.ts';
import {useDispatch, useSelector} from 'react-redux';
import {IRecipesSelector, setValue} from '@store/recipesSlice.ts';

export const RecipesSection = () => {
  const recipes: IRecipe[] = useSelector((state: IRecipesSelector) => state.recipes.value);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!recipes?.length) {
      restRecipesService.getAll(0)
        .then(({recipes}) => {
          /** В идеале конечно было бы лучше отсортировать на сервере и забрать с лимитом 3 */
          const sortedRecipe = recipes.sort((a, b) => b.rating - a.rating);
          const bestRecipes = sortedRecipe.splice(0, 3);
          dispatch(setValue(bestRecipes));
        })
        .catch(((err: string) => {
          console.warn(err, 'err');
        }));
    }
  }, []);
  return (
    <section className={`container ${style.sectionContainer}`}>
      <h2 id={'recipes'} className={`poppins-500 ${style.title}`}>Our Top <span
        className={'primary-text'}>Recipes</span></h2>

      <div className={style.list}>
        {recipes.map(recipe => <RecipeItem {...recipe} key={recipe.id}/>)}
      </div>

      <div className={style.linkContainer}>
        <div>
          <Link className={`poppins-500 ${style.link}`} to='/second-task'><span>View All</span><ArrowForwardIcon
            className={style.icon}></ArrowForwardIcon></Link>
        </div>

      </div>

    </section>
  );
};
