import logo from './logo.svg';
import './App.css';
import Cart1 from './Cart1';
import { HashRouter, RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom';
import Cart2 from './Cart2';
import React, { useState } from 'react'

function App() {
  let routers = createBrowserRouter([
    {index:true, element:<Cart1></Cart1>},
    {path:'cart2',element:<Cart2></Cart2>},
  
])
  return (
    // <div className="App">
    //   <Cart1></Cart1>
    // </div>
    <>
    <RouterProvider router={routers} ></RouterProvider>
    <HashRouter router={routers} ></HashRouter>
    </>
  );
}

export default App;
