import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/css';
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Router/Routes/Routes.jsx';
import 'react-loading-skeleton/dist/skeleton.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
