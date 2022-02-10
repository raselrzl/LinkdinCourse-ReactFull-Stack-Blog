import React, { useState } from 'react'

export default function AddCommentForm({articleName, setArticleInfo}) {
    const [username, setUsername]=useState("");
    const [commentText, setCommentText]=useState("");


    const addComment=async()=>{
        const result =await fetch(`/api/articles/${articleName}/add-comment`,{
            method:'post',
            body: JSON.stringify({username, text:commentText}),
            headers:{
                'Content-Type':'application/json',
            }
        });
        const body=await result.json();
        setArticleInfo(body);
        setUsername('');
        setCommentText('');
    }

  return (
    <div>
    <h3>Add a comment</h3>
        <label>
            name:
            <input type="text" value={username} onChange={(event)=>setUsername(event.target.value)}/>
        </label>
        <label>
            Comment:
            <textarea rows={4} value={commentText} onChange={(event)=>setCommentText(event.target.value)}/>
        </label>
        
        
        <button onClick={()=>addComment()}>Add Comments</button>
        
    </div>
  )
}
