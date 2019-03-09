import React, { Component } from 'react';

import {
    Typography,
    Divider,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    LinearProgress
} from '@material-ui/core';

class CWeatherDetails extends Component {
    render() {

        const { data, playground } = this.props;

        if (data === undefined || playground === undefined) {
            return <LinearProgress />
        }

        const { headerData, mainData } = data;

        return (
            <div className="wh-container">
                <Typography variant="h3">
                    {playground.name}
                </Typography>
                <Divider />
                <Table className="wh-table">
                    <TableHead>
                        <TableRow>
                            <TableCell>
                            </TableCell>
                            {headerData.map(element => (
                                <TableCell key={element}>
                                    {element}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {mainData.map((arr, index) => (
                            <TableRow key={index}>
                                {arr.map((element, index1) => (
                                    <TableCell key={`${arr[0]}-${index1}`}>
                                        {element}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        );
    }
}

export default CWeatherDetails;