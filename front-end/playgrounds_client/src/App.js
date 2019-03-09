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
import PNear from './pages/PNear';

import {
    getGoogleApiKey
} from './utils/apiUtils';

class App extends Component {

    state = {
        googleApiKey: undefined
    }

    async componentDidMount() {

        const response = await getGoogleApiKey();

        this.setState({
            googleApiKey: response["google_api_key"]
        });
    }

    render() {

        const { googleApiKey } = this.state;
        
        return (
            <div className="App">
                <CNavbar />
                <div className="body">
                    <Switch>
                        <Route 
                            exact 
                            path="/" 
                            component={() => <PListPlaygrounds googleApiKey={googleApiKey} />} 
                        />
                        <Route 
                            path="/create"
                            component={() => <PNewPlayground googleApiKey={googleApiKey} />} 
                        />
                        <Route path="/weather" component={PWeather} />
                        <Route path="/near" component={PNear} />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default App;
