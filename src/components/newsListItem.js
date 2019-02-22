 import React from 'react';
 import classes  from '../css/styles.css';
 // using css modules
 // we need to enable css module  
 // must change ReactApp configuration files

 const NewsListItem = ({ item }) => {
     

   return (
     <div className={classes.new_item}>
        <div>
            <h3> {item.title}</h3>
            <div>{item.feed}</div>
        </div>
     </div>
   )
 }
 
 export default NewsListItem
 
