import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AboutHtml from './Components/about';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<AboutHtml />} />
      </Routes>
    </BrowserRouter>
  );
};


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppRouter />
);

reportWebVitals();
