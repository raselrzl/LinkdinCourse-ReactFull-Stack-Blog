import React, { useState } from 'react'

export default function AddCommentForm() {
    const [username, setUsername]=useState("");
    const [commentText, setCommentText]=useState("");

  return (
    <div>
    <h3>Add a comment</h3>
        <label>
            name:
            <input type="text" value={user}/>
        </label>
        <label>
            Comment:
            <textarea rows={4}/>
        </label>
        
        
        <button>Add Comments</button>
        
    </div>
  )
}
