import React, { useRef } from "react";
import { Button } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import "./Login.css";

const Login = () => {
  const { singInUsingGoogle, user, isLoading, loginUser } = useAuth();
  const emailRef = useRef();
  const passRef = useRef();
  const location = useLocation();
  const navigate = useNavigate();
  const handleForm = (e) => {
    const email = emailRef.current.value;
    const pass = passRef.current.value;
    loginUser(email,pass)
    e.preventDefault();
  };
  return (
    <>
      {user?.email ? (
        <div className="p-5 my-5">
          <h2>Welcome {user.displayName}</h2>
          <p>
            <img style={{ borderRadius: "50%" }} src={user?.photoUrl} alt="" />
          </p>
        </div>
      ) : (
        <div className="container my-5">
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <h2 className="text-center text-dark mt-5">Please Login</h2>
              <div className="card my-5">
                <form
                  onSubmit={handleForm}
                  className="card-body cardbody-color p-lg-5">
                  <div className="text-center">
                    <img
                      src="https://cdn.pixabay.com/photo/2016/03/31/19/56/avatar-1295397__340.png"
                      className="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
                      width="200px"
                      alt="profile"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                    ref={emailRef}
                    name="email"
                      type="email"
                      className="form-control"
                      id="Email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                    ref={passRef}
                    name="pass"
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="password"
                    />
                  </div>
                  <div className="text-center">
                    <button type="submit" className="btn btn-color px-5 w-100">
                      Login
                    </button>
                    <p>-------------or-----------</p>
                    <Button
                      onClick={()=>singInUsingGoogle(location, navigate)}
                      className="mb-3"
                      variant="outline-info">
                      Login with google
                    </Button>{" "}
                  </div>

                  <div
                    id="emailHelp"
                    className="form-text text-center mb-5 text-dark">
                    Not Registered?{" "}
                    <Link to="/register" className="text-dark fw-bold">
                      {" "}
                      Create an Account
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
