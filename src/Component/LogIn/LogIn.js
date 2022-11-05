import React from 'react';
import useFirebase from '../Customhook/useFirebase';


const LogIn = () => {
    const {user,gogolesignIn}=useFirebase()
    return (
        <div className='container mx-auto'>
        <div className='w-[500px] mx-auto'>
        <h1 className='text-[40px] text-[red] font-bold'>Please Rgister</h1>
        <br/><br/>
        <button  onClick={gogolesignIn} className='bg-[#130080] py-2 px-3 text-white'>Google sign In</button>
        <br/><br/>
        <form className='space-y-2'>
        <input className='border-2 py-1 px-3 rounded-md focus:outline-none' type='email'  placeholder='Enter your Email'/><br/>
        <input className='border-2 py-1 px-3 rounded-md focus:outline-none' type='text'  placeholder='Enter your pass'/><br/>
        <button className='bg-[green] py-2 px-3 text-white'>Submit</button>
        </form>
    </div>
    </div>
    );
};

export default LogIn;