import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { getUsers } from '../Service/api';
import { makeStyles } from '@mui/styles'

const useStyle = makeStyles({
    table: {
        width: '60% !imporatant',
        margin: '50px auto '
    },
    thead: {
        '& > *': {
            background: "#000000",
            color: '#ffffff !important',
            fontSize: '20px !important '
        }
    },
    row:{
        '& > *': {
        fontSize: '20px !important',
        }
    }
});

const AllUsers = () => {

const [users, setUsers] = useState([])
const classes = useStyle();

useEffect(() => {
    getAllUsers();
}, [])

    const getAllUsers = async () => {
       const response = await getUsers();
       console.log(response.data);
       setUsers(response.data);
    }
    return (
       <Table className={classes.table}>
            <TableHead>
                <TableRow className={classes.thead}>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Username</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
          
            {
                users.map((user => (
                    <TableRow className={classes.row}>
                        <TableCell>{user.id}</TableCell>
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.username}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.phone}</TableCell>
                    </TableRow>
                )))
            }
                  
            </TableBody>
       </Table>
    )
}

export default AllUsers
