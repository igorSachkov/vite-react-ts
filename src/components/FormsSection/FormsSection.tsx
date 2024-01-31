import classes from './FormsSection.module.scss';
import {useState} from 'react';

export const FormsSection = () => {
  const [value, setValue] = useState('');
  return (
    <>
      <h3>Forms section is work</h3>
      <form>
        <label htmlFor="example">Example</label>
        <input id="example" type="text" style={{width: '100%'}} value={value} onChange={(event) => setValue(event.target.value)}/>
      </form>
    </>
  );
};
