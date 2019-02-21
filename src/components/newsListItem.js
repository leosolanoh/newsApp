 import React from 'react'
 import { css }  from 'glamor';
 
 const NewsListItem = ({ item }) => {

   let  news_item = css({
     padding:'20px',
     boxSizing: 'border-box',
     borderBottom: '1px solid grey',
     ':hover':{color:'red'},
     '@media(max-width:600px)':{
       color:'blue'
     }
   })

   let item_grey = css({
     background: 'lightgrey'
   })
      

   return (
     //<div {...news_item} {...item_grey}>  other option  //

     <div  >
       <div  className={`${item_grey} ${news_item}`}>
                <h3> {item.title}</h3>
                <div>{item.feed}</div>
        </div>
     </div>
   )
 }
 
 export default NewsListItem
 
