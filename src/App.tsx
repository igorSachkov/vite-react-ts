import React from 'react';
import {RouterProvider} from 'react-router-dom';
import {rootRouter} from './routes/routes.tsx';


function App() {
  return (
    <RouterProvider router={rootRouter}/>
  );
}

export default App;
