import React, { Component } from 'react';

import {
    Switch,
    Route
} from 'react-router-dom';

import {
    connect
} from 'react-redux';

import './App.css';

import CNavbar from './components/CNavbar';
import PNewPlayground from './pages/PNewPlayground';
import PListPlaygrounds from './pages/PListPlaygrounds';
import PWeather from './pages/PWeather';
import PNear from './pages/PNear';

import {
    handleSetGoogleApiKey
} from './actions/googleApiKey';

class App extends Component {

    componentDidMount() {
        this.props.dispatch(handleSetGoogleApiKey())
    }

    render() {
        return (
            <div className="App">
                <CNavbar />
                <div className="body">
                    <Switch>
                        <Route 
                            exact 
                            path="/" 
                            component={PListPlaygrounds} 
                        />
                        <Route 
                            path="/create"
                            component={PNewPlayground} 
                        />
                        <Route 
                            path="/weather" 
                            component={PWeather} 
                        />
                        <Route 
                            path="/near" 
                            component={PNear} 
                        />
                    </Switch>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ googleApiKey }) => {
    return {
        googleApiKey
    };
}

export default connect(mapStateToProps)(App);
