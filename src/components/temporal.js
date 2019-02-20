import React  from 'react';

const Newslist = ({ news }) => {

/* practica de   new Map(Object.entries(objeto))
/  objeto a Mapas :  arreglos   key => values
/  se usa un array de mapas extraido desde el array news
/  se obtiene el valor requerido con metodo .get del Map
*/
const  arrayMapas = [];

news.forEach(element => arrayMapas.push(new Map (Object.entries(element) )) 
            );

 const filtrado =  arrayMapas.map(
    element => {  
   return ( 
          <div>
            <h3>{ element.get('title')}</h3> 
                { element.get('feed')}
          </div>)} )
          

    return (
      <div>
         <h1>Items desde componente Temporal</h1>
         {filtrado}      
      </div>
    )
  }  

export default Newslist;