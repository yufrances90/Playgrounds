import React, { Component } from 'react';

import {
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Grid,
    Button
} from '@material-ui/core';
import {
    Search
} from '@material-ui/icons';

import DateFnsUtils from '@date-io/date-fns';
import { 
    MuiPickersUtilsProvider, 
    DatePicker 
} from 'material-ui-pickers';

class CSearchBox extends Component {

    handleChangeDate(date) {
        this.props.handleDateChange(date);
    }

    handleChangePlayground(event) {
        this.props.handlePlaygroundChange(event);
    }

    handleGoBtnClick(event) {
        this.props.handleSubmit(event);
    }

    render() {

        const { 
            playgrounds, 
            selectedPId,
            selectedDate 
        } = this.props;
        
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
                        onChange={this.handleChangePlayground.bind(this)}
                        value={selectedPId}
                    >
                        {playgrounds.map(playground => (
                            <MenuItem 
                                key={playground._id}
                                value={playground._id}
                            >
                                {playground.name} [{playground.coords.lat}, {playground.coords.lng}]
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Grid container>
                        <Grid item xs={12}>
                            <DatePicker
                                keyboard
                                clearable
                                disableFuture
                                margin="normal"
                                label="End Date"
                                fullWidth
                                value={selectedDate}
                                onChange={this.handleChangeDate.bind(this)}
                            />
                        </Grid>
                    </Grid>
                </MuiPickersUtilsProvider>
                <div className="weather-search-btn">
                    <Button
                        variant="outlined"
                        onClick={this.handleGoBtnClick.bind(this)}
                        disabled={selectedPId === ''}
                    >
                        <Search /> Go!
                    </Button>
                </div>
            </form>
        );
    }
}

export default CSearchBox;