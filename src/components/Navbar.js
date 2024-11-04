// src/components/Navbar.js

import React from 'react';
import styles from '../styles/Navbar.module.css';
import Image from 'next/image';
const Navbar = () => {
  return (
    <nav className={styles.navbar}>
        
      
      

      <ul className={styles.navItems}>
      <li className={styles.navItem}><div className={styles.menuIcon}>
        ☰
      </div></li>
        <li className={styles.navItem}>
            <div className={styles.logo}><Image src="/images/logo2.webp"  width={500}  // specify width
            height={300} // specify height
            layout="responsive"  ></Image>
             </div>
        </li>
        <li className={styles.navItem}>
          About Us <span className={styles.dropdownIcon}>▾</span>
        </li>
        <li className={styles.navItem}>
          Digital Museum <span className={styles.dropdownIcon}>▾</span>
        </li>
        <li className={styles.navItem}>
          Get Started <span className={styles.actionIcon}>🔍</span>
        </li>
      </ul>

      
    </nav>
  );
};

export default Navbar;
