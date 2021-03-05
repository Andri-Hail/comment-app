import React, { useState } from 'react'
import './App.css'

const Post = props => {
  const { commentSubmit, reply, originalPost, afterReply, replyCounter } = props
  const [value, setValue] = useState('')
  const [value2, setValue2] = useState('')
  const [posted, setPosted] = useState(false)
  const afterSubmission = event => {
    event.preventDefault()
    setValue('')
    setValue2('')
    if (!originalPost) {
      setPosted(true)
    }
    afterReply()
  }
  if (reply) {
    return (
      <div>
        <form id="myForm" className="makePost" onSubmit={afterSubmission}>
          <h3>New Post</h3>
          <input
            name="comment_name"
            placeholder="Name..."
            onChange={e => setValue(e.target.value)}
            value={value}
          ></input>
          <br></br>
          <br></br>
          <textarea
            name="comment_body"
            onChange={e => setValue2(e.target.value)}
            value={value2}
            placeholder="Write a new post..."
          ></textarea>
          <br></br>
          <br></br>
          <input
            type="submit"
            value="Post"
            disabled={!value || !value2}
            onClick={() => commentSubmit(value, value2, replyCounter)}
          />
        </form>
      </div>
    )
  } else {
    return <div></div>
  }
}

export default Post
