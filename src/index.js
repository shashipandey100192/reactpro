import React from 'react';
import ReactDOM from 'react-dom/client';
import India,{Mycontact,Service} from './About';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <India></India>
    <h1>this is computer</h1>
    <Mycontact></Mycontact>
    <Service></Service>
  </React.StrictMode>
);

