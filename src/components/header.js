import React from 'react';
//import './header.css'
import classes  from '../css/styles.css'; 

const Header =  (props) => {   
            
        return (        
            <header className={classes.logo} >
                <div>Logo</div>
                <input onChange={ props.keywords } type='text' />
            </header>
        )     

}
export default Header; 





 
