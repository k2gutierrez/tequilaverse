'use client'
import React, { useEffect, useState } from 'react'
import styles from '@/src/app/page.module.css'
import cls from 'classnames'
import Link from 'next/link'
import { db } from '../firebase/config'
import { doc, getDoc } from 'firebase/firestore'

function EmailRegistered() {

    const [correos, setEmails] = useState([])
    
    useEffect(() => {
        getEmail()
      }, [])

    async function getEmail () {
        const docRef = doc(db, "tqv", "correos");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            let em = docSnap.data()
            setEmails(em.correos)
        } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
        }
    }

  return (
    <div className='row justify-content-center my-4'>
        <div className='col-sm-6 col-12'>
            <p className={styles.title}>Registered Emails</p>
            { correos.map(( v, k ) => {
                return (
                    <p key={k} className={cls(styles.text, '')}>
                        { v }
                    </p>
                )
            })
            }
            <Link href={'/'} ><button type="button" class="btn btn-primary">Back to home</button></Link>
        </div>
    </div>
  )
}

export default EmailRegistered