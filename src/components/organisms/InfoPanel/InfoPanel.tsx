import style from './InfoPanel.module.scss';
import {IInfoPanelProps} from '@models/info-panel-models.ts';
import {InfoItem} from '@components/molecules/InfoItem/InfoItem.tsx';


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
        {infoItems.map((item) => <InfoItem {...item} key={item.title}/>)}
      </div>
      <div className={style.bezier4}></div>
    </div>
  );
};
