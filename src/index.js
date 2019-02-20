import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import JSON from './db.json';

//COMPONENTS
import Header from './components/header'
//import Newslist from './components/temporal';
import Newslist from './components/newsList';

class App extends Component {   

    state = {
        news : JSON
    }

    render(){
         
        return (<div>
                    <Header />
                    <Newslist news={this.state.news}>
                        <h1>The news are:</h1>
                 
                    </Newslist>
                </div> 
                )

    }
    
}

ReactDOM.render(<App />, document.getElementById('root'));