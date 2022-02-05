import React from 'react';
import {Link} from 'react-router-dom'

export default function AllArticles({articles}) {
  return <div>
     {articles.map((article, key)=>(
         <Link to={`/article/${article.name}`} key={key}>
            <h3 className='article'>Article: {article.title}</h3>
            <p >{article.content[0].substring(0,150)}...</p>
         </Link>  
    ))}
  

       </div>;
}
