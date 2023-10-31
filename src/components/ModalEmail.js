'use client'
import { useState } from 'react';
import Image from 'next/image';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import emailButton from '@/public/images/EMAIL_BOTON.png'
import logo from '@/public/images/membership.jpg'
import styles from '@/src/app/page.module.css'
import { db } from '../firebase/config';
import { arrayUnion, updateDoc, doc } from 'firebase/firestore';

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
      <Button variant='transparent' onClick={handleShow}>
        <Image className='' src={emailButton} alt='email' width={150} height={50} />
      </Button>

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