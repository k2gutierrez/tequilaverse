import React from 'react'
import styles from '@/src/app/page.module.css'
import cls from 'classnames'
import TWITTER from '@/public/images/TWITTER_ICON.png'
import TELEGRAM from '@/public/images/TELEGRAM_ICON.png'
import Image from 'next/image'
import Link from 'next/link'

function Footer() {
  return (
    <div className={cls(styles.victorBG, 'row my-3 py-3 px-3 text-center')}>
        <div className='col-sm-6 col-12 align-self-center'>
          <p className={styles.title}>
            Invest in Tequila NOW!
          </p>
        </div>
        <div className='col-sm-3 col-12 align-self-center'>
          <p className={styles.footLetters}>
            E-MAIL SUBSCRIPTION
          </p>
        </div>
        <div className='col-sm-1 col-6 align-self-center'>
          <Link href='https://twitter.com/TheTequilaVerse' target='_blank' ><Image className='img-fluid' src={TWITTER} alt='twitter' width={50} height={50} /></Link> 
        </div>
        <div className='col-sm-1 col-6 align-self-center'>
          <Link href='https://t.me/+qmUIfYLCDBVmZDBh' target='_blank' ><Image className='img-fluid' src={TELEGRAM} alt='telegram' width={50} height={50} /></Link>
        </div>
    </div>
  )
}

export default Footer