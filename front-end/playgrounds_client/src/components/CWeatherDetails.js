import React, { Component } from 'react';

import {
    Typography,
    Divider,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell
} from '@material-ui/core';

class CWeatherDetails extends Component {
    render() {
        return (
            <div className="wh-container">
                <Typography variant="h3">
                    Playground1
                </Typography>
                <Divider />
                <Table className="wh-table">
                    <TableHead>
                        <TableRow>
                            <TableCell>
                            </TableCell>
                            <TableCell align="right">
                                03-02
                            </TableCell>
                            <TableCell align="right">
                                03-03
                            </TableCell>
                            <TableCell align="right">
                                03-04
                            </TableCell>
                            <TableCell align="right">
                                03-05
                            </TableCell>
                            <TableCell align="right">
                                03-06
                            </TableCell>
                            <TableCell align="right">
                                03-07
                            </TableCell>
                            <TableCell align="right">
                                03-08
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>
                                Hello
                            </TableCell>
                            <TableCell align="right">
                                1
                            </TableCell>
                            <TableCell align="right">
                                2
                            </TableCell>
                            <TableCell align="right">
                                3
                            </TableCell>
                            <TableCell align="right">
                                4
                            </TableCell>
                            <TableCell align="right">
                                5
                            </TableCell>
                            <TableCell align="right">
                                6
                            </TableCell>
                            <TableCell align="right">
                                7
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        );
    }
}

export default CWeatherDetails;