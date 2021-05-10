import React, { useState } from 'react';
import './App.css';
import Header from '../Header/Header';
import SearchBox from '../SearchBox/SearchBox';
import ResultsContainer from '../ResultsContainer/ResultsContainer';

const name = require('@rstacruz/startup-name-generator');

//USE of hooks
const App = () => {
    const [headerText] = useState('Name it!');
    const [headerExpanded, setHeaderExpanded] = useState(true);
    const [suggestedNames, setSuggestedNames] = useState([]);

    const handleInputChange = (inputText) => {
        setHeaderExpanded(!inputText);
        setSuggestedNames(inputText ? name(inputText) : []);
    };

    return (
        <div>
            <Header headerExpanded={headerExpanded} headerTitle={headerText} />
            <SearchBox onInputChange={handleInputChange} />
            <ResultsContainer suggestedNames={suggestedNames} />
        </div>
    );
};

/*class App extends React.Component {
    state = {
        headerText: 'Name it!',
        headerExpanded: true,
        suggestedNames: [],
    };
    handleInputChange = (inputText) => {
        this.setState({
            headerExpanded: !inputText,
            suggestedNames: inputText ? name(inputText) : [],
        });
    };
    render() {
        return (
            <div>
                <Header
                    headerExpanded={this.state.headerExpanded}
                    headerTitle={this.state.headerText}
                />
                <SearchBox onInputChange={this.handleInputChange} />
                <ResultsContainer suggestedNames={this.state.suggestedNames} />
            </div>
        );
    }
}*/

export default App;
