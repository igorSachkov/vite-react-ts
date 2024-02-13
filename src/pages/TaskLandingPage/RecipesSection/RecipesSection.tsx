import style from './RecipesSection.module.scss';
import {IRecipe} from '@models/recipes-models.ts';
import chickenKingImg from '@assets/recipesSection/Mask Group.png';
import burgerKingImg from '@assets/recipesSection/Group 427320335.png';
import {RecipeItem} from '@pages/TaskLandingPage/RecipesSection/RecipeItem/RecipeItem.tsx';
import {Link} from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export const RecipesSection = () => {
  const recipes: IRecipe[] = [
    {
      type: 'Pizza',
      title: 'The Chicken King',
      cookingTime: 24,
      rating: 4.8,
      img: <img src={chickenKingImg} alt='Chicken king'/>,
      key: 0
    },
    {
      type: 'Pizza',
      title: 'The Burger King',
      cookingTime: 24,
      rating: 4.9,
      img: <img src={burgerKingImg} alt='Burger king'/>,
      key: 1
    },
    {
      type: 'Pizza',
      title: 'The Chicken King',
      cookingTime: 24,
      rating: 4.8,
      img: <img src={chickenKingImg} alt='Chicken king'/>,
      key: 2
    },
  ];
  return (
    <section className={`container ${style.sectionContainer}`}>
      <h2 className={`poppins-500 ${style.title}`}>Our Top <span className={'primary-text'}>Recipes</span></h2>

      <div className={style.list}>
        {recipes.map(recipe => <RecipeItem {...recipe}/>)}
      </div>

      <div className={style.linkContainer}>
        <div>
          <Link className={`poppins-500 ${style.link}`} to='/second-task' ><span>View All</span><ArrowForwardIcon className={style.icon}></ArrowForwardIcon></Link>
        </div>

      </div>

    </section>
  );
};
