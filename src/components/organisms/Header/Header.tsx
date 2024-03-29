import logo from '@assets/Logo.png';
import style from './Header.module.scss';
import {NavLink} from 'react-router-dom';

export const Header = () => {
  return (
    <header className={`container ${style.header}`}>

      <div className={`d-flex align-items-center ${style.headerContainer}`}>
        <div className='d-flex'>
          <img src={logo} alt="Restaurant logo" className={style.logoIcon}/>
          <div className="d-flex align-items-center">
            <span className={`poppins-400 ${style.logoTitle}`}>eatly</span>
          </div>
        </div>

        <nav className={style.nav}>
          <NavLink className={style.headerLink} to={'/#recipes'} >Recipes</NavLink>
          <NavLink className={style.headerLink} to={'/#faq'} >FAQ</NavLink>
          <NavLink className={style.headerLink} to='blog'>Blog</NavLink>
        </nav>
      </div>

      <div className={style.divider}></div>
    </header>
  );
};
