import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Cardcomponent from './Cardcomponent'

export default function Functional_component() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data))
  }, [])

  return (
    <div className="container">
      <Link to="/" class="btn btn-primary">Home</Link>
      <h1 className="text-center m-5">Functional Component</h1>
      <div className="container d-flex flex-wrap" style={{ gap: '20px' }}>
        {posts.map((post, idx) =>
          <Cardcomponent key={idx} post={post} posts={posts} setPosts={setPosts} id={idx} />
        )}
      </div>
    </div>
  )
}