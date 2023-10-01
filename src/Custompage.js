import React, { Fragment } from 'react'


function Custompage() {
const a = 50;
const b = ["uppercase","lowercase"];
const c = 100;
const d = "none";
    return(
    <Fragment>
        <div className='page'>
        <h1 className='second'>heading one {a}</h1>
        <h3 style={{color:'red',backgroundColor:'blue',fontSize:`${c}px`,textTransform:b[1],display:d}}>this is heading three</h3>
        </div>
    </Fragment>
  )
}

export default Custompage