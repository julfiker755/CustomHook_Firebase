import React from 'react';
import { Link } from "react-router-dom";
import useFirebase from '../Customhook/useFirebase';
const Header = () => {
    const {user,signout}=useFirebase()
    return (
        <div className='bg-[green] py-2'> 
            <div className='container mx-auto text-[20px] space-x-3 text-white flex justify-center'>
            <Link to="/home">Home</Link>
            <Link to="/register">Register</Link>
            {user?.email && <span>{user.displayName}</span>}
            {user?.email ? <button onClick={signout} className='bg-[red] text-white py-1 px-5'>sinout</button>:<Link to="/login">LogIn</Link>}
        </div>
        </div>
    );
};

export default Header;