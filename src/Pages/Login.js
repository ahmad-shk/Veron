import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function LoginPage2() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleSignIn = () => {
    if (email.trim() === '' || password.trim() === '') {
      alert('Please fill in all fields');
    } else if (!validateEmail(email)) {
      alert('Please enter a valid email address');
    } else {
      // alert('Sign in successful!');
      navigate('/layout');
    }
  };

  return (
    <div className='w-[100%] bg-transparent flex justify-center items-center'>
      <div className='w-[30%] bg-white p-4 rounded-xl flex flex-col gap-4'>
        <div className='logo flex gap-3 justify-center items-center pb-4'>
          <img src='./futnext logo.svg' className='h-[40px] w-[40px]' alt="Logo" />
          <h1 className='text-[#00ca55] text-[24px] font-semibold mb-1'>Veron</h1>
        </div>

        <h1 className='w-full text-center text-[20px] font-semibold text-[#00ca55]'>
          Hi, Welcome Back
        </h1>

        <h3 className='w-full text-center pb-2'>
          Enter your credentials to continue
        </h3>

        <input
          type="email"
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='border p-3 rounded-md border-[gray] block w-full outline-none'
        />
        <input
          type="password"
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className='border p-3 rounded-md border-[gray] block w-full outline-none'
        />
        
        <div className='flex gap-3'>
          <input type='checkbox' className='bg-[#FFCB05]' />
          <label className='text-[13px]'>Keep me signed in</label>
        </div>

        <p className='text-[#00ca55]'>Forgot password?</p>

        <button
          onClick={handleSignIn}
          className='w-full p-2 rounded-md bg-[#16a254] text-white font-semibold shadow-md'
        >
          Sign in
        </button>

        <h4 className='pt-4 border-t border-[gray] text-center'>
          <Link to='register'>Don't have an account?</Link>
        </h4>
      </div>
    </div>
  );
}

export default LoginPage2;
