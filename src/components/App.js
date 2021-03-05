import React, { useState } from 'react'
import Post from './post'
import 'bootstrap/dist/css/bootstrap.min.css'
import ShowPost from './ShowPost'

const App = () => {
  const [comments, addComment] = useState([])

  const submitComment = (value, value2) => {
    addComment(comments => [...comments, { name: value, body: value2 }])
    value = ''
    value2 = ''
    document.getElementById('myForm').value = ''
  }

  const commentsDisp = comments.map((post, i) => (
    <ShowPost
      author={post.name}
      key={post.body + post.name + i}
      body={post.body}
      replyCounter={1}
    />
  ))

  return (
    <div>
      <Post commentSubmit={submitComment} originalPost={true} reply={true} />
      {commentsDisp}
    </div>
  )
}

export default App
