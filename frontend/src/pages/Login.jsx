import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
const Login = () => {
  return (
    <div>
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
            <input type="password" className="form-control" placeholder="" aria-label="Username" aria-describedby="basic-addon1" required={true} />
          </div>
          <div className='text-center mb-5'>
            <button type="submit" class="btn btn-primary">Login</button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  )
}

export default Login