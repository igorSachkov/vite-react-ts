import style from './RecipesSection.module.scss';
import {useEffect} from 'react';
import {restRecipesService} from '@services/rest-service.ts';
import {IRecipe} from '@models/dummy-rest-model.ts';
import {useDispatch, useSelector} from 'react-redux';
import {IRecipesSelector, setValue} from '@redux/slices/recipesSlice.ts';
import {RecipeItem} from '@components/molecules/RecipeItem/RecipeItem.tsx';


export const RecipesSection = () => {
  const recipes: IRecipe[] = useSelector((state: IRecipesSelector) => state.recipes.value);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!recipes?.length) {
      restRecipesService.getAll()
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
      <h2 id={'recipes'} className={`poppins-500 ${style.title}`}>Our Top <span className={'primary-text'}>Lunch</span></h2>
      {!recipes.length ?
        <h4 style={{textAlign: 'center', fontSize: '3rem'}}>Loading...</h4> :
        <div className={style.list}>
          {recipes.map(recipe => <RecipeItem {...recipe} key={recipe.id}/>)}
        </div>}

    </section>
  );
};
