// components/Services.js

import styles from "../styles/Services.module.css";
import { FaBullhorn, FaSearch  } from 'react-icons/fa';
import { SlRefresh } from "react-icons/sl";
import { CiBullhorn,CiSaveUp2,CiInstagram, CiMail  } from "react-icons/ci";
import { RiTwitterXLine } from "react-icons/ri";
import { FaWhatsapp,FaInstagram } from "react-icons/fa";
const services = [
  {
    title: "Digital Marketing",
    description: "Lorem ipsum If you have a longer pipeline of jobs to be done, or perhaps you just want more regular design support then go for a monthly subscription and we’ll establish a backlog of tasks, set up a regular cadence and then get cracking!",
    price: "₹20,000",
    icon: <CiBullhorn  />,
  },
  {
    title: "Search Engine Optimization",
    description: "Lorem ipsum If you have a longer pipeline of jobs to be done, or perhaps you just want more regular design support then go for a monthly subscription and we’ll establish a backlog of tasks, set up a regular cadence and then get cracking!",
    price: "₹5,000",
    icon: <CiSaveUp2    />,
  },
];

export default function Services() {
  return (

    <div className="container">
    <div className={styles.containerMain}></div>
        <div className="row ">
            <div className="col-3  ">
                <div className={styles.row1}>
                    <SlRefresh  className={styles.icon}/>
                    {/* <Image src="/images/settings.png"  width={32} 
                            height={32}  layout="responsive"  ></Image> */}
                </div>
            </div>
            <div className="col-9">
                <div className={styles.servicesSection}>
                    <h2 className={styles.title}>Our Services</h2>
                </div>
            </div>
        </div>
        <div className="row">
            {services.map((service,index) => (
                <div className="col-5">
                <div key={index} className={styles.serviceCard}>
                    <div className={styles.iconCard}>{service.icon}</div>
                    <h3 className={styles.serviceTitle}>{service.title} </h3>
                    <p className={styles.description}>{service.description}</p>
                    <div className={styles.price}>{service.price}</div>
                    {/* <button className={styles.applyButton}>APPLY</button> */}
                </div>
                <div ><button className={styles.applyButton} >APPLY</button></div>
                </div>
            ))}
            
            <div className="col-2">
                
                <div className={styles.sideButtons}>View all</div>
                    <div className={styles.socialIcons}>
                    <button className={styles.socialButton}><CiInstagram  height={80} width={80}/></button>
                    <button className={styles.socialButton}><FaWhatsapp/></button>
                    <button className={styles.socialButton}><CiMail/> </button>
                    <button className={styles.socialButton}><RiTwitterXLine/> </button>
                    </div>
            </div>
            {/* </div> */}
        </div>
        
    </div>

  );
}
