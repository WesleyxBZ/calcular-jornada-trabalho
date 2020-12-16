import React from 'react';
import Header from './components/Header';
import './App.css';
import PeriodForm from './components/PeriodForm';
import {Provider} from 'react-redux';
import {store} from './store/store';
import PeriodView from './components/PeriodView';

const App = () => {
    return (
        <Provider store={store}>
            <div className="App">
                <Header/>
                <PeriodForm/>
                <PeriodView/>
            </div>
        </Provider>
    );
}

export default App;
