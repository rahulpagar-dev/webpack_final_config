import React, { Component } from 'react';
import './App.scss'
import Logo from './logo.svg'
import Test from './Test.svg'

class App extends Component {

    render() {
        return (
            <div>
                <h1>Hello world!</h1>
                <Test width={500} height={500}/>
                <Test width={300} height={300}/>
            </div>
        );
    }

}

export default App;