import React from 'react'

const PostList = (props) => {
  return (
    <div style={{border: "double", marginBottom: "20px"}}>
      <div>
        <a href={`https://medium.com/@yamini011/${props.post.uniqueSlug}`} target="_blank" rel="noopener noreferrer"><button className="btn btn-primary post">View Post</button></a>
        <h2 style={{marginLeft:"10px", marginTop: "5px"}}>{props.post.title}</h2>
      </div>
      <p style={{paddingLeft: "10px"}}>{props.post.virtuals.subtitle}</p>
    </div>
  )
}

export default PostList
