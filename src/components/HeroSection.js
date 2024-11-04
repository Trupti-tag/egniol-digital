import React from 'react'
import Image from 'next/image'
import styles from "../styles/HeroSection.module.css"

function HeroSection() {
  return (
    <div className="container-fluid" >
        <div className="container">
            <div className={styles.container1}></div>
        </div>
        <div className={styles.container}>
            <div className={styles.carousel}>
                <img src="/images/Bhutan.jpg" alt="Image 1" className={styles.image} />
                <img src="/images/canada.jpg" alt="Image 2" className={styles.image} />
                <img src="/images/kenya.jpg" alt="Image 3" className={styles.image} />
                <img src="/images/Bhutan.jpg" alt="Image 1" className={styles.image} />
                <img src="/images/canada.jpg" alt="Image 2" className={styles.image} />
                <img src="/images/kenya.jpg" alt="Image 3" className={styles.image} />
                <img src="/images/Bhutan.jpg" alt="Image 1" className={styles.image} />
                <img src="/images/canada.jpg" alt="Image 2" className={styles.image} />
                <img src="/images/kenya.jpg" alt="Image 3" className={styles.image} />
                <div className={styles.leftBlur}></div>
                <div className={styles.rightBlur}></div>
            </div>
        </div>
        <div className={styles.container}>
            <div className={styles.carousel}>
                <img src="/images/Bhutan.jpg" alt="Image 1" className={styles.image} />
                <img src="/images/canada.jpg" alt="Image 2" className={styles.image} />
                <img src="/images/kenya.jpg" alt="Image 3" className={styles.image} />
                <img src="/images/Bhutan.jpg" alt="Image 1" className={styles.image} />
                <img src="/images/canada.jpg" alt="Image 2" className={styles.image} />
                <img src="/images/kenya.jpg" alt="Image 3" className={styles.image} />
                <img src="/images/Bhutan.jpg" alt="Image 1" className={styles.image} />
                <img src="/images/canada.jpg" alt="Image 2" className={styles.image} />
                <img src="/images/kenya.jpg" alt="Image 3" className={styles.image} />
                <div className={styles.leftBlur}></div>
                <div className={styles.rightBlur}></div>
            </div>
        </div>
        {/* <div className={styles.imageContent}>
            <div className={styles.miniContainer}>
                Blueprint
            </div>
        </div> */}
        

    </div>
  )
}

export default HeroSection