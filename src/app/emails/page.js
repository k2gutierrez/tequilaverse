import styles from '../page.module.css'
import cls from 'classnames'
import EmailRegistered from '@/src/components/EmailRegistered'
import NavBar from '@/src/components/NavBar'
import Footer from '@/src/components/Footer'

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
