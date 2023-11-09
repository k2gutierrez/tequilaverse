import React from 'react'
import Image from 'next/image'
import imagen from '@/public/images/IMAGEN.png'
import grafica1 from '@/public/images/GRAFICA_1less.png'
import grafica2 from '@/public/images/GRAFICA_2.png'
import styles from '@/src/app/page.module.css'
import cls from 'classnames'
import How from './How'

function Tables() {
  return (
    <div className='container mb-3'>
        <How />
        <div className='row'>
            <div className='col-sm-6 col-12 align-self-start'>
                <p>
                    <span className={cls(styles.orange, styles.tableText1)} >NORTH AMERICA TEQUILA MARKET SIZE, 2018-2029 (USD BILLION)</span> <br />
                    <span className={cls(styles.tableText1)} >Global market size projection for 2029 is</span> <span className={cls(styles.tableText2)} >$15.57 usd billion</span> 
                </p>
                <Image className='img-fluid' src={grafica1} alt='grafica1' width={544} height={326} />
            </div>
            <div className={cls(styles.tableText, 'col-sm-6 col-12')}>
                <p className='my-5'>
                    Capitalize on the U.S. tequila market- <br />
                    61% of global sales.
                </p>
                <p className='pt-5'>
                    Meet surging tequila demand - More <br />
                    distilleries are crucial.
                </p>
            </div>
        </div>

        <div className='row'>
            <div className='col-sm-6 col-12'>
                <p>
                    <span className={cls(styles.orange, styles.tableText1)} >TOTAL PRODUCTION: TEQUILA AND 100% TEQUILA</span> <br />
                    <span>Volumes expressed at 40% Alc. Vol. millions of liters</span> 
                </p>
                <Image className='img-fluid' src={grafica2} alt='grafica2' width={586} height={445} />
            </div>
            <div className={cls(styles.tableText, 'col-sm-6 col-12')}>
                <p className='my-5'>
                    Embrace blockchain - Tokenize a distillery, join the tequila boom as a community.
                </p>
                <p className='pt-5'>
                    Dive into a Web 3.0 project - Integrating meetups, entertainment, and a solid business model.
                </p>
            </div>
        </div>

        {/*<div className={cls(styles.worm , 'row my-3')}>
            <Image className='img-fluid' src={imagen} alt='worms' width={1188} height={363} />
            <div className={cls(styles.wormsAbsolute)}>
                <p>
                    JOIN THE WORM'S - UNIQUE STORYTELLING <br/>
                    THROUGH DIGITAL COLLECTIBLES.
                </p>
            </div>
  </div>*/}

    </div>
  )
}

export default Tables