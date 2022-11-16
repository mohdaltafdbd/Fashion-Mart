import React from 'react'
import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import {Link} from "react-router-dom"
import pic from "../assets/images/user.jpg"
function createData(key, value) {
    return { key, value };
}

const rows = [
    createData('Name', 'altaf'),
    createData('Username', 'altafdbd'),
    createData('Email', 'al@gmail.com'),
    createData('Phone', '8937865552'),
    createData('Address Line no 1', 'House no 25'),
    createData('Address Line no 2', 'Bairoon kotla'),
    createData('Address Line no 3', 'Deoband'),
    createData('Pin', '247554'),
    createData('City', 'Saharanpur'),
    createData('State', 'UP'),
];


export default function Profile() {
    return (
        <>
            <Grid container spacing={2}>
                <Grid item md={6} xs={12} >
                    <img src={pic} className="w-100" height="465px" />
                </Grid>
                <Grid item md={6} xs={12} >
                    <h5 className='background text-light text-center p-2'>User Profile Section</h5>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: '100%' }} aria-label="simple table" className="table table-striped table-hover">
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow
                                        key={row.key}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {row.key}
                                        </TableCell>
                                        <TableCell align="left">{row.value}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <Link to="#" className='btn background text-light text-center w-100 btn-sm'>Update Profile</Link>
                </Grid>
            </Grid>
        </>
    )
}
