import {useState} from 'react';
import './App.css';
import Header from '@components/Header/Header.tsx';


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header/>
      <main>some</main>
    </>
  );
}

export default App;
