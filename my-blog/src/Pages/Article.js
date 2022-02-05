import React from 'react';
import { useParams } from "react-router-dom";
import articleContent from './ArticleContent'

export default function Article() {
  const { name } = useParams();
  const article=articleContent.find(article=>article.name===name);
  return (<div className='contents'>
                <h1>{article.title}</h1>
                {article.content.map((pargraph, key)=>(
                  <p key={key}>{pargraph}</p>
                ))}
             
        </div>
  );
}
