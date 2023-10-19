import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import Header from '../components/Header'
import Footer from '../components/Footer'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [password,setPassword] = useState("");
  const [isLoading , setLoading] = useState(false);
  const navigate = useNavigate();

  const checksum = function () {
    if (password !== "") {
        return true
    }
    return false;
  }

  const login = async()=>{
    setLoading(true);
    const params = {
      password
    }        
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/auth/login`, { params });
    setLoading(false);
    localStorage.setItem("r_token",response.data.token)
    if (response.data.status) {
      toast.success(`Welocme Home Registar !!!`, {
          position: "top-right",
          autoClose: 60000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: false,
          draggable: false,
          progress: 0,
          theme: "colored",
      });
      setPassword("")
      setTimeout(() => {
        navigate('/')
      }, 2000);
  }
  else {
      toast.error("Server error! Try again after some time", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: 0,
          theme: "colored",
      });
  }
  }

  return (
    <div>
      <div className='fixed-top'>
          <ToastContainer />
      </div>
      <Header />
      <div className='text-center mt-5'>
        <p className='fs-3 fw-bold'>Registrar Login</p>
        <p className='required'>Fill all the fields with * mark</p>
      </div>
      <div className='container mt-2 col-lg-4  col-sm-12 '>
        <form action="" >
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">User</span>
            <input type="text" className="form-control" placeholder="" value={"Registrar"} aria-label="Username" aria-describedby="basic-addon1" disabled />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1"><span className='required'>*</span>Password</span>
            <input type="password" name="password"  value={password} className="form-control" placeholder="" aria-label="Username" aria-describedby="basic-addon1" required={true} onChange={(e)=>setPassword(e.target.value)}/>
          </div>
          <div className='text-center mb-5'>
            <button type="submit" class={`btn btn-primary ${isLoading || (!checksum() && "disabled")}`} onClick={(e) => {
              e.preventDefault()
              if (checksum()) {
                  login();
              }
              else {
                  toast.error("Please enter all fields", {
                      position: "top-right",
                      autoClose: 5000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: false,
                      draggable: false,
                      progress: 0,
                      theme: "colored",
                  });
              }
              }}>
                { isLoading && <span class="spinner-border spinner-border-sm" aria-hidden="true"></span> }
                { !isLoading && "Login" }
              </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  )
}

export default Login