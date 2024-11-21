import { Box, Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import axios from "axios"
import { useDispatch } from 'react-redux'
import { authActions } from '../store/store'
import { useNavigate } from 'react-router-dom'
const Login = () => {

  const navigate = useNavigate()

    const dispath = useDispatch();

  const [inputs, setinputs] = useState({
    name: "", email: "", password: ""
  })
  const hadleChange = (e) => {
    setinputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const sendRequest = async (type = "login") => {
    const res = await axios.post(`http://localhost:5000/api/user/${type}`, {
    name : inputs.name,  
    email: inputs.email,
      password: inputs.password
    }).catch(err => console.log(err));
    const data = await res.data;
    return data;
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(inputs)
    if(isSignup){
      sendRequest("signup").then(()=> dispath(authActions.login())).then(()=>navigate("/complaint")).then(data=>console.log(data))
    }
    else{
      sendRequest().then(()=> dispath(authActions.login())).then(()=>navigate("/complaint")).then(data=>console.log(data))
    }
  }
  const [isSignup, setisSignup] = useState(false)
  return (
    <div className="w-auto h-auto justify-center leading-10 className='bg-red-100  m-auto pt-28 space-y-36 ' ">
      <form onSubmit={handleSubmit} >
        <Box display={"flex"} width={"auto"} height={"auto"} flexDirection={"column"} alignItems={"center"} justifyContent={"center"} boxShadow={"10px 10px 10px 10px #ccc "} margin={'auto'} marginLeft={2} marginRight={2} marginTop={9}  >
          <Typography className='text-[30px] font-serif'>
            {isSignup ? "SignUp" : <div className='text-[40px] font-mono '>"Login"</div>}
          </Typography>
          {(isSignup) &&
            <TextField   name="name" onChange={hadleChange} value={inputs.name} type='text' placeholder='Name' sx={{ borderRadius: 2, margin: 1 }} margin='normal'></TextField>}
          <TextField name="email" onChange={hadleChange} value={inputs.email} type='email' placeholder='email' sx={{ borderRadius: 7, margin: 1 }} margin='normal'></TextField>
          <TextField name="password" onChange={hadleChange} value={inputs.password} type='password' placeholder='password' sx={{ borderRadius: 7, margin: 1 }} margin='normal'></TextField>
          <Button type="submit" sx={{ borderRadius: 7, margin: 1 }} variant='contained'>Submit</Button>
          <Button onClick={() => setisSignup(!isSignup)} sx={{ borderRadius: 7, margin: 1 }} margin='normal' variant='contained'>Chnge to {isSignup ? "Login " : "signup"}</Button>

        </Box>
      </form>
    </div>
  )
}

export default Login
