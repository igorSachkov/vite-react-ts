import style from './ErrorPage.module.scss';
import {LandingButton} from '@components/molecules/LandingButton/LandingButton.tsx';
import {useNavigate} from 'react-router-dom';


export const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div className={'container'}>
      <h2 className={`poppins-600 ${style.header}`}>Page not <span className={'primary-text'}>found!</span></h2>
      <LandingButton isPrimary={true} onClick={() => navigate('/')}>To main</LandingButton>
    </div>
  );
};
