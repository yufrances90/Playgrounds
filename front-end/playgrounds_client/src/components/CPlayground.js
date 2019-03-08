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

import CAddressModal from './CAddressModal';

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
            handleSubmitForm 
        } = this.props;

        const { open } = this.state;

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
                    <Button 
                        variant="outlined" 
                        color="primary"
                        onClick={this.handleClickOpen.bind(this)}
                    >
                        <Edit /> Edit
                    </Button>
                    <span>  </span>
                    <Button variant="outlined" color="secondary">
                        <Delete /> Delete
                    </Button>
                </div>
                <CAddressModal 
                    open={open}
                    handleClose={this.handleClose.bind(this)}
                    handleSubmitForm={handleSubmitForm}
                    playground={selectedPlayground}
                />
            </div>
        );
    }
}

export default CPlayground;