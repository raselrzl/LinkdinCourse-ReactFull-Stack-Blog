import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import AllArticles from '../Components/AllArticles';
import articleContent from './ArticleContent'
import NotFound from './NotFound';
import CommentsList from '../Components/CommentsList';
import UpvotesSection from '../Components/UpvotesSection';
import AddCommentForm from '../Components/AddCommentForm';


export default function Article({match}) {
  const { name } = useParams();
  const article=articleContent.find(article=>article.name===name);
  const [articleInfo, setArticleInfo]=useState({upvotes:0, comments: []});

 

  
  
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
  
  return (<>
    <h1>{article.title}</h1>
    <UpvotesSection articleName={name} upvotes={articleInfo.upvotes} setArticleInfo={setArticleInfo} />
    {article.content.map((paragraph, key) => (
        <p key={key}>{paragraph}</p>
    ))}
    <CommentsList comments={articleInfo.comments} />
    <AddCommentForm articleName={name} setArticleInfo={setArticleInfo} />
    <h3>Other Articles:</h3>
    <AllArticles articles={otherArticles} />
    </>
  );
}
