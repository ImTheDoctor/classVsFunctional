import React from 'react'

export default function Functional_component() {
  return (
    <div>Functional_component</div>
  )
}

// import React, { Component } from "react";

// export default class Class_component extends Component {
//     constructor(props) {
//         super(props)
//         this.state =  {posts: []} 
//     }

//     componentDidMount() {
//         fetch('https://jsonplaceholder.typicode.com/todos/posts')
//             .then(response => response.json())
//             .then(response => this.setState({ posts: response }))
//     }
//     render() {
//         return (
//             <div className="container">
//                 <div className="row">
//                     <div className="col-12">
//                         {this.state.posts}
//                         {/* {this.state.posts.map(post => 
//                         <div>
//                             <h2>{post.title}</h2>
//                             <div>{post.body}</div>
//                         </div>)} */}
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }

