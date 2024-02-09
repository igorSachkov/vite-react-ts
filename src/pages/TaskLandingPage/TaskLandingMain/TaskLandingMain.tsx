import {MainText} from '@pages/TaskLandingPage/TaskLandingMain/MainText/MainText.tsx';
import {MainImage} from '@pages/TaskLandingPage/TaskLandingMain/MainImage/MainImage.tsx';


export const TaskLandingMain = () => {
  return (
    <section className={'d-flex container-lg'}>
      <div style={{width: '50%'}}>
        <MainText></MainText>
      </div>
      <div style={{width: '50%'}}>
        <MainImage></MainImage>
      </div>
    </section>
  );
};
