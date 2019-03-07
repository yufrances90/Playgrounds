import React, { Component } from 'react';

import './App.css';

import CNavbar from './components/CNavbar';
import PGeocoding from './pages/PGeocoding';

class App extends Component {
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
