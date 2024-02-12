import {TaskLandingHeader} from '@pages/TaskLandingPage/TaskLandingHeader/TaskLandingHeader.tsx';
import {TaskLandingMain} from '@pages/TaskLandingPage/TaskLandingMain/TaskLandingMain.tsx';
import {InfoPanel} from '@pages/TaskLandingPage/InfoPanel/InfoPanel.tsx';
import {DownloadAppSection} from '@pages/TaskLandingPage/DownloadAppSection/DownloadAppSection.tsx';


export const TaskLandingPage = () => {
  return (
    <>
      <TaskLandingHeader/>

      <main>
        <TaskLandingMain/>
        <div style={{marginTop: '6.5rem'}}>
          <InfoPanel/>
        </div>
        <div>
          <DownloadAppSection/>
        </div>
      </main>
    </>
  );
};
