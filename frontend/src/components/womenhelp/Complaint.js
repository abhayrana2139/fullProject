import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Complaint = () => {
  return (
    <div className='bg-yellow-300 h-[600px] w-[90%]  overflow-scroll absolute  '>
<form>

<Box display={"flex"} flexDirection={"column"} alignItems={"center"} justifyContent={"center"} boxShadow={"10px 10px 10px 10px #ccc "} margin={'auto'} padding={3} marginBottom={6} marginTop={6}>
<Typography className='bg-red-20  m-auto font-[30px] h-6 bottom-0 relative '>
  ADD Complaint
</Typography>
    <TextField  label="Victom Name" sx={{ borderRadius: 2, margin: 1 }} margin='normal' name= "name" placeholder='Name Of Victom'>Victom Name</TextField>
    <TextField label="Faulty Name" sx={{ borderRadius: 2, margin: 1 }} margin='normal' name= "FaultyName" placeholder='Name Of Faulty'>Faulty Name</TextField>
    <TextField label="Complaint Title" sx={{ borderRadius: 2, margin: 1 }} margin='normal' name= "title" placeholder='complaint title'>Complaint Title</TextField>
    <TextField label="complaint description" sx={{ borderRadius: 2, margin: 1 }} margin='normal' name= "description" placeholder='complaint description'>Complaint Description</TextField>

    <Button  variant='contained' type='Submit'> Submit</Button>

</Box>
    
</form>
    
    </div>
  )
}

export default Complaint
