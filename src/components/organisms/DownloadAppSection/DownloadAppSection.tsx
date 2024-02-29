import {DownloadAppImage} from '@components/molecules/DownloadAppImage/DownloadAppImage.tsx';
import {DownloadAppText} from '@components/molecules/DownloadAppText/DownloadAppText.tsx';


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
