import {DownloadAppImage} from '@pages/Eatly/TaskLandingPage/DownloadAppSection/DownloadAppImage/DownloadAppImage.tsx';
import {DownloadAppText} from '@pages/Eatly/TaskLandingPage/DownloadAppSection/DownloadAppText/DownloadAppText.tsx';

export const DownloadAppSection = () => {
  return (
    <section className={'d-flex container'}>
      <div style={{width: '50%'}}>
        <DownloadAppImage/>
      </div>
      <div style={{width: '50%'}}>
        <DownloadAppText/>
      </div>
    </section>
  );
};