import React, { Component } from "react";
import { Link } from 'react-router-dom'
import Cardcomponent from "./component/Cardcomponent";

export default class Class_component extends Component {
    constructor(props) {
        super(props)
        this.state = { posts: [] }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(resp => resp.json())
            .then(resp => this.setState({ posts: resp }))
    }

    deletePost = (id) => {
        const delPost = this.state.posts.filter(post => post.id !== id)
        this.setState({ posts: delPost })
    }
    render() {
        return (
            <div className="container">
                <Link to="/" class="btn btn-primary">Home</Link>
                <h1 className="text-center m-5">Class Component</h1>
                <div className="container d-flex flex-wrap" style={{ gap: '20px' }}>
                    {this.state.posts.map(post =>
                        <Cardcomponent key={post.id} post={post} del={this.deletePost} />
                    )}
                </div>
            </div>
        )
    }
}

