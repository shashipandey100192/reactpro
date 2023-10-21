import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./style.css";
import Mybootstrappage from './Mybootstrappage';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Landingpage from './modules/Landingpage';
import Aboutpage from './modules/Aboutpage';
import Myform from './modules/Myform';
import Myheader from './modules/shares/Myheader';
import Myservice from './modules/Myservice';
import Myerrorpage from './modules/shares/Myerrorpage';
import NewLeptop from './modules/services/NewLeptop';
import Repairleptop from './modules/services/Repairleptop';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
      <Myheader/>
        <Routes>
          <Route path='' element={<Landingpage/>}/>
          <Route path='about' element={<Aboutpage/>}></Route>
          <Route path='forms' element={<Myform/>}></Route>
          <Route path='myservice' element={<Myservice/>}>
                <Route path='newleptop' element={<NewLeptop/>}/>
                <Route path='repair' element={<Repairleptop/>}/>
                <Route path='*' element={<Myerrorpage/>}/>
          </Route>
          <Route path='*' element={<Myerrorpage/>}/>
        </Routes>
      
      </BrowserRouter>
    
  </React.StrictMode>
);

