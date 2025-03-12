import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import Admin from './components/Admin';
import Navbar from './components/Navbar';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div >
        <Navbar />
        <Home />
      </div>
    ),
  },
  {
    path: '/admin',
    element: (
      <div>
        <Navbar />
        <Admin />
      </div>
    ),
  },
]);

const App=()=>{
  return (
    <div >
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
