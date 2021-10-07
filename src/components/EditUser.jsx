import { Button, FormControl, FormGroup, Input, InputLabel, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles';
import React, { useEffect, useState } from 'react';
import { editUser, getUsers } from '../Service/api';
import { useHistory, useParams } from 'react-router-dom';

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

const EditUser = () => {

    const [user, setUser] = useState(initialValues);
    const { name, age, gender, city } = user;
    const { id } = useParams();
    const history = useHistory();
    const classes = useStyle();

    useEffect(() => {
loadUserData();
    }, []);

    const loadUserData = async () => {
       const res = await getUsers(id) 
       setUser(res.data);
    }

    const onValueChange = (e) => {
    //    console.log(e.target.value)
        setUser({ ...user, [e.target.name]:e.target.value});
    }
const editUserDetails = async () => {
    await editUser(id, user);
    history.push('./all')
}
    return (
        <FormGroup className={classes.container}>
            <Typography variant="h4">Edit User</Typography>
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
           
            <Button onClick={()=>{editUserDetails()}} variant="contained" color="primary">Edit User</Button>
        </FormGroup>
    )
}

export default EditUser
