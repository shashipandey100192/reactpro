import React from 'react';
import ReactDOM from 'react-dom/client';
import India,{Mycontact,Service} from './About';
import Custompage from './Custompage';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./style.css";
import Mybootstrappage from './Mybootstrappage';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <India></India>
    <h1>this is computer</h1>
    <Mycontact></Mycontact>
    <Service></Service>
    <Custompage></Custompage>
    <Mybootstrappage></Mybootstrappage>
  </React.StrictMode>
);

