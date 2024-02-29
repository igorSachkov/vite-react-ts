import style from './TariffConditions.module.scss';
import {ITariff} from '@models/purchase-models.ts';
import React from 'react';


function getProgressStyle(progress: number): React.CSSProperties[] {
  let progressStyle: React.CSSProperties;
  let progressDoneStyle: React.CSSProperties;
  if (progress < 30) {
    progressStyle = {backgroundColor: 'red'};
    progressDoneStyle = {backgroundColor: 'red', width: progress + '%'};
  } else if (progress < 70) {
    progressStyle = {backgroundColor: '#FBAD18'};
    progressDoneStyle = {backgroundColor: '#FBAD18', width: progress + '%'};
  } else {
    progressStyle = {backgroundColor: '#6C5FBC'};
    progressDoneStyle = {backgroundColor: '#6C5FBC', width: progress + '%'};
  }

  return [progressStyle, progressDoneStyle];
}


export const TariffConditions = ({label, text, price, icon, progress, iconBG}: ITariff) => {
  const [progressStyle, progressDoneStyle] = getProgressStyle(progress);
  return (
    <div className={`manrope ${style.tariffContainer}`}>
      <div className={style.mainInfo}>
        <div className={style.imgContainer}>
          <img src={icon} alt="icon" style={{backgroundColor: iconBG}}/>
        </div>
        <div className={style.infoContainer}>
          <h4>{label}</h4>
          <p>{text}</p>
        </div>
        <div className={style.priceContainer}>
          <span>&#36;{price}</span>
        </div>

      </div>
      <div className={style.progressContainer}>
        <div className={style.progress} style={progressStyle}></div>
        <div className={style.progressDone} style={progressDoneStyle}></div>
      </div>

    </div>

  );
};
