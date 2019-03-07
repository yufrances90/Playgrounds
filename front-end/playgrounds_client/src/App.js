import React, { Component } from 'react';

import {
    Switch,
    Route
} from 'react-router-dom';

import './App.css';

import CNavbar from './components/CNavbar';
import PNewPlayground from './pages/PNewPlayground';

class App extends Component {

    render() {
        return (
            <div className="App">
                <CNavbar />
                <div className="body">
                    <Switch>
                        <Route path="/create" component={PNewPlayground} />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default App;
