import React from 'react';
import {RouterProvider} from 'react-router-dom';
import {rootRouter} from './routes/routes.tsx';


export default function App() {
  return (<RouterProvider router={rootRouter}/>);
}
