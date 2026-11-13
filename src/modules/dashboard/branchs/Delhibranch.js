import React from 'react'

function Delhibranch(props) {
  const a = localStorage.getItem("mylocaldata");
  return (
    <div className='container-fluid bg-success'>
        <div className='row'>
            <div className='col-12 p-5'>
                <h4>skdfh</h4>
                {a}
                <p>Username: {props.xyz}</p>
            </div>
        </div>
    </div>
  )
}

export default Delhibranch