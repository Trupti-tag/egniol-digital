import styles from '../styles/ImageCarousel.module.css';

export default function ImageCarousel() {
  return (
    <div className={styles.container}>
      <div className={styles.carousel}>
        <img src="/images/Bhutan.jpg" alt="Image 1" className={styles.image} />
        <img src="/images/canada.jpg" alt="Image 2" className={styles.image} />
        <img src="/images/kenya.jpg" alt="Image 3" className={styles.image} />
        <div className={styles.leftBlur}></div>
        <div className={styles.rightBlur}></div>
      </div>
    </div>
  );
}
