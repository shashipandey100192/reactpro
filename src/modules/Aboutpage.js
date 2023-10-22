import React, { Fragment } from 'react';
import one from '../image/img2.jpg';

function Aboutpage() {
  return (
    <Fragment>
    <div>Aboutpage</div>
    <img src={one} alt="image from src folder"/>
    <img src='pictures/img3.jpg' alt="image from public folder"/>

    </Fragment>
  )
}

export default Aboutpage