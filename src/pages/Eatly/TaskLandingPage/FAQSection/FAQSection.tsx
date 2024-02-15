import style from './FAQSection.module.scss';
import titleImg from '@assets/faqSection/Group 427320339.png';


export const FAQSection = () => {
  return (
    <section className={style.sectionContainer}>
      <h2 className={'poppins-600'}>Frequently Asked<br/> <span className={'primary-text'}>Questions</span>
        <img className={style.titleImg} src={titleImg} alt="title image"/>
      </h2>

    </section>
  );
};
