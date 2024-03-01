import style from './RecipesSection.module.scss';
import {useEffect, useState} from 'react';
import {restRecipesService} from '@services/rest-service.ts';
import {IRecipe} from '@models/dummy-rest-model.ts';
import {useDispatch, useSelector} from 'react-redux';
import {IRecipesSelector, setValue} from '@redux/slices/recipesSlice.ts';
import {RecipeItem} from '@components/molecules/RecipeItem/RecipeItem.tsx';
import defaultReceipImg from '@assets/default-receip.jpg';


export const RecipesSection = () => {
  const recipes: IRecipe[] = useSelector((state: IRecipesSelector) => state.recipes.value);

  // Рецепты как заглушка, на случай ошибки от сервера
  const mockRecipes: Partial<IRecipe>[] = [
    {
      image: defaultReceipImg,
      cuisine: 'Pakistani',
      name: 'Chicken Biryani',
      cookTimeMinutes: 5,
      rating: 5,
      id: 122
    },
    {
      image: defaultReceipImg,
      cuisine: 'Pakistani',
      name: 'Chicken Biryani',
      cookTimeMinutes: 5,
      rating: 5,
      id: 123
    },
    {
      image: defaultReceipImg,
      cuisine: 'Pakistani',
      name: 'Chicken Biryani',
      cookTimeMinutes: 5,
      rating: 5,
      id: 124
    },
  ];
  const dispatch = useDispatch();
  const [isError, setError] = useState<boolean>(false);

  useEffect(() => {
    if (!recipes?.length) {
      restRecipesService.getAll()
        .then(({recipes}) => {
          /** В идеале конечно было бы лучше отсортировать на сервере и забрать с лимитом 3 */
          const sortedRecipe = recipes.sort((a, b) => b.rating - a.rating);
          const bestRecipes = sortedRecipe.splice(0, 3);
          dispatch(setValue(bestRecipes));
          setError(false);
        })
        .catch(((err: string) => {
          console.warn(err, 'err');
          setError(true);
        }));
    }
  }, []);
  return (
    <section className={`container ${style.sectionContainer}`}>
      <h2 id={'recipes'} className={`poppins-500 ${style.title}`}>Our Top <span className={'primary-text'}>Lunch</span></h2>
      {!recipes.length && !isError ?
        <h4 className={style.loading}>Loading...</h4> :
        <div className={style.list}>
          {isError ? mockRecipes.map(recipe => <RecipeItem {...recipe} key={recipe.id}/>) : recipes.map(recipe => <RecipeItem {...recipe} key={recipe.id}/>)}
        </div>}

    </section>
  );
};
