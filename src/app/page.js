import Image from 'next/image'
import styles from './page.module.css'
import cls from 'classnames'
import JoinProyect from '../components/JoinProyect'
import VictorS from '../components/VictorS'
import How from '../components/How'
import Tables from '../components/Tables'
import NavBar from '../components/NavBar'
import Carrusel from '../components/Carrusel'
import Footer from '../components/Footer'

export default function Home() {
  return (
    
    <div className='container-sm'>
      <main className={cls(styles.main, 'mt-2')}>
        <NavBar />
        <JoinProyect />
        <VictorS />
        <Tables />
        <Carrusel />
        <Footer />
      </main>
    </div>
    
  )
}
