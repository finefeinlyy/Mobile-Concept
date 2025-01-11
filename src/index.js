import React from 'react';
import ReactDOM from 'react-dom/client'; // ใช้ createRoot จาก react-dom/client
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// สร้าง root element และ render แอป
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// ใช้สำหรับวัดผล Web Vitals
reportWebVitals();