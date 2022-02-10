import React from 'react'

export default function UpvotesSection({articleName, upvotes, setArticleInfo}) {
    const uovoteArticle=async()=>{
      const result= await fetch(`/api/articles/${articleName}/upvote`,{
          method:'post',
        });
        const body=await result.json();
        setArticleInfo(body);
    }

  return (
    <div>
        <button onClick={()=>uovoteArticle()}>Add upvote</button>
        <p>This post has been upvoted {upvotes} times</p>
    </div>
  )
}
