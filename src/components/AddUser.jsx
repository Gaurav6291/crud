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
    age: '',
    gender: '',
    city: ''
}

const AddUser = () => {

    const [user, setUser] = useState(initialValues);
    const { name, age, gender, city } = user;

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
                <InputLabel>Age</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='age' value={age} />
            </FormControl>
            <FormControl>
                <InputLabel>Gender</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='gender' value={gender} />
            </FormControl>
            <FormControl>
                <InputLabel>City</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='city' value={city} />
            </FormControl>
           
            <Button onClick={()=>{addUserDetails()}} variant="contained" color="primary">Add User</Button>
        </FormGroup>
    )
}

export default AddUser
