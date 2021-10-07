import { Button, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { getUsers } from '../Service/api';
import { deleteUser } from '../Service/api';
import { makeStyles } from '@mui/styles'
import {Link, useParams} from 'react-router-dom';

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
const { id } = useParams();
useEffect(() => {
    getAllUsers();
}, [])

    const getAllUsers = async () => {
       const response = await getUsers();
       console.log(response.data);
       setUsers(response.data);
    }
    const deleteUserData = async (id) => {
        await deleteUser(id);
        getAllUsers();
    }
    return (
       <Table className={classes.table}>
            <TableHead>
                <TableRow className={classes.thead}>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Age</TableCell>
                    <TableCell>Gender</TableCell>
                    <TableCell>City</TableCell>
                    <TableCell></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
          
            {
                users.map((user => (
                    <TableRow className={classes.row}>
                        <TableCell>{user.id}</TableCell>
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.age}</TableCell>
                        <TableCell>{user.gender}</TableCell>
                        <TableCell>{user.city}</TableCell>
                        <TableCell>
                            <Button variant="contained" color="primary" style={{marginRight: '10px'}} component={Link} to={`/edit/${user.id}`}>Edit</Button>
                            <Button variant="contained" color="secondary" onClick={() => deleteUserData(user.id)}>Delete</Button>
                        </TableCell>
                    </TableRow>
                )))
            }
                  
            </TableBody>
       </Table>
    )
}

export default AllUsers
