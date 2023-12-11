import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Context from './context/Context';
import Main from './layout/Main';
import AddListing from './components/AddListing';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />
  },
  {
    path: "/add-listing",
    element: <AddListing />
  },

]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <Context>
      <RouterProvider router={router} />
    </Context>
  </React.StrictMode>,
)
