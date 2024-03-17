import React, { Suspense } from 'react'
import styles from './singlePost.module.css'
import Image from 'next/image'
import PostUser from '../../../components/postUser/posrUser'
import { getPost } from '../../../lib/data'

// const getData = async (slug) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);
//   return res.json()
// }

const SinglePost = async ({ params }) => {
  const { slug } = params;
  // const post = await getData(slug);

  const post = await getPost(slug);

  return (

    <div className={styles.contaniner}>
      <div className={styles.imgcontainer}>
        <Image src='/noavatar.png' alt='img' fill className={styles.img} />
      </div>
      <div className={styles.textcontainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.details}>
          <Image className={styles.avatar} src='/noavatar.png' alt='img' width={50} height={50} />
          {post && <Suspense fallback={<div>Loading...</div>}>
            <PostUser userId={post.userId} />
          </Suspense>}
          <div className={styles.detailsdesc}>
            <span className={styles.detailtitle}>Published</span>
            <span className={styles.detailvalue}>01-01-2023</span>
          </div>
        </div>
        <div className={styles.content}>
          {post.body}
        </div>
      </div>
    </div >
  )
}

export default SinglePost
