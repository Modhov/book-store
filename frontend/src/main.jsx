<<<<<<< HEAD
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Login from "./Login.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Login />
  </React.StrictMode>
);
=======
import React from 'react'
import ReactDOM from 'react-dom/client'
 import './index.css'
import { HashRouter } from 'react-router-dom';
import Path from './Path.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <HashRouter>
      <Path/>
    </HashRouter> 
   
)
>>>>>>> 15a04c1caba95454cd09a99c33d663e671b627d4
