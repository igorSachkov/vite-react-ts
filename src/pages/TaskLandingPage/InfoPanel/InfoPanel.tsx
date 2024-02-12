import style from './InfoPanel.module.scss';
import {InfoItem} from '@pages/TaskLandingPage/InfoPanel/InfoItem/InfoItem.tsx';
import {IInfoPanelProps} from '@models/info-panel-models.ts';


export const InfoPanel = () => {
  const infoItems: IInfoPanelProps[] = [
    {
      title: '10K+',
      children: <><p className={style.text}>Satisfied Costumers</p><p className={style.text}>All Great Over The World</p></>
    },
    {
      title: '4M',
      children: <><p className={style.text}>Healthy Dishes Sold</p><p className={style.text}>Including Milk Shakes Smooth</p></>
    },
    {
      title: '99.99%',
      children: <><p className={style.text}>Reliable Customer Support</p><p className={style.text}>We Provide Great Experiences</p></>
    },
  ];
  return (
    <div className={style.infoPanel}>
      <div className={`${style.infoItemContainer}`}>
        {infoItems.map(({title, children}) => <InfoItem title={title} children={children} key={title}/>)}
      </div>
      <div className={style.bezier4}></div>
    </div>
  );
};
