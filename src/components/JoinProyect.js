import React from 'react'
import Image from 'next/image'
import telegramButton from '@/public/images/TELEGRAM_BOTON.png'
import destileria from '@/public/images/DESTILERIA.png'
import ModalEmail from './ModalEmail'
import styles from '@/src/app/page.module.css'
import cls from 'classnames'
import Link from 'next/link'

function JoinProyect() {
  return (
    <div className='row justify-content-center my-4'>
        <div className='col-sm-6 col-12'>
            <p className={styles.title}>INVEST IN TEQUILA</p>
            <p className={cls(styles.text, '')}>
                Join the First & Only community owned 
                Tequila Distillery
            </p>
            <div className={cls('row mt-5')}>
                <div className='col-sm-4 col-12'>
                <ModalEmail />
                </div>
                <div className='col-sm-8 col-12'>
                    <Link href='https://t.me/+qmUIfYLCDBVmZDBh' target='_blank' > <Image className='' src={telegramButton} alt='telegram' width={300} height={50} /> </Link>
                </div>
            </div>
        </div>
        <div className='col-sm-6 col-12 ps-5'>
            <Image className='img-fluid' src={destileria} alt='destileria' width={436} height={422} />
        </div>
    </div>
  )
}

export default JoinProyect