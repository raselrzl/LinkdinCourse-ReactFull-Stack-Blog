import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import AllArticles from '../Components/AllArticles';
import articleContent from './ArticleContent'
import NotFound from './NotFound';
import CommentsList from '../Components/CommentsList';
import UpvotesSection from '../Components/UpvotesSection';


export default function Article() {
  const [articleInfo, setArticleInfo]=useState({upvotes:0, comments: []});

 

  const { name } = useParams();
  const article=articleContent.find(article=>article.name===name);
  useEffect(()=>{
    const fetchData=async()=>{
        const result=await fetch(`/api/articles/${name}`);
        const body=await result.json();
        console.log(body);
        setArticleInfo(body);
    }
    fetchData();
  },[name]);
  if (!article) return <NotFound />
  const otherArticles=articleContent.filter(article=>article.name!==name);
  
  return (<div className='contents'>
  
                <h1>{article.title}</h1>
                <UpvotesSection articleName={name} upvotes={articleInfo.upvotes} setArticleInfo={setArticleInfo}/>
                <p>This post has been upvoted {articleInfo.upvotes} times</p>
                {article.content.map((pargraph, key)=>(
                  <p key={key}>{pargraph}</p>
                ))} 
                <CommentsList comments={articleInfo.comments}/>
                <h1>Other Articles</h1>
                <AllArticles articles={otherArticles}/>
                           
        </div>
  );
}
