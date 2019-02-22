 import React from 'react';
 import classes  from '../css/styles.css';
 // using css modules
 // we need to enable css module  
 // must change ReactApp configuration files


 /* Config steps for css modules 
  stop dev server
  run the:  script eject
  look for /config/webpack.config.js file
  search for kewords  /.\css$/  or  cssRegex
  right under   importLoaders:1,   write the next
       -    modules: true,
       -    localIdentName:'[name]__[local]__[hash:base64:5]',
     
       import classVar from '/css/styles.css'
       <div className={classVar.fondoEj}
 */

 const NewsListItem = ({ item }) => {
     const {title, feed} = item;
   return (
     <div className={classes.news_item}>
        <div>
            <h3> {title}</h3>
            <div>{feed}</div>
        </div>
     </div>
   )
 }
 
 export default NewsListItem
 
