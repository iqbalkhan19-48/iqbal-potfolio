import Image from 'next/image';
import styles from '../styles/about.module.css';

const About = () => {
  return (
    <>
      <div className={styles.about}>
        <div className={styles.about_left}>
          <div className={(styles.card, styles.card_image)}></div>
          <div className={styles.card}>
            <Image
              src='/images/2.png'
              layout='fill'
              alt='My Image'
              className={styles.card_image_style}
            />
          </div>
        </div>
        <div className={styles.about_right}> </div>
      </div>
    </>
  );
};

export default About;
