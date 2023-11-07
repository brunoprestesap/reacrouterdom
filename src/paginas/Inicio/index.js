import React from 'react'
import Banner from 'components/Banner'

import styles from './inicio.module.css'

import posts from 'json/posts.json'
import Post from 'components/Post'

const index = () => {
  return (
    <main>
      <Banner />

      <ul className={styles.posts}>
        {posts.map((post) => (
          <li key={post.id}>
            <Post post={post} />
          </li>
        ))}
      </ul>
    </main>
  )
}

export default index