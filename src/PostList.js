import React from 'react'

const PostList = (props) => {

  console.log(props.post)
  return (
    <div style={{border: "double", marginBottom: "20px"}}>
      <div>
        <button className="btn btn-primary post">View Post >> </button>
        <h2 style={{marginLeft:"10px", marginTop: "5px"}}>{props.post.title}</h2>
      </div>
      <p style={{paddingLeft: "10px"}}>{props.post.virtuals.subtitle}</p>
    </div>
  )
}

export default PostList
