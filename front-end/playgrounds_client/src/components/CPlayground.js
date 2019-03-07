import React, { Component } from 'react';

import {
    Typography,
    Divider,
    Button
} from '@material-ui/core';
import {
    LocationCity,
    LocationOn,
    Edit,
    Delete
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
                <div className="pg-details">
                <p>
                        <LocationCity /> {selectedPlayground.address}
                    </p>
                    <p>
                        <LocationOn /> Longitude: {selectedPlayground.coords.lng}, Latitude: {selectedPlayground.coords.lat}
                    </p>
                </div>
                <Divider />
                <div className="button-grp">
                    <Button variant="outlined" color="primary">
                        <Edit /> Edit
                    </Button>
                    <span>  </span>
                    <Button variant="outlined" color="secondary">
                        <Delete /> Delete
                    </Button>
                </div>
            </div>
        );
    }
}

export default CPlayground;