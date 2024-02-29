import {MainText} from '@molecules/MainText/MainText.tsx';
import {MainImage} from '@molecules/MainImage/MainImage.tsx';


export const TaskLandingMain = () => {
  return (
    <section className={'d-flex container'}>
      <div style={{width: '50%'}}>
        <MainText></MainText>
      </div>
      <div style={{width: '50%'}}>
        <MainImage></MainImage>
      </div>
    </section>
  );
};
