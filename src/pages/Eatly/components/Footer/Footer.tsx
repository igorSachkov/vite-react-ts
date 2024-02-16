import style from './Footer.module.scss';
import logo from '@assets/Logo.png';
import {Link, NavLink} from 'react-router-dom';
import instagramLogo from '@assets/footer/instagramLogo.png';
import inLogo from '@assets/footer/inLogo.png';
import facebookLogo from '@assets/footer/facebookLogo.png';
import twitterLogo from '@assets/footer/twitterLogo.png';


export const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={'container'}>
        <div className={style.topFooter}>
          <div className='d-flex'>
            <img src={logo} alt="Restaurant logo" className={style.logoIcon}/>
            <div className="d-flex align-items-center">
              <span className={`poppins-400 ${style.logoTitle}`}>eatly</span>
            </div>
          </div>
          <div className={style.linkList}>
            <NavLink className={style.headerLink} to={'/second-task#recipes'} >Recipes</NavLink>
            <NavLink className={style.headerLink} to={'/second-task#faq'} >FAQ</NavLink>
            <NavLink className={style.headerLink} to='blog'>Blog</NavLink>
          </div>
        </div>

        <div className={style.divider}></div>

        <div className={style.bottomFooter}>
          <div>
            <span>© 2023 EATLY All Rights Reserved.</span>
          </div>
          <div className={style.socialNetworks}>
            <Link to='/second-task'><img src={instagramLogo} alt="instagram logo"/></Link>
            <Link to='/second-task'><img src={inLogo} alt="in logo"/></Link>
            <Link to='/second-task'><img src={facebookLogo} alt="facebook logo"/></Link>
            <Link to='/second-task'><img src={twitterLogo} alt="twitter logo"/></Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
