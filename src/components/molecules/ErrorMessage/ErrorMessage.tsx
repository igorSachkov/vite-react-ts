import style from './ErrorMessage.module.scss';

export const ErrorMessage = () => {
  return (
    <div className={style.errorContainer}><h2>An error occurred, please try again</h2></div>
  );
};
