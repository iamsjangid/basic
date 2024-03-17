import React from 'react'
import styles from './contact.module.css'
import Image from 'next/image'

const ContactPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgcontainer}>
        <Image src='/contact.png' alt='contact' fill className={styles.img} />
      </div>
      <div className={styles.formcontainer}>
        <form action="" className={styles.form}>
          <input type="text" placeholder='Name and Surname' />
          <input type="text" placeholder='Email Address' />
          <input type="text" placeholder='Phone N0 (Optional)' />
          <textarea name="" id="" cols="30" rows="10" placeholder='Message'></textarea>
          <button>Send</button>
        </form>
      </div>
    </div>
  )
}

export default ContactPage
