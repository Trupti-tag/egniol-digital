import React from 'react'
import styles from "../styles/UniueBlueprint.module.css"

function UniqueBlueprint() {
  return (
   <div className='container'>
    <div className='row'>
      <div className={styles.blueprintsection}>
        {/* <div className={styles.blueprintcontent}> */}
          <div className={styles.title}>
           What's Your
          </div>
          <div className={styles.highlight}>Unique Blueprint?</div>
        {/* </div> */}
    </div>
          
    </div>
    <div className='row'>
      <div className={styles.blueprintcontent}>
        
            <div className={styles.text}>
              "At Egniol, we understand that every business is unique. That's why we don't offer cookie-cutter strategies. Instead, we craft a <b>personalized digital blueprint</b> - a plan that's designed just for your business. We take into account your goals, your market, and your specific challenges to create a strategy that will drive sustainable growth. Whether it's growing your online presence, generating leads, or boosting engagement, we build a <b>blueprint</b> that fits you."</div>
          </div>
      </div>
   </div>
  )
}

export default UniqueBlueprint