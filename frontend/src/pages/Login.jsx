import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [password, setPassword] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const [status, setStatus] = useState(false);
  const checksum = function () {
    if (password !== "") {
      return true;
    }
    return false;
  };
  const handleChange = (e) => {
    const { value, id } = e.target;
    const nextInput = parseInt(id.substring(3)) + 1;
    setOtp((prev) => {
      return {
        ...prev,
        [id]: value,
      };
    });
    const nextInputElement = document.querySelector(`#otp${nextInput}`);
    if (nextInputElement && value.length === e.target.maxLength) {
      nextInputElement.focus();
    }
  };

  const login = async () => {
    setLoading(true);
    const params = {
      password,
    };
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/auth/login`,
        { params }
      );
      setLoading(false);
      // localStorage.setItem("status", response.data.status);

      toast.success(response.data.msg, {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false,
        progress: 0,
        theme: "colored",
      });
      setStatus(response.data.status);
      // setPassword("")
      // setTimeout(() => {
      //   navigate("/login");
      // }, 1500);
    } catch (err) {
      setLoading(false);
      toast.error(err.response.data.msg, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: 0,
        theme: "colored",
      });
      // localStorage.setItem("status", err.response.data.status);
      console.log(err.response.data.status);
      setStatus(err.response.data.status);
      setPassword("");
      navigate("/login");
    }
  };

  const handleotp = async () => {
    const finalOtp = Object.values(otp).join("");
    const params = {
      finalOtp,
    };
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/auth/verify`,
        { params }
      );
      // setLoading(false);
      setStatus(false);
      await localStorage.setItem("r_token", response.data.token);
      setOtp("");
      toast.success(response.data.msg, {
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
      }, 1500);
    } catch (err) {
      // setLoading(false);
      console.error(err);
      // setStatus(false)
      toast.error(err.response.data.msg, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: 0,
        theme: "colored",
      });
      setOtp("");
      setTimeout(() => {
        navigate("/login");
      }, 1500);
    }
  };

  return (
    <div>
      <div className="fixed-top">
        <ToastContainer />
      </div>
      <Header />
      <div className="text-center mt-5">
        <p className="fs-3 fw-bold">Registrar Login</p>
        <p className="required">Fill all the fields with * mark</p>
      </div>
      <div className="container mt-2 col-lg-4  col-sm-12 ">
        <form action="">
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              User
            </span>
            <input
              type="text"
              className="form-control"
              placeholder=""
              value={"Registrar"}
              aria-label="Username"
              aria-describedby="basic-addon1"
              disabled
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              <span className="required">*</span>Password
            </span>
            <input
              type="password"
              name="password"
              value={password}
              className={`form-control`}
              placeholder=""
              aria-label="Username"
              aria-describedby="basic-addon1"
              required={true}
              onChange={(e) => setPassword(e.target.value)}
              disabled={status}
            />
          </div>
          {!status && (
            <div className="text-center mb-5">
              <button
                type="submit"
                className={`btn btn-primary ${
                  isLoading || (!checksum() && "disabled")
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  if (checksum()) {
                    login();
                  } else {
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
                }}
              >
                {isLoading && (
                  <span
                    class="spinner-border spinner-border-sm"
                    aria-hidden="true"
                  ></span>
                )}
                {!isLoading && "Generate OTP"}
              </button>
            </div>
          )}
        </form>
        {status && (
          <form>
            <div
              className="container-fluid"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <small>
                {" "}
                <i className="fa-solid fa-check mx-1 text-success"></i>OTP sent
                successfully!{" "}
              </small>
            </div>
            <div className="container-fluid d-flex flex-row justify-content-center align-items-center mt-2">
              <input
                type="text"
                maxLength="1"
                id="otp1"
                value={otp.otp1 || ""}
                className="form-control input1 text-dark"
                required
                autoComplete="new"
                autoFocus
                onChange={handleChange}
              />
              <input
                type="text"
                maxLength="1"
                id="otp2"
                value={otp.otp2 || ""}
                className="form-control input1 text-dark"
                required
                autoComplete="new"
                onChange={handleChange}
              />
              <input
                type="text"
                maxLength="1"
                id="otp3"
                value={otp.otp3 || ""}
                className="form-control input1 text-dark"
                required
                autoComplete="new"
                onChange={handleChange}
              />
              <input
                type="text"
                maxLength="1"
                id="otp4"
                value={otp.otp4 || ""}
                className="form-control input1 text-dark"
                required
                autoComplete="new"
                onChange={handleChange}
              />
              <input
                type="text"
                maxLength="1"
                id="otp5"
                value={otp.otp5 || ""}
                className="form-control input1 text-dark"
                required
                autoComplete="new"
                onChange={handleChange}
              />
              <input
                type="text"
                maxLength="1"
                id="otp6"
                value={otp.otp6 || ""}
                className="form-control input1 text-dark"
                required
                autoComplete="new"
                onChange={handleChange}
              />
            </div>

            <div
              className="container-fluid my-4"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <button
                className="btn btn-primary"
                onClick={(e) => {
                  e.preventDefault();
                  handleotp();
                }}
              >
                Verify OTP
              </button>
            </div>

            <div className="container-fluid my-4 text-center">
              <p className="fs-6">Didn't receive any OTP?</p>
              <button
                className="btn btn-primary"
                onClick={(e) => {
                  e.preventDefault();
                  login();
                }}
              >
                Resend
              </button>
            </div>
          </form>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Login;
