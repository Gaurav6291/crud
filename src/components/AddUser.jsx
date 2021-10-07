import { Button, FormControl, FormGroup, Input, InputLabel, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React, { useState } from 'react'
import { addUser } from '../Service/api'

const useStyle = makeStyles({
    container:{
        width: '50% !important',
        margin: '5% auto',

    }
})

const initialValues = {
    name: '',
    username: '',
    email: '',
    phone: ''
}

const AddUser = () => {

    const [user, setUser] = useState(initialValues);
    const { name, username, email, phone } = user;

    const classes = useStyle();
    const onValueChange = (e) => {
    //    console.log(e.target.value)
        setUser({ ...user, [e.target.name]:e.target.value});
    }
const addUserDetails = async () => {
    await addUser(user);
}
    return (
        <FormGroup className={classes.container}>
            <Typography variant="h4">Add User</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='name' value={name} />
            </FormControl>
            <FormControl>
                <InputLabel>Username</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='username' value={username} />
            </FormControl>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='email' value={email} />
            </FormControl>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='phone' value={phone} />
            </FormControl>
           
            <Button onClick={()=>{addUserDetails()}} variant="contained" color="primary">Add User</Button>
        </FormGroup>
    )
}

export default AddUser
