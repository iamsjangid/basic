import React from 'react'
import styles from './postuser.module.css'


const getData = async (userId) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    return res.json()
}

const PostUser = async ({ userId }) => {
    const user = await getData(userId);

    return (
        <div className={styles.container}>
            <span className={styles.detailtitle}>Author</span>
            <span className={styles.detailvalue}>{user.username}</span>
        </div>
    )
}

export default PostUser
