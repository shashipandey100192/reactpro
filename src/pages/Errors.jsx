import React from 'react'
import { Link } from 'react-router-dom';


function Errors() {
  return (
    // <div className='container'>
    //     <div className='row'>
    //         <div className='col-12 text-center'>
    //             <h1>404</h1>
    //                 <p>Page Not Found</p>
    //         </div>
    //     </div>
    // </div>
    <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center bg-light">
      <div className="text-center p-4">

        <h1 className="display-1 fw-bold text-primary">
          404
        </h1>

        <div className="mb-3">
          <span className="badge bg-danger fs-6">
            Page Not Found
          </span>
        </div>

        <h2 className="fw-bold mb-3">
          Oops! Something Went Wrong
        </h2>

        <p className="text-secondary mb-4">
          The page you are looking for does not exist,
          may have been moved, or is temporarily unavailable.
        </p>

        <div className="d-flex justify-content-center gap-3 flex-wrap">
          <Link to="/" className="btn btn-primary px-4">
            <i className="bi bi-house-door"></i> Go Home
          </Link>

          <button
            className="btn btn-outline-secondary px-4">
            Go Back
          </button>
        </div>

        <p className="text-muted mt-5 small">
          Error Code: 404 | Page Not Found
        </p>

      </div>
    </div>
  );
}

export default Errors