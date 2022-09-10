import React from 'react'

function Cardcomponent({ post, posts, setPosts, id }) {

    function del(id) {
        setPosts(posts.filter((post, postIndex) => postIndex !== id))
    }


    return (
        <div className="card card-body" style={{ width: '300px' }}>
            <h2 className="card-title" style={{ fontSize: '20px' }}>{post.title}</h2>
            <p className="card-text">{post.body}</p>
            <i className="bi bi-trash" onClick={() => del(id)}></i>
        </div>
    )
}

export default Cardcomponent