import style from './CustomAccrodion.module.scss';
import {useState} from 'react';
import {IAccordionProps} from '@models/accordion-models.ts';

export const CustomAccordion = ({title}: IAccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={style.accordionContainer}>
      <div className={style.title}>
        <h5 className={'poppins-500'}>{title}</h5>
        <button onClick={() => setIsOpen(!isOpen)}><div>{isOpen ? '−' : '+'}</div></button>
      </div>

      {isOpen && <div className={`poppins-400 ${style.content}`}>You Can Get Information By Contacting Our Support Team Have 24/7 Service.<br/>What’s The Difference Between Free And Paid Plan ?</div>}

    </div>
  );
};
