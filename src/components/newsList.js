import React  from 'react';
import NewsListItem from './newsListItem'

const Newslist = ({ news, children }) => {  
  
    // items is doing all the logic rendering some JSX markup 
    // with the title and the feed 
    const items = news.map((item => { 
      // return some JSX
          return (
             <NewsListItem key={item.id} item={item} />
          )
      }))
 
      return (
        <div> 
          {children} 
          {items}        
        </div>
      )
  }
 

export default Newslist;
