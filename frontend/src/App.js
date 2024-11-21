import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import React from "react";
import Blogs from "./components/Blogs";
import UserBlog from "./components/UserBlog";
import AddBlog from "./components/AddBlog";
import Login from "./components/Login";
import Home from "./components/womenhelp/Home"
import Helpline from "./components/womenhelp/Helpline"
import Laws from "./components/womenhelp/Laws"
import Register from "./components/register";
import { useSelector } from "react-redux";
import Complaints from "./components/Complaints";
import DoComplaint from "./DoComplaint/DoComplaint";
import Aboutus from "./components/womenhelp/Aboutus"
import Footer from "./components/womenhelp/Footer"
import Registered from "./components/Registered";
import DoDocomplaint from "./DoComplaint/DoDocomplaint";
import SaftyTips from "./components/SaftyTips";
import left from "./images/left.png"
import right from "./images/right.png"
import posh from "./images/posh.png"
import mp from "./images/mp.png"
import SComplaints from "./components/SComplaints";
function App() {
  const isLoggedIn = useSelector(state => state.isLoggedIn);
  console.log(isLoggedIn)
  return (

    <React.Fragment>
     <div className="w-auto h-auto overflow-clip">
      <header>
        <Header />
      </header>
      
      <main className="w-[100%] h-auto m-auto">
        <Routes>
          <Route path="/login" Component={Login} />
          <Route path="/register" Component={Register} />
          <Route path="/blogs" Component={Blogs} />
          <Route path="/blogs/add" Component={AddBlog} />
          <Route path="/myblogs" Component={UserBlog} />
          <Route path="/MyBlog/:id" Component={UserBlog} />
          <Route path="/complaint" Component={Complaints} />
          <Route path="/DoComplaint" Component={DoComplaint} />
          <Route path="/DoDoComplaint" Component={DoDocomplaint} />
          <Route path='/' Component={Home} />
          <Route path='/home' Component={Home} />
          <Route path='/helpline' Component={Helpline} />
          <Route path='/laws' Component={Laws} />
          <Route path='/Saftytips' Component={SaftyTips} />


          <Route path='/Aboutus' Component={Aboutus} />
          <Route path='/registered' Component={Registered} />




        </Routes>

      </main>
      <div className="h-32 flex justify-between w-[95%] m-auto bg-yellow-5  bottom-44"> <img src={left} size= {7} /> <img src={right} size ={7} /></div>

      <footer>
        <Footer />
      </footer>
</div>

    </React.Fragment>



  );
}

export default App;
