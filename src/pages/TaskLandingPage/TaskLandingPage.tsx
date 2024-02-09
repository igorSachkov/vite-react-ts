import {TaskLandingHeader} from '@pages/TaskLandingPage/TaskLandingHeader/TaskLandingHeader.tsx';
import {TaskLandingMain} from '@pages/TaskLandingPage/TaskLandingMain/TaskLandingMain.tsx';


export const TaskLandingPage = () => {
  return (
    <>
      <TaskLandingHeader/>

      <main>
        <TaskLandingMain/>
      </main>
    </>
  );
};
