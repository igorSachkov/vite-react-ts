import {DownloadAppImage} from '@components/molecules/DownloadAppImage/DownloadAppImage.tsx';
import {DownloadAppText} from '@components/molecules/DownloadAppText/DownloadAppText.tsx';


export const DownloadAppSection = () => {
  return (
    <section className={'d-flex container'}>
      <div className={'w-50'}>
        <DownloadAppImage/>
      </div>
      <div className={'w-50'}>
        <DownloadAppText/>
      </div>
    </section>
  );
};
