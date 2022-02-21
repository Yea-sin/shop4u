import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const handleForm = (e) => {
    e.preventDefault();
  };
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
                    type="email"
                    className="form-control"
                    id="Email"
                    placeholder="Email"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="password"
                  />
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="btn btn-color px-5 mb-5 w-100">
                    Register
                  </button>
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