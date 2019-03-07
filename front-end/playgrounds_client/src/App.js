import React, { Component } from 'react';

import './App.css';

import CNavbar from './components/CNavbar';
import PGeocoding from './pages/PGeocoding';

import {
    getResponseFromServer
} from './utils/apiUtils';

class App extends Component {

    componentDidMount() {
        getResponseFromServer();
    }

    render() {
        return (
            <div className="App">
                <CNavbar />
                <div className="body">
                    <PGeocoding />
                </div>
            </div>
        );
    }
}

export default App;
