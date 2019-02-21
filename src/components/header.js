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
        active: 'non-active'
    }

    inputChangeHandler = (e) => {
        //detects if empty or not  
        //this changes the class value
      const val = e.target.value === '' ? 'non-active' : 'active';
       
        this.setState({  
            active: val,     
            keywords: e.target.value });        
    }

    render() {
          /* Third pattern
          Adding  className  active/ non-active   */
        return (
     

        <header  className={this.state.active} >
            <div className="logo">Logo</div>
            <input onChange={this.inputChangeHandler} type='text' />
        </header>
        )
    } 

}
export default Header; 