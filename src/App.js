import React from 'react';
import './App.css';
import {TextField} from '@material-ui/core';

class App extends React.Component {

    calculate = (value) => {
        let SPARE_SCORE = 10, SPARE_SYMBOL = '/';

        let output = 0;
        let scores = value.replace(/\-/g, '0').split('');
        scores.forEach(function (score, index) {
            if (score === SPARE_SYMBOL) {
                output += SPARE_SCORE - parseInt(scores[index - 1]);
            } else {
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

    onChange = (event) => {
        this.setState({
            value: this.calculate(event.target.value)
        });
    };

    render() {
        return (
            <div className="App">
                <header className="App-header">Hackathon Bowling Kata</header>
                <TextField id="input" variant="filled" label="Input" onChange={this.onChange}/>
                <TextField id="output" variant="outlined" readOnly={true} value={this.state.value}/>
            </div>
        )
    };
}

export default App;
