import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './layout/MainLayout';
import Home from './pages/Home';
import BloodBridge from './pages/BloodBridge';
import CureHospital from './pages/CureHospital';
import PotteryShop from './pages/PotteryShop';
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:'/bloodbridge',
        element:<BloodBridge></BloodBridge>
      },
      {
        path:'/curehospital',
        element:<CureHospital></CureHospital>
      },
      {
        path:"/potteryshop",
        element:<PotteryShop></PotteryShop>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
