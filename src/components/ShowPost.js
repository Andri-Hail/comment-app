import React, { useState } from 'react'
import './App.css'
import Like from './like'

const ShowPost = props => {
  const { author, body, replyCounter } = props
  const [replies, addReplies] = useState([])
  const submitComment = (value, value2, replyCounter) => {
    addReplies(replies => [
      ...replies,
      { name: value, body: value2, replyCounter: replyCounter + 1 },
    ])
    value = ''
    value2 = ''
  }
  const repliesDisp = replies.map((post, i) => (
    <ShowPost
      author={post.name}
      key={post.body + post.name + i}
      body={post.body}
      replyCounter={post.replyCounter}
    />
  ))
  return (
    <div>
      <div className="showPost">
        <h5 style={{ color: 'blue' }}>{author}</h5>
        <br></br>
        <p>{body}</p>
        <Like replyCounter={replyCounter} addReply={submitComment} />
        {repliesDisp}
      </div>
    </div>
  )
}

export default ShowPost
