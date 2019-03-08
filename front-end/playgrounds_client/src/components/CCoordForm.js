import React, { Component } from 'react';

import {
    TextField
} from '@material-ui/core';

class CCoordForm extends Component {
    render() {
        return (
            <div>
                <form>
                    <TextField
                        label="Longitude"
                        name="lng" 
                        id="lng"
                        fullWidth
                        helperText="Choose between -180 and 180"
                    />
                    <TextField
                        label="Latitude"
                        name="lat" 
                        id="lat"
                        fullWidth
                        helperText="Choose between -90 and 90"
                    />
                </form>
            </div>
        );
    }
}

export default CCoordForm;