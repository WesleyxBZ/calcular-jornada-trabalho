import React from 'react';
import Header from './components/Header';
import './App.css';
import FormTime from './components/PeriodForm';

const App = () => {
    return (
        <div className="App">
            <Header/>
            <FormTime/>
        </div>
    );
}

export default App;
