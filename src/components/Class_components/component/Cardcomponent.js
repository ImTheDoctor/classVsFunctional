import React, { Component } from 'react'

export default class Cardcomponent extends Component {

    render() {
        const post = this.props.post
        return (
            <div className="card card-body" style={{ width: '300px' }}>
                <h2 className="card-title" style={{ fontSize: '20px' }}>{post.title}</h2>
                <p className="card-text">{post.body}</p>
                <i className="bi bi-trash" onClick={()=>this.props.del(post.id)}></i>
            </div>)
    }
}
