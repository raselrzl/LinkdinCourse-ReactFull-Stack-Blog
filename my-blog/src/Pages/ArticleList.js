import React from 'react';
import AllArticles from '../Components/AllArticles';
import articlecontent from './ArticleContent'


export default function articlelist() {
  return <div className='contents'>
                <h1>Articles</h1>
                <AllArticles articles={articlecontent}/>
        </div>;
}
