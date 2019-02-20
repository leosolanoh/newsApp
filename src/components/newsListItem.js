 import React from 'react'
 import classes from '../css/styles.css'
 
 
 
 const NewsListItem = ({ item }) => {


   return (
     <div className={classes.news_items} >
       <div >
                <h3> {item.title}</h3>
                <div>{item.feed}</div>
        </div>
     </div>
   )
 }
 
 export default NewsListItem
 
