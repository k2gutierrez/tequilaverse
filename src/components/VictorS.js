import React from 'react'
import styles from '@/src/app/page.module.css'
import cls from 'classnames'

function VictorS() {
  return (
    <div className={cls(styles.victorBG, 'py-3 px-2 text-center')}>
        <p className={cls(styles.victorFrase)}>
            "Being part of the tequila business has never been this accessible"
        </p>
        <p className={cls(styles.victorFrase)}>
            -Victor Sandoval
        </p>
        <p className={cls(styles.victorName)}>
            CEO Disanty Distillery
        </p>
    </div>
  )
}

export default VictorS