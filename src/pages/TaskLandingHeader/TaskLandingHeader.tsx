import logo from '@shared/images/Logo.png';
import style from './TaskLandingHeader.module.scss';
import {NavLink} from 'react-router-dom';

export const TaskLandingHeader = () => {
  return (
    <header className={`container ${style.header}`}>

      <div className={`d-flex align-items-center ${style.headerContainer}`}>
        <div className='d-flex'>
          <img src={logo} alt="Restaurant logo" className={style.logoIcon}/>
          <div className="d-flex align-items-center">
            <span className={style.logoTitle}>eatly</span>
          </div>
        </div>

        <nav className={style.nav}>
          <NavLink className={style.headerLink} to=''>Recipes</NavLink>
          <NavLink className={style.headerLink} to=''>Blog</NavLink>
        </nav>
      </div>

      <div className={style.divider}></div>
    </header>
  );
};
