import React, { Component } from 'react';

import {
    LinearProgress,
    Table,
    TableBody,
    TableRow,
    TableHead,
    TableCell
} from '@material-ui/core';

class CPTable extends Component {
    render() {

        const { playgrounds } = this.props;

        if (!playgrounds || playgrounds.length === 0) {
            return <LinearProgress />
        }

        return (
            <div className="pg-table">
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                Name
                            </TableCell>
                            <TableCell>
                                Address
                            </TableCell>
                            <TableCell>
                                Coordinates
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {playgrounds.map(playground => (
                            <TableRow key={playground._id}>
                                <TableCell>
                                    {playground.name}
                                </TableCell>
                                <TableCell>
                                    {playground.address}
                                </TableCell>
                                <TableCell>
                                    Latitude: {playground.coords.lat.toFixed(2)}, 
                                    Longitude: {playground.coords.lng.toFixed(2)}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        );
    }
}

export default CPTable;