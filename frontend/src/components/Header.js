import { AppBar, Typography, Toolbar, Box, Button, Tabs, Tab, Drawer, useMediaQuery, useTheme } from "@mui/material"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom"
import { authActions } from "../store/store";
import Drawercomp from "./Drawer";
const Header = () => {
    const dispath = useDispatch()
    const [value, setvalue] = useState();


    const isLoggedIn = useSelector(state => state.isLoggedIn);
    console.log(isLoggedIn)
    const theam = useTheme()
    const isMatch = useMediaQuery(theam.breakpoints.down("md"));

    return (
        <div className="font-extrabold text-opacity-60">
            <AppBar position="sticky" sx={{ background: " radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(233,148,231,1) 41%, rgba(203,151,199,1) 56%)" }}>
                <Toolbar>

                    {
                        isMatch ?
                            <> 
                                <Typography className="text-center bg-red-200 w-[50%] text-7xl">
                                  WomenHelpline
                                </Typography>
                                <Drawercomp />
                             </>



                    : ( <>


                        <Typography variant="h4" color={"White"} >
                            "WomenHelpline"
                        </Typography>
                        
                        {isLoggedIn && <Box display="flex" marginLeft={'auto'}>
                            <Tabs value={value} onChange={(e, val) => setvalue(val)}>



                            </Tabs>
                        </Box>}

                        <Box display="flex" marginLeft={'auto'}>
                            <Tabs value={value} onChange={(e, val) => setvalue(val)}>
                                <Tab label="Home" to="/home" component={Link} />
                                <Tab label="Laws" to="/laws" component={Link} />
                                <Tab label="Helpline" to="/Helpline" component={Link} />
                                <Tab label="SaftyTips" to="/Saftytips" component={Link} />
                                <Tab label="AboutUs" to="/Aboutus" component={Link} />
                                {(isLoggedIn) && <Tab label="Complaint" to="/Complaint" component={Link} />}
                         




                            </Tabs>
                        </Box>

                        <Box display="flex" marginLeft="auto" >
                            {(!isLoggedIn) && <>       <Button LinkComponent={Link} to="/login" variant="contained" sx={{ margin: 1, borderRadious: 10 }} color="warning">Admin</Button>

                            </>}
                            {(isLoggedIn) && <>     <Button onClick={() => dispath(authActions.logout())} LinkComponent={Link} to="/login" variant="contained" sx={{ margin: 1 }} color="warning">Logout</Button>
                            </>}

                            {(!isLoggedIn) && <Button LinkComponent={Link} to="/DoDoComplaint" variant="contained" sx={{ margin: 1 }} color="primary">Add-Complaint</Button>


                            }
                        </Box>
                    </>
                    )
                

                        }
                            

                </Toolbar>
               

            </AppBar>
        </div>
    )
}

export default Header
