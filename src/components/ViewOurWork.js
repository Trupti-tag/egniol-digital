import React from 'react'
import { Button } from 'react-bootstrap'
import styles from '../styles/Common.module.css'

function ViewOurWork() {
  return (
    <div className='container my-4 '>
        <div className='row  my-5'>
            <div className='col-3'></div>
            <div className='col-3'></div>
            <div className='col-3'></div>
            <div className='col-3 '>
                <div className={styles.colWork} >
                <button className={styles.button}>View Our Work <span> </span></button></div>
            </div>
        </div>
    </div>

  //   <div className={styles.container}>
  //   <div className={styles.col-3}>
  //     <button className={styles.button}>View Our Works</button>
  //   </div>
  // </div>
  )
}

export default ViewOurWork