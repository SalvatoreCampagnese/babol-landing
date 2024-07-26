'use client'
import Image from 'next/image';
import styles from './style.module.scss';

const Card = ({children, i}: {children:any, i:number}) => {

  return (
    <div className={styles.cardContainer}>
      <div 
        className={styles.card}
        style={{background: "linear-gradient(20deg, #37324C 12.66%, #1D3240 116.79%)", top:`calc(-0vh + ${i * 25}px)`, boxShadow: `0px 0px 10px rgba(0, 0, 0, 0.65)`}}
      >
        {children}
      </div>
      <button>a</button>
    </div>
  )
}

export default Card