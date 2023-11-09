import React from 'react'
import Image from 'next/image'
import destileria from '@/public/images/DESTILERIA.png'
import ModalEmail from './ModalEmail'
import styles from '@/src/app/page.module.css'
import cls from 'classnames'
import Link from 'next/link'

function JoinProyect() {
  return (
    <div className='row text-center justify-content-center p-sm-5 p-2 my-4'>
        <div className='col-sm-6 col-12 text-start p-md-5 p-3'>
            <p className={styles.title}>INVEST IN TEQUILA</p>
            <p className={cls(styles.text, '')}>
                Join the First & Only community owned 
                Tequila Distillery
            </p>
            <ModalEmail />
        </div>
        <div className='col-sm-6 col-12 p-md-5 p-3'>
            <Image className='img-fluid' src={destileria} alt='destileria' width={536} height={522} />
        </div>
    </div>
  )
}

export default JoinProyect