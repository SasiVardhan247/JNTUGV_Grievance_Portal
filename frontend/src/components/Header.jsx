import React from "react";
import Logo from "./Logo";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Header = () => {
  const r_token = localStorage.getItem("r_token");
  const navigate = useNavigate();
  return (
    <div>
      <div className='fixed-top'>
        <ToastContainer />
      </div>
      <header id="header">
        <Logo />
        <div className="container d-flex align-items-center justify-content-center">
          <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mb-2 mb-lg-0 gap-5">
                  <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="/">Home</a>
                  </li>
                  {
                    !r_token && <li className="nav-item">
                      <a className="nav-link" aria-current="page" href="#">About</a>
                    </li>
                  }
                  {
                    !r_token && <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Login
                      </a>
                      <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="/login">Registrar</a></li>
                      </ul>
                    </li>
                  }
                  {
                    !r_token && <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Services
                      </a>
                      <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="/grievanceForm">Apply for Grievance</a></li>
                        <li><a className="dropdown-item" href="/checkstatus">Check status</a></li>
                      </ul>
                    </li>
                  }
                  {
                    !r_token && <li className="nav-item">
                      <a className="nav-link" href="#contact">Contact Us</a>
                    </li>
                  }
                  {
                    r_token && <li className="nav-item">
                      <a className="nav-link" href="#" onClick={(e) => {
                        e.preventDefault();
                        localStorage.removeItem("r_token");
                        toast.info(`Logging out`, {
                          position: "top-right",
                          autoClose: 1000,
                          hideProgressBar: false,
                          closeOnClick: false,
                          pauseOnHover: false,
                          draggable: false,
                          progress: 0,
                          theme: "colored",
                        });
                        setTimeout(() => {
                          navigate("/");
                        }, 1500)
                      }}>Logout</a>
                    </li>
                  }
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
