// components/Header.js
import React from "react";
import Link from "next/link";
import styles from "../styles/Header.module.css";
import { Image, Nav } from "react-bootstrap";

                
import { Container, Row, Col } from "react-bootstrap";

const Header = () => {
  return (
    <header className={styles.header}>
      <Container >
      <nav>
        <div  className=" row ">
          <div   xs="auto" className='col-3'>
            <div className={styles.navItem}>

            <button className={styles.menuButton}>☰</button>
            <Link href="/">
             <div className={styles.logo}> <Image src="/images/logo2.webp"  width={100} 
                // specify height
                layout="responsive"  ></Image></div>
            </Link>
                </div>
          </div>
        
          <div className="col-3">
            {/* <nav className="d-flex justify-content-center"> */}
              <Link href="/about" className={`${styles.navItem} ${styles.navLink}`}>
                {/* <a className={`${styles.navItem} ${styles.navLink}`}> */}
                  ABOUT US <span className={styles.arrow}>→</span>
                {/* </a> */}
              </Link>
            </div>
            <div className="col-3">
              <Link href="/about" className={`${styles.navItem} ${styles.navLink}`}>
                {/* <a className={`${styles.navItem} ${styles.navLink}`}> */}
                DIGITAL MUSEUM <span className={styles.arrow}>→</span>
                {/* </a> */}
              </Link> 
            </div>
            <div className="col-3">
              <Link href="/about" className={`${styles.navItem} ${styles.navLink}`}>
                {/* <a className={`${styles.navItem} ${styles.navLink}`}> */}
                GET STARTED <span className={styles.rocket}>🚀</span>
                {/* </a> */}
              </Link>
              
          </div> 
        </div>
        </nav>
      </Container>
    </header>
  );
};

export default Header;

