import styles from '../styles/hero.module.css';
import Image from 'next/image';

const Hero = () => {
  return (
    <>
      <div className={styles.hero__section}>
        <div className={styles.left__side}>
          <p className={styles.my_name}>Hello,My name is</p>
          <h2 className={styles.name}>Iqbal khan</h2>
          <div className={styles.my_title}>
            <div className={styles.my_wrapper}>
              <div className={styles.my_title_items}>Web Developer</div>
              <div className={styles.my_title_items}>Mobile Developer</div>
              <div className={styles.my_title_items}>UI/UX Developer</div>
              <div className={styles.my_title_items}>Wordpress Developer</div>
              <div className={styles.my_title_items}>APis integration</div>
            </div>
          </div>
          <p className={styles.my_description}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta
            labore ut pariatur qui eligendi facilis.{' '}
          </p>
        </div>
        <div className={styles.right__side}>
          <div className={styles.my_image}></div>
          <Image
            src='/images/2.png'
            layout='fill'
            alt='My Image'
            className={styles.my_image_style}
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
