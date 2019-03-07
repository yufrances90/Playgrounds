import React, { Component } from 'react';

import {
    Typography,
    Divider
} from '@material-ui/core';
import {
    LocationCity,
    LocationOn
} from '@material-ui/icons';

class CPlayground extends Component {
    render() {

        const { selectedPlayground } = this.props;

        return (
            <div className="pg-container">
                <Typography variant="h3">
                    {selectedPlayground.name}
                </Typography>
                <Divider />
                <p>
                    <LocationCity /> {selectedPlayground.address}
                </p>
                <p>
                    <LocationOn /> Longitude: {selectedPlayground.coords.lng}, Latitude: {selectedPlayground.coords.lat}
                </p>
            </div>
        );
    }
}

export default CPlayground;