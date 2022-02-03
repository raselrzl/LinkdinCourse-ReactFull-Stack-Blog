import React from 'react';
import  { useParams } from 'react-router-dom';
import ArticleContent from './ArticleContent'
export default function Article() {
  const {name}=useParams();
  const article=ArticleContent.find(article=>article.name===name);
  if(!article) return <h1>Article doent exist</h1>
  return (<div>
      <h1>{article.title}</h1>
      {ArticleContent.map((paragraph, key)=>{(
        <p key={key}>{paragraph}</p>
      )

      })}
  </div>
  );
}
