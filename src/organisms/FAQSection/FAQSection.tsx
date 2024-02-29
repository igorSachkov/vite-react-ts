import style from './FAQSection.module.scss';
import titleImg from '@assets/faqSection/Group 427320339.png';
import {IAccordionProps} from '@models/accordion-models.ts';
import {CustomAccordion} from '@molecules/CustomAccordion/CustomAccordion.tsx';


export const FAQSection = () => {
  const accordions: IAccordionProps[] = [
    {
      title: 'How long does delivery take?',
      key: 0
    },
    {
      title: 'How Does It Work ?',
      key: 1
    },
    {
      title: 'How does your food delivery service work?',
      key: 2
    },
    {
      title: 'What payment options do you accept?',
      key: 3
    },
    {
      title: 'Do you offer discounts or promotions?',
      key: 4
    },
  ];
  return (
    <section>
      <div className={style.titleContainer}>
        <h2 id='faq' className={'poppins-600'}>Frequently Asked<br/> <span className={'primary-text'}>Questions</span>
          <img className={style.titleImg} src={titleImg} alt="title image"/>
        </h2>
      </div>

      <div>
        {accordions.map(item => <CustomAccordion {...item}/>)}
      </div>

    </section>
  );
};
