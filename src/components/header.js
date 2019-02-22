import React, { Component } from 'react';
import './header.css'
 

class Header extends Component {

    state = {
        keywords: ''      
    }

    inputChangeHandler = (e) => {
     
        this.setState({  
          
            keywords: e.target.value });        
    }

    render() {
          /* Fourth pattern
          using CSS library glamor   */
        return (
     

        <header  >
            <div className="logo">Logo</div>
            <input onChange={this.inputChangeHandler} type='text' />
        </header>
        )
    } 

}
export default Header; 