import React, { Component } from 'react';

import {
    Switch,
    Route
} from 'react-router-dom';

import './App.css';

import CNavbar from './components/CNavbar';
import PNewPlayground from './pages/PNewPlayground';
import PListPlaygrounds from './pages/PListPlaygrounds';
import PWeather from './pages/PWeather';

class App extends Component {

    render() {
        return (
            <div className="App">
                <CNavbar />
                <div className="body">
                    <Switch>
                        <Route exact path="/" component={PListPlaygrounds} />
                        <Route path="/create" component={PNewPlayground} />
                        <Route path="/weather" component={PWeather} />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default App;
