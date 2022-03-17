import React, { useRef } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../../Hooks/useAuth";

const Register = () => {
  const emailRef = useRef();
  const passRef = useRef();
  const handleForm = (e) => {
    const email = emailRef.current.value;
    const pass = passRef.current.value;
    register(email, pass)
    e.preventDefault();
  };
  const { singInUsingGoogle, user, register } = useAuth();
  return (
    <>
      <div className="container my-5">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <h2 className="text-center text-dark mt-5">Please Register</h2>
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
                    Register
                  </button>
                  <p>-------------or-----------</p>
                  <Button
                    onClick={singInUsingGoogle}
                    className="mb-3"
                    variant="outline-info">
                    Register with google
                  </Button>{" "}
                </div>
                <div
                  id="emailHelp"
                  className="form-text text-center mb-5 text-dark">
                  Already have an account?{" "}
                  <Link to="/login" className="text-dark fw-bold">
                    {" "}
                    Log In
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
