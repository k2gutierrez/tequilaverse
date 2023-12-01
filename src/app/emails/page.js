'use client'
import styles from '../page.module.css'
import cls from 'classnames'
import EmailRegistered from '@/components/EmailRegistered'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

export default function Emails() {
  return (
    
    <div className='container-sm'>
      <main className={cls(styles.main, 'mt-2')}>
        <NavBar />
        <EmailRegistered />
        <Footer />
      </main>
    </div>
    
  )
}
