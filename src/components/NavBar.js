'use client'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import Image from 'next/image';
import logo from '@/public/images/LOGO.png'
import twitterIcon from '@/public/images/TWITTER_ICON.png'
import telegramIcon from '@/public/images/TELEGRAM_ICON.png'
import styles from '@/src/app/page.module.css'

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-transparent" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/"> <Image className='img-fluid' src={logo} alt='logo' width={352} height={29} /> </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto gap-5 align-items-center">
                <Nav.Link className={styles.navLetters} href="#team">TEAM</Nav.Link>
                <Nav.Link href="https://twitter.com/TheTequilaVerse" target='_blank' > <Image className='img-fluid' src={twitterIcon} alt='twitter' width={40} height={40} /> </Nav.Link>
                <Nav.Link href="https://t.me/+qmUIfYLCDBVmZDBh" target='_blank' > <Image className='img-fluid' src={telegramIcon} alt='telegram' width={40} height={40} /> </Nav.Link>
                <ConnectButton />
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;