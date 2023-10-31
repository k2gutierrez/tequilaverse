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

        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <div className='row'>
                    <div className='col-4'>
                        <Link href='https://www.linkedin.com/in/mbamemo/' target='_blank' > <Image className='' src={t1} alt='Memo Gtz' width={347} height={312} /> </Link>
                    </div>
                    <div className='col-4'>
                        <Image className='' src={t2} alt='Kevin' width={347} height={312} />
                    </div>
                    <div className='col-4'>
                        <Image className='' src={t3} alt='Disanty' width={347} height={312} />
                    </div>
                </div> 

                <div className='row mt-5'>
                    <div className='col-4'>
                        <h5>Guillermo Gutiérrez <br /> MBA & Master in Blockchain and Crypto by Binance</h5>
                        <p>Founder</p>
                    </div>
                    <div className='col-4'>
                        <h5>Kevin Johnston</h5>
                        <p>Creative Director of the Metaverse</p>
                    </div>
                    <div className='col-4'>
                        <h5>Víctor Sandoval</h5>
                        <p>3rd Agave Generation Farmer and Tequila Distiller Disanty Tequila</p>
                    </div>
                </div>
            </Carousel.Item>
            
            
            <Carousel.Item>
                <div className='row'>
                    <div className='col-6'>
                        <Link href='https://www.linkedin.com/in/emmanuel-delva-088006111' target='_blank' >
                            <Image className='' src={t5} alt='Emmanuel Delva' width={347} height={312} />
                        </Link>
                    </div>
                    <div className='col-6'>
                        <Image className='' src={t9} alt='Carlos Gtz' width={347} height={312} />
                    </div>
                </div> 

                <div className='row mt-5'>
                    <div className='col-6'>
                        <h5>Emmanuel Delva</h5>
                        <p>Law & Tech. PhD in Law</p>
                    </div>
                    <div className='col-6'>
                        <h5>Carlos Gutiérrez</h5>
                        <p>Project Manager & Block Chain Developer</p>
                    </div>
                </div>
            </Carousel.Item>
        </Carousel>
    </div>
    )
}
