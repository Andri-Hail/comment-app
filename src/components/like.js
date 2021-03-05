import React, { useState } from 'react'
import './App.css'
import Post from './post'

const Like = props => {
  const { replyComment, addReply, replyCounter } = props
  const [likes, setLikes] = useState(0)
  const [reply, setReply] = useState(false)
  const upVote = () => {
    setLikes(likes + 1)
  }
  const downVote = () => {
    setLikes(likes - 1)
  }
  const postReply = () => {
    setReply(!reply)
  }

  return (
    <div>
      <p> Score: {likes}</p>
      <button onClick={upVote} className="vote">
        {' '}
        Like
      </button>
      <button onClick={downVote} className="vote">
        {' '}
        Dislike
      </button>
      {replyCounter < 3 && (
        <div>
          <Post
            reply={reply}
            afterReply={postReply}
            replyCounter={replyCounter}
            commentSubmit={addReply}
          ></Post>
          <button className="vote" onClick={postReply}>
            {' '}
            Reply
          </button>
        </div>
      )}
    </div>
  )
}

export default Like
