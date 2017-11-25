import React from 'react'
import PostList from './PostList.js'

class Blog extends React.Component {

  constructor() {
    super()
    this.state = {
      posts: []
    }
  }

  getPostsFromMedium() {
    fetch('https://k3dbn86ieh.execute-api.us-east-1.amazonaws.com/First/medium', {
      method: 'GET'
    })
    .then((res) => res.json())
    .then((data) => this.setState({
      posts: data.payload
    }))
  }

  componentDidMount() {
    this.getPostsFromMedium()
  }

  render() {
    if (this.state.posts.length === 0) {
      return (
        <div style={{paddingTop:"20px"}}>
          Loading...!
        </div>
      )
    } else {
      const posts = Object.keys(this.state.posts.references.Post).map((post, index) => {
        return(<PostList key={index} post={this.state.posts.references.Post[post]}/>)
      })

      return (
        <div style={{paddingTop:"20px", paddingBottom:"20px"}}>
          {posts}
        </div>
      )
    }
  }
}

export default Blog
