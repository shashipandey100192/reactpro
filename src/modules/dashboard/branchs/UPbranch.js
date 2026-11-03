import React from 'react'
import Noida from './Noida'

function UPbranch(props) {
  return (
    <div className='container-fluid bg-danger'>
        <div className='row'>
            <div className='col-12 p-5'>
                <h4>skdfh</h4>
                <h4>UserName: {props.abc}</h4>
                <input type='button' value="show message" onClick={props.message}/>

                <Noida dis={props.studata}></Noida>
            </div>
        </div>
    </div>
  )
}

export default UPbranch