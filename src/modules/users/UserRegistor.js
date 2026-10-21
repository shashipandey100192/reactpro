import React from 'react'

function UserRegistor() {
  return (
    <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center bg-light py-5">

      <div className="card border-0 shadow-lg rounded-4 overflow-hidden"
        style={{ maxWidth: "1000px", width: "100%" }}>

        <div className="row g-0">

          {/* Left Side Design */}
          <div className="col-md-4 bg-primary text-white p-4 p-lg-5 d-flex flex-column justify-content-center">
            <h1 className="fw-bold mb-3">Join Us!</h1>

            <p className="mb-4">
              Create your account and become part of our community.
            </p>

            <div className="bg-white bg-opacity-10 rounded-3 p-3">
              <h5 className="fw-semibold">Create Account</h5>
              <p className="small mb-0">
                Fill in your details to get started with us.
              </p>
            </div>
          </div>

          {/* Registration Form */}
          <div className="col-md-8 p-4 p-lg-5">

            <h2 className="fw-bold mb-2">Registration</h2>
            <p className="text-secondary mb-4">
              Please fill in the information below.
            </p>

            <form>
              <div className="row">

                {/* Username */}
                <div className="col-md-6 mb-3">
                  <label className="form-label fw-semibold">
                    Username
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter username"
                  />
                </div>

                {/* Email */}
                <div className="col-md-6 mb-3">
                  <label className="form-label fw-semibold">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="name@example.com"
                  />
                </div>

                {/* Password */}
                <div className="col-md-6 mb-3">
                  <label className="form-label fw-semibold">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter password"
                  />
                </div>

                {/* Phone */}
                <div className="col-md-6 mb-3">
                  <label className="form-label fw-semibold">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Enter phone number"
                  />
                </div>

                {/* Gender */}
                <div className="col-md-6 mb-3">
                  <label className="form-label fw-semibold">
                    Gender
                  </label>
                  <select className="form-select" defaultValue="">
                    <option value="" disabled>Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                    <option value="prefer-not-to-say">
                      Prefer not to say
                    </option>
                  </select>
                </div>

                {/* Role */}
                <div className="col-md-6 mb-3">
                  <label className="form-label fw-semibold">
                    Role
                  </label>
                  <select className="form-select" defaultValue="">
                    <option value="" disabled>Select role</option>
                    <option value="user">User</option>
                    <option value="student">Student</option>
                    <option value="teacher">Teacher</option>
                    <option value="admin">Admin</option>
                  </select>
                </div>

                {/* Comments */}
                <div className="col-12 mb-4">
                  <label className="form-label fw-semibold">
                    Comments
                  </label>
                  <textarea
                    className="form-control"
                    rows="4"
                    placeholder="Write your comments here..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="col-12">
                  <button
                    type="button"
                    className="btn btn-primary btn-lg w-100 fw-semibold"
                  >
                    Create Account
                  </button>
                </div>

              </div>
            </form>

            <p className="text-center text-secondary mt-4 mb-0">
              Already have an account?{" "}
              <a href="/login"
                className="text-primary fw-semibold text-decoration-none">
                Login
              </a>
            </p>

          </div>
        </div>
      </div>
    </div>
  );
}

export default UserRegistor





 

