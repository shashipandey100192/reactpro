import React from 'react';
import ReactDOM from 'react-dom/client';
import About,{Contact, Service} from './pages/About';
import Service10 from './pages/Service';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Errors from './pages/Errors';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./style.css";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter> 
      <Routes>
        <Route path='/' element={<About/>}></Route>
        <Route path='service' element={<Service/>}></Route>
        <Route path='*' element={<Errors/>}></Route>


      </Routes>
    
    
    
    </BrowserRouter>


  </React.StrictMode>
);

