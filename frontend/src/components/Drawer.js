import React, { useState } from "react";
import { authActions } from "../store/store";

import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tab,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
const pages = ["Products", "Services", "ABoutUs", "ContactUs"];
const DrawerComp = () => {
  const [openDrawer, setOpenDrawer] = useState(false);



  const isLoggedIn = useSelector(state => state.isLoggedIn);

  const dispath = useDispatch()


  return (
    <React.Fragment>
      <Drawer className=""

        anchor="left"

        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List>

          <ListItemButton >
            <ListItemIcon>
              <ListItemText>
                <Tab onClick={() => setOpenDrawer(!openDrawer)} label="Home" to="/home" component={Link} /><br></br>
                <Tab onClick={() => setOpenDrawer(!openDrawer)} label="Laws" to="/laws" component={Link} /><br></br>
                <Tab onClick={() => setOpenDrawer(!openDrawer)} label="Helpline" to="/Helpline" component={Link} /><br></br>
                <Tab onClick={() => setOpenDrawer(!openDrawer)} label="SaftyTips" to="/Saftytips" component={Link} /><br></br>
                <Tab onClick={() => setOpenDrawer(!openDrawer)} label="AboutUs" to="/Aboutus" component={Link} /><br></br>
                {(isLoggedIn) && <Tab onClick={() => setOpenDrawer(!openDrawer)} label="Complaint" to="/Complaint" component={Link} />}<br></br>

                {(!isLoggedIn) && <>       <Tab label="login" onClick={() => setOpenDrawer(!openDrawer)} LinkComponent={Link} to="/login" variant="contained" sx={{ margin: 1, borderRadious: 10 }} color="warning">Admin</Tab><br></br>

                </>}
                {(isLoggedIn) && <>     <Tab label="logout" onClick={() => setOpenDrawer(!openDrawer)} onClick={() => dispath(authActions.logout())} LinkComponent={Link} to="/login" variant="contained" sx={{ margin: 1 }} color="warning">Logout</Tab><br></br>
                </>}

                {(!isLoggedIn) && <Tab onClick={() => setOpenDrawer(!openDrawer)} label="submitCompaint" LinkComponent={Link} to="/DoDoComplaint" variant="contained" sx={{ margin: 1 }} color="primary">Complaint_Submit2</Tab>}<br></br>

              </ListItemText>
            </ListItemIcon>
          </ListItemButton>

        </List>
      </Drawer>
      <IconButton
        sx={{ color: "white", marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon color="white" />
      </IconButton>
    </React.Fragment>
  );
};

export default DrawerComp;