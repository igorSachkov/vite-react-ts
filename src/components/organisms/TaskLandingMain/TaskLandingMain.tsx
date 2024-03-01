import {MainText} from '@components/molecules/MainText/MainText.tsx';
import {MainImage} from '@components/molecules/MainImage/MainImage.tsx';


export const TaskLandingMain = () => {
  return (
    <section className={'d-flex container'}>
      <div className={'w-50'}>
        <MainText></MainText>
      </div>
      <div className={'w-50'}>
        <MainImage></MainImage>
      </div>
    </section>
  );
};
