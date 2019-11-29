import React from 'react';
import './App.css';
import {TextField} from '@material-ui/core';

class App extends React.Component {

    calculate = (value) => {
        let output = 0;
        let scores = value.split('');
        scores.forEach(function (score) {
            if (score !== '-') {
                output += parseInt(score);
            }
        });
        return output;
    };

    constructor(props) {
        super(props);
        this.state = {
            value: '',
        };
        this.onChange = this.onChange.bind(this);
    }

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Hello World! V2
      </header>
    </div>
  );
}

export default App;
