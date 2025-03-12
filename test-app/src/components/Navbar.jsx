import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='h-[40px] w-full bg-slate-600 text-white flex items-center px-4'>
        
      <ul className='flex gap-4'>
      <div>
          <h2>LOGO</h2>
        </div>
        <li>
          <Link to='/' className='hover:text-gray-300 font-bold'>Home</Link>
        </li>
        <li>
          <Link to='/admin' className='hover:text-gray-300 font-bold'>Admin</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
