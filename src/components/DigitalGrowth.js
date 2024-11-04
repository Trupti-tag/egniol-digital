// components/DigitalGrowth.js
import styles from "../styles/DigitalGrowth.module.css"
import Image from "next/image";
export default function DigitalGrowth() {
  return (
    <div className="container">
        <div className="row pd-0">
            <div className="col-6">
                <div className={styles.container1}>
                    <div className={styles.leftSection}>
                        <div className={styles.title}>
                            {/* <h1> */}
                                Everything You Need to Grow Digitally
                            {/* </h1> */}
                        </div>
                        <div className={styles.text}>Some of the way we can support you</div>
                    </div>
                </div>    
            </div>

            <div className="col-6"> 
                <div className="row ">
                    <div className={styles.container2}>
                        <div className={styles.row1}><Image src="/images/settings.png"  width={32} 
                            height={32}  layout="responsive"  ></Image></div>
                        <div className={styles.rightSection}>
                            <div className="ml-2"><h2 className="ml-2">Range of Services</h2></div>
                            <div className={styles.p}><p>"We offer a wide range of services tailored to help your business succeed online. Whether you're just getting started or looking to take your digital presence to the next level, we've got you covered."</p></div>
                        </div>
                        <div className={styles.rightSection}>
                            <div className={styles.p}><p>"Below are the key services we offer. click on any services to learn more about how we can tailor it to fit your business needs. Once you've found what you're looking for, let's chat about how we can make it happen for you."</p></div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        {/* <div className={`${styles.line} ${styles.line-25}`}></div>
        <div className={`${styles.line} ${styles.line-50}`}></div> */}
    </div>


    
  );
}
