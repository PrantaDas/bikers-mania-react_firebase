import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex justify-center items-center h-20 bg-slate-200  md:justify-between px-12 py-8 sticky top-0 max-w-full'>

            <div className='hidden md:block'>
                <Link className='text-xl font-bold italic font-sans text-gray-500' to='/'>Bikers Mania!!!</Link>
            </div>
            <div className='flex gap-5'>
                <Link className='text-sm' to='/'>HOME</Link>
                <Link className='text-sm' to='/reviews'>REVIEWS</Link>
                <Link className='text-sm' to='/dashboard'>DASHBOARD</Link>
                <Link className='text-sm' to='/blogs'>BLOGS</Link>
                <Link className='text-sm' to='/about'>ABOUT</Link>
            </div>

        </div>
    );
};

export default Header;