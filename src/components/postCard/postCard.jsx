import React from 'react'
import styles from './postCard.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Postcard = ({ post }) => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.imgcontainer}>
                    <Image src='/noavatar.png' alt='post' fill className={styles.img} />
                </div>
                <span className={styles.date}>01-01-2023</span>
            </div>
            <div className={styles.bottom}>
                <h1 className={styles.title}>{post.id}</h1>
                <h1 className={styles.title}>{post.title}</h1>
                <p className={styles.desc}>{post.body}</p>
                <Link className={styles.link} href={`/blog/${post.slug}`}>Read More</Link>
            </div>
        </div>
    )
}

export default Postcard