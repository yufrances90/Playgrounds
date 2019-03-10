import React, { Component } from 'react';

import {
    Typography,
    Divider,
    IconButton,
    Tooltip
} from '@material-ui/core';
import {
    LocationCity,
    LocationOn,
    EditLocation,
    Delete
} from '@material-ui/icons';

import CAddressModal from './CAddressModal';
import CGoogleMap from './CGoogleMap';

class CPlayground extends Component {

    state = {
        open: false
    }

    handleClickOpen(event) {
        this.setState({
            open: true
        });
    }

    handleClose(event) {
        this.setState({
            open: false
        });
    }

    render() {

        const { 
            selectedPlayground,
            handleSubmitForm,
            handleDeletePlayground,
            googleApiKey 
        } = this.props;

        const { open } = this.state;

        const { 
            name, 
            coords,
            address 
        } = selectedPlayground;
        const { lng, lat } = coords;

        return (
            <div className="pg-container">
                <Typography variant="h3">
                    {name}
                </Typography>
                <Divider />
                <div className="pg-details">
                    <p>
                        <LocationCity /> {address}
                    </p>
                    <p>
                        <LocationOn /> 
                        Longitude: {lng.toFixed(2)}, 
                        Latitude: {lat.toFixed(2)}
                    </p>
                </div>
                <Divider />
                <div className="button-grp">
                    <Tooltip title="Edit Playground Info">
                        <IconButton 
                            variant="outlined" 
                            color="primary"
                            onClick={this.handleClickOpen.bind(this)}
                        >
                            <EditLocation /> 
                        </IconButton>
                    </Tooltip>
                    <span>  </span>
                    <Tooltip title="Delete Playground">
                        <IconButton 
                            variant="outlined" 
                            color="secondary"
                            onClick={handleDeletePlayground}
                        >
                            <Delete /> 
                        </IconButton>
                    </Tooltip>
                </div>
                <CAddressModal 
                    open={open}
                    handleClose={this.handleClose.bind(this)}
                    handleSubmitForm={handleSubmitForm}
                    playground={selectedPlayground}
                />
                <Divider />
                <CGoogleMap 
                    lng={lng}
                    lat={lat}
                    googleApiKey={googleApiKey}
                    name={name}
                />
            </div>
        );
    }
}

export default CPlayground;