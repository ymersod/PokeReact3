import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AboutHtml from './Components/about';
import reportWebVitals from './reportWebVitals';
import {createHashRouter,RouterProvider } from 'react-router-dom';

const router = createHashRouter([
  {
      path: "/",
      element: <App />,
      children: [
          {
              path: "/",
              element: <App />,
          },
          {
              path: "/about",
              element: <AboutHtml />,
          },
      ],
  },
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

reportWebVitals();
