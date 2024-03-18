import React from 'react'
import styles from './blog.module.css'
import Postcard from '../../components/postCard/postCard'
import {getPosts} from '../../lib/data'

// FETCH DATA WITH AN API
// const getData = async () => {
//     const res = await fetch("https://jsonplaceholder.typicode.com/posts", { next: { revalidate: 1 } })
//     return res.json()
// }

const BlogPage = async () => {
    // FETCH DATA WITH AN API
    // const posts = await getData();
    // console.log(posts)

    // FETCH DATA WITHOUT AN API (USING lib)
    const posts = await getPosts();
    return (
        <div className={styles.container}>
            {posts.map((post) => (
                <div className={styles.post} key={post.id}>
                    <Postcard post={post} />
                </div>
            ))}
        </div>
    )
}

export default BlogPage
