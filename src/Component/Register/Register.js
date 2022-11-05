import React from 'react';

const Register = () => {
    return (
        <div className='container mx-auto'>
            <div className='w-[500px] mx-auto'>
            <h1 className='text-[40px] text-[red] font-bold'>Please Rgister</h1>
            <form  className='space-y-2'>
            <input className='border-2 py-1 px-3 rounded-md focus:outline-none' type="text" placeholder='Enter your name' /><br/>
            <input className='border-2 py-1 px-3 rounded-md focus:outline-none' type='email'  placeholder='Enter your Email'/><br/>
            <input className='border-2 py-1 px-3 rounded-md focus:outline-none' type='text'  placeholder='Enter your pass'/><br/>
            <button className='bg-[green] py-2 px-3 text-white'>Submit</button>
            </form>
        </div>
        </div>
    );

};

export default Register;