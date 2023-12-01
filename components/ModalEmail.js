'use client'
import { useState } from 'react';
import Image from 'next/image';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import emailButton from '@/public/images/EMAIL_BOTON.png'
import telegramButton from '@/public/images/TELEGRAM_BOTON.png'
import logo from '@/public/images/membership.jpg'
import styles from '@/src/app/page.module.css'
import { db } from './firebase/config';
import { arrayUnion, updateDoc, doc } from 'firebase/firestore';
import Link from 'next/link';
import cls from 'classnames'

function ModalEmail() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleEmail = async () => {
    const ref = doc(db, 'tqv', 'correos')
    if (email != '') {
        await updateDoc(ref, {
            correos: arrayUnion(email)
        })
        setMessage('We will contact you shortly!')
        setEmail('')
        setTimeout(handleClose, 2000)
    } else {
        setMessage('No Email has been submitted, try again please')
    }
  }

  return (
    <>
      <div className='row mt-5'>

        <div className='col-sm-4 col-12'>
          <Button variant='transparent' onClick={handleShow}>
            <Image className={cls(styles.imagen1, 'img-fluid')} src={emailButton} alt='email' />
          </Button>
        </div>

        <div className='col-sm-8 col-12'>
          <Button variant='transparent' >
            <Link href='https://t.me/+qmUIfYLCDBVmZDBh' target='_blank' > 
              <Image className={cls(styles.imagen2, 'img-fluid')} src={telegramButton} alt='telegram' /> 
            </Link>
          </Button>
        </div>

      </div>

      <Modal className={styles.modal} show={show} onHide={handleClose}>
        <Modal.Header>
        </Modal.Header>
        <Modal.Body>
            <div className='text-center'>
            <Image className='img-fluid' src={logo} alt='logo' width={352} height={29} />
            </div>
            
        </Modal.Body>
        <Modal.Footer className='text-center justify-content-center'>

            <input type='email' name='email' id='email' placeholder='Enter your email' onChange={(e) => setEmail(e.target.value)} />

            <Button className={styles.buttonModal} variant="info" onClick={handleEmail}>
                Register
            </Button>
            <p className=''>{ message }</p>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalEmail;