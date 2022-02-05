import React from 'react';
import { useParams } from "react-router-dom";
import AllArticles from '../Components/AllArticles';
import articleContent from './ArticleContent'
import NotFound from './NotFound';

export default function Article() {
  const { name } = useParams();
  const article=articleContent.find(article=>article.name===name);
  if (!article) return <NotFound />
  const otherArticles=articleContent.filter(article=>article.name!==name);
  return (<div className='contents'>
  
                <h1>{article.title}</h1>
                {article.content.map((pargraph, key)=>(
                  <p key={key}>{pargraph}</p>
                ))} 
                <h1>Other Articles</h1>
                <AllArticles articles={otherArticles}/>
                           
        </div>
  );
}
