import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./assets/style.css";
import Welcome from './Welcome';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserLogin from './modules/users/UserLogin';
import AdminLogin from './modules/admin/auth/AdminLogin';
import UserRegistor from './modules/users/UserRegistor';
import Landingpage from './modules/users/userdashboard/Landingpage';
import Mainpage from './modules/users/userdashboard/Mainpage';
import Errorpage from './modules/shares/Errorpage';
import Servicepage from './modules/dashboard/Servicepage';
import Productdetails from './modules/dashboard/Productdetails';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Welcome/>}></Route>
        <Route path='user' element={<UserLogin/>}></Route>
        <Route path='admin' element={<AdminLogin/>}></Route>
        <Route path='register' element={<UserRegistor/>}></Route>
        <Route path='landing' element={<Landingpage/>}>
          <Route path='' element={<Mainpage/>}></Route>
          <Route path='service' element={<Servicepage/>}/>
          <Route path='service/details/:id' element={<Productdetails/>}/>


          <Route path='*' element={<Errorpage/>}></Route>
        
        </Route>
         <Route path='*' element={<Errorpage/>}></Route>
      </Routes>
    </BrowserRouter>
  
  </React.StrictMode>
);

