'use client'
import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import styles from '@/src/app/page.module.css'
import cls from 'classnames'
import t1 from '@/public/images/team/MEMO.png'
import t2 from '@/public/images/team/KEVIN.png'
import t3 from '@/public/images/team/DISANTY.png'
import t9 from '@/public/images/team/CARLOS.png'
import t5 from '@/public/images/team/EmmauelDelva.png'
import Image from 'next/image'
import Link from 'next/link';

export default function Carrusel() {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
    <div id='team' className='container text-center my-4'>
        <p className={cls(styles.title)}>
            OUR TEAM
        </p>

        <Carousel className='p-md-5 p-2' activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item className='p-md-4 p-2' >
                <div className='row'>
                    <div className='col-4'>
                        <Link href='https://www.linkedin.com/in/mbamemo/' target='_blank' > <Image className='img-fluid' src={t1} alt='Memo Gtz' width={297} height={262} /> </Link>
                    </div>
                    <div className='col-4'>
                        <Image className='img-fluid' src={t2} alt='Kevin' width={297} height={262} />
                    </div>
                    <div className='col-4'>
                        <Image className='img-fluid' src={t3} alt='Disanty' width={297} height={262} />
                    </div>
                </div> 

                <div className='row mt-5'>
                    <div className='col-4'>
                        <p className={styles.carruselTitle}>Guillermo Gutiérrez <br /> MBA & Master in Blockchain and Crypto by Binance</p>
                        <p className={styles.carruselText}>Founder</p>
                    </div>
                    <div className='col-4'>
                        <p className={styles.carruselTitle}>Kevin Johnston</p>
                        <p className={styles.carruselText}>Creative Director of the Metaverse</p>
                    </div>
                    <div className='col-4'>
                        <p className={styles.carruselTitle}>Víctor Sandoval</p>
                        <p className={styles.carruselText}>3rd Agave Generation Farmer and Tequila Distiller Disanty Tequila</p>
                    </div>
                </div>
            </Carousel.Item>
            
            
            <Carousel.Item className='p-md-4 p-2' >
                <div className='row'>
                    <div className='col-6'>
                        <Link href='https://www.linkedin.com/in/emmanuel-delva-088006111' target='_blank' >
                            <Image className='img-fluid' src={t5} alt='Emmanuel Delva' width={297} height={262} />
                        </Link>
                    </div>
                    <div className='col-6'>
                        <Image className='img-fluid' src={t9} alt='Carlos Gtz' width={297} height={262} />
                    </div>
                </div> 

                <div className='row mt-5'>
                    <div className='col-6'>
                        <p className={styles.carruselTitle}>Emmanuel Delva</p>
                        <p className={styles.carruselText}>Law & Tech. PhD in Law</p>
                    </div>
                    <div className='col-6'>
                        <p className={styles.carruselTitle}>Carlos Gutiérrez</p>
                        <p className={styles.carruselText}>Cibersecurity Master, BlockChain Developer & Project Manager</p>
                    </div>
                </div>
            </Carousel.Item>
        </Carousel>
    </div>
    )
}
