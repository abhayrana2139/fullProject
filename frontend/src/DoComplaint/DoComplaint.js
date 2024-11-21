import { Box, Button, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const DoComplaint = () => {





    const navigate = useNavigate()

    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        title: "",
        description: "",
        image: ""
    });



    const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };




    const sendRequest = async () => {
        const res = await axios
            .post("http://localhost:5000/api/complaint/addComplaint", {
                name: inputs.name,
                email: inputs.email,
                title: inputs.title,
                description: inputs.description,
                image : inputs.image
            })
            .catch((err) => console.log(err));
        const data = await res.data;
        return data;

    };



    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputs);
        sendRequest()
            .then((data) => console.log(data)).then(() => alert('Complain registered')).then(() => navigate("/registered"))
        



         

    };





  


    return (
        <div className='bg-yellow-300 h-auto w-auto  m-auto  '>
            <form onSubmit={handleSubmit}>

                <Box display={"flex"} flexDirection={"column"} alignItems={"center"} justifyContent={"center"} boxShadow={"10px 10px 10px 10px #ccc "} margin={'auto'} padding={3} marginBottom={6} marginTop={6}>
                    <Typography className='bg-red- font-sans '>
                        <div className='text-4xl'>ADD Complaint</div>
                    </Typography>

                    <TextField onChange={handleChange} label="Victom Name" sx={{ borderRadius: 2, margin: 1 }} margin='normal' name="name" placeholder='Name Of Victom'>Victom Name</TextField>
                    <TextField onChange={handleChange} label="email" sx={{ borderRadius: 2, margin: 1 }} margin='normal' name="email" placeholder='Name Of Faulty'>email</TextField>
                    <TextField onChange={handleChange} label="title" sx={{ borderRadius: 2, margin: 1 }} margin='normal' name="title" placeholder=' title'>Complaint Title</TextField>
                    <TextField type='text' onChange={handleChange} label="complaint_description" sx={{ borderRadius: 2, margin: 1 }} margin='normal' name="description" placeholder='complaint description'>Complaint Description</TextField>


            

                    <Button variant='contained' type='Submit'> Submit</Button>

                </Box>

            </form>

        </div>             
     
    )
}

export default DoComplaint