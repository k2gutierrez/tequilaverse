'use client'
import styles from './page.module.css'
import JoinProyect from '../../components/JoinProyect'
import VictorS from '../../components/VictorS'
import How from '../../components/How'
import Tables from '../../components/Tables'
import NavBar from '../../components/NavBar'
import Carrusel from '../../components/Carrusel'
import Footer from '../../components/Footer'

export default function Home() {
  return (
    
    <div className='container-fluid'>
      
      <NavBar />
      <JoinProyect />
      <VictorS />
      <Tables />
      <Carrusel />
      <Footer />
      
    </div>
    
  )
}
