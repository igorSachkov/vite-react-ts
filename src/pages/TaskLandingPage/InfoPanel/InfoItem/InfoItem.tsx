import {IInfoPanelProps} from '@models/info-panel-models.ts';
import style from './InfoItem.module.scss';
import React from 'react';




export const InfoItem = ({title, children}: IInfoPanelProps) => {
  return (
    <div className={style.infoItemContainer}>
      <h4 className={`public-sans-bold ${style.title}`}>{title}</h4>
      {children}
    </div>
  );
};
