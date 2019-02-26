import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import JSON from './db.json';

//COMPONENTS
import Header from './components/header'
//import Newslist from './components/temporal';
import Newslist from './components/newsList';


class App extends Component {   

    state = {
        news : JSON,
        filtered: []
    }

    getKeyword = (event) =>{
       // console.log(event.target.value);
       let keyword = event.target.value;
       let filtered = this.state.news.filter((item)=>{
         return item.title.includes(keyword)
       })
       this.setState({
           filtered:filtered
        });
    }

    render(){
        const centro={
            textAlign:'center',
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
            width: '40%'
        }
         let newsFiltered = this.state.filtered;
        return (<div>
                    <Header keywords={ this.getKeyword }/>
                    
                    <Newslist news={newsFiltered.length === 0 ? this.state.news : newsFiltered}>
                        <h1>The news are:</h1>                 
                    </Newslist>
                </div> 
                )
    }
    
}

ReactDOM.render(<App />, document.getElementById('root'));