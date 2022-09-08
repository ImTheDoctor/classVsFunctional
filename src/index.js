import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Class_component from "./components/Class_components/Class_component";
import Functional_component from "./components/Functional_components/Functional_component";
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css'
import "bootstrap-icons/font/bootstrap-icons.css";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="class" element={<Class_component />} />
        <Route path="functional" element={<Functional_component />} />
      </Routes>
    </BrowserRouter>
  </>
);
