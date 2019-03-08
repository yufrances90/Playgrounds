import React, { Component } from 'react';

import {
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Grid
} from '@material-ui/core';

import DateFnsUtils from '@date-io/date-fns';
import { 
    MuiPickersUtilsProvider, 
    DatePicker 
} from 'material-ui-pickers';

class CSearchBox extends Component {

    render() {
        return (
            <form>
                <FormControl className="form-control">
                    <InputLabel htmlFor="playground-select">
                        Select Playground
                    </InputLabel>
                    <Select
                        inputProps={{
                            name: 'playground',
                            id: 'playground-select',
                        }}
                    >
                        <MenuItem>
                            Hello World
                        </MenuItem>
                    </Select>
                </FormControl>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Grid container>
                        <Grid item xs={12}>
                            <DatePicker
                                margin="normal"
                                label="End Date"
                                fullWidth
                            />
                        </Grid>
                    </Grid>
                </MuiPickersUtilsProvider>
            </form>
        );
    }
}

export default CSearchBox;