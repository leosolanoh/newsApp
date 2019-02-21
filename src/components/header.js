import React, { Component } from 'react';
import './header.css'
 

class Header extends Component {

    /* constructor(props){
         super(props)
         this.state = {
             keywords: ''
         }
     }*/

    state = {
        keywords: '',
        active: false
    }

    inputChangeHandler = (e) => {
        //detects if empty or not 
      const val = e.target.value === '' ? false : true;
       
        this.setState({  
            active: val,     
            keywords: e.target.value });        
    }

    render() {
          /* Second pattern
          using state active true/false to change background  colors when  
          a character typed */
        return (
     

        <header  style={{background: `${this.state.active ? 'red' : 'blue'}`}} >
            <div className="logo">Logo</div>
            <input onChange={this.inputChangeHandler} type='text' />
        </header>
        )
    } 

}
export default Header; 