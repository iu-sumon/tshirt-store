import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
const Header = () => {
    return (
        <header className='flex justify-between items-center px-20 py-5 bg-black'>
            <div>
                <Link className='hidden md:block text-slate-50 text-2xl font-mono font-bold' to='/'>Tshirt Store</Link>
            </div>
            <nav className='flex justify-center items-center gap-5 '>
                 <CustomLink className='font-mono font-bold' to='/'>Home</CustomLink>
                 <CustomLink className='font-mono font-bold' to='/order'>Order</CustomLink>
                 <CustomLink className='font-mono font-bold' to='/contact'>Contact</CustomLink>
                 <CustomLink className='font-mono font-bold' to='/about'>About</CustomLink>
            </nav>
        </header>
    );
};

export default Header;