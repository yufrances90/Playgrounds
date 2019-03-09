import React, { Component } from 'react';

import {
    TextField,
    Button
} from '@material-ui/core';
import {
    Search
} from '@material-ui/icons';

class CCoordForm extends Component {

    state = {
        lngStr: "",
        latStr: ""
    }

    handleChangeValue(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmitForm(event) {
       
        const { lngStr, latStr } = this.state;

        const lng = parseFloat(lngStr);
        const lat = parseFloat(latStr);

        const coord = {
            lng,
            lat
        }

        this.props.getClosestPlaygrounds(coord);
    }

    render() {

        const { lngStr, latStr } = this.state;

        return (
            <div>
                <form>
                    <TextField
                        label="Longitude"
                        name="lngStr" 
                        id="lngStr"
                        fullWidth
                        helperText="Choose between -180 and 180"
                        value={lngStr}
                        onChange={this.handleChangeValue.bind(this)}
                    />
                    <TextField
                        label="Latitude"
                        name="latStr" 
                        id="latStr"
                        fullWidth
                        helperText="Choose between -90 and 90"
                        value={latStr}
                        onChange={this.handleChangeValue.bind(this)}
                    />
                    <div className="playgrounds-search-btn">
                        <Button 
                            variant="outlined"
                            onClick={this.handleSubmitForm.bind(this)}
                            disabled={lngStr === "" || latStr === ""}
                        >
                            <Search /> Go!
                        </Button>
                    </div>
                </form>
            </div>
        );
    }
}

export default CCoordForm;