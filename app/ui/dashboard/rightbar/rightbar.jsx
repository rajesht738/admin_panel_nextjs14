import React from 'react'
import styles from './rightbar.module.css';
import Image from 'next/image';
import { MdPlayCircleFilled } from 'react-icons/md';

function Rightbar() {
  return (
    <div className={styles.container}>
    <div className={styles.item}>
      <div className={styles.bgContainer}>
         <Image src="/avator.png" alt='' fill className={styles.bg}/>
      </div>
      <div className={styles.texts}>
           <span className={styles.notification}>Available Now</span>
           <h3 className={styles.title}>
            how to use the new version of the admin dashboard?
           </h3>
           <span className={styles.subtitle}> 
           Takes 4 minutes to learn
           </span>
           <p className={styles.desc}>
            Lorem ipsum dolar sit amet consectetur adipisicing. Reprehenderit eius libero perspiciatis recusandae possimus.
           </p>
           <button className={styles.button}>
           Watch
            <MdPlayCircleFilled/>
           </button>
      </div>
    </div>
    <div className={styles.item}>
      <div className={styles.bgContainer}>
         <Image src="/avator.png" alt='' fill className={styles.bg}/>
      </div>
      <div className={styles.texts}>
           <span className={styles.notification}>Available Now</span>
           <h3 className={styles.title}>
            how to use the new version of the admin dashboard?
           </h3>
           <span className={styles.subtitle}> 
           Takes 4 minutes to learn
           </span>
           <p className={styles.desc}>
            Lorem ipsum dolar sit amet consectetur adipisicing. Reprehenderit eius libero perspiciatis recusandae possimus.
           </p>
           <button className={styles.button}>
           Learn
            <MdPlayCircleFilled/>
           </button>
      </div>
    </div>
      
    </div>
  )
}

export default Rightbar
