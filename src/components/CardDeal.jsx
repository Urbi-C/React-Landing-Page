import React from 'react'
import Button from './Button';
import styles, {layout} from '../style';
import {card} from '../assets';


const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Find a better card deal <br className='sm:block hidden' /> in a few easy steps</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ad ipsa consequatur expedita repudiandae laborum impedit in iure, sed soluta nobis saepe deserunt quis.</p>
        <Button styles="my-10"></Button>
      </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="card" className='w-[100%] h-[100%]'/>
    </div>

    </section>
  )
}

export default CardDeal
