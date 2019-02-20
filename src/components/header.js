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
    //    status: 'non-active'
    }

    inputChangeHandler = (e) => {
      //  const value = e.target.value === '' ? 'non-active' : 'active';
        this.setState({
         //   status: value,
            keywords: e.target.value });        
    }

    render() {
      
      /*const styles = {
            header:{
                background: '#03a9f4' ,
                padding: '10px'
            },
            logo:{
                color:'#fff',
                fontFamily:'Source Code Pro',
                textAlign:'center',
                fontSize: '25px'
            }              
        }
           //  inside return
              <header style={styles.header}>
              <div style={styles.logo}>Logo</div>
        -------------------------------------------------
        
        if (this.state.keywords !== '') { style.background = 'blue' } else { style.background = 'green'; }
     
        const style = {
            backgroundImage: 'red'
        }
         */




        return (
        
        <header>
            <div className="logo">Logo</div>
            <input onChange={this.inputChangeHandler} type='text' />
        </header>
        )
    } 

}
export default Header; 