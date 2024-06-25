import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function RegisterPage2() {
  const [password, setPassword] = useState('');
  const [strength, setStrength] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const checkStrength = (password) => {
    let strengthLevel = 0;
    if (password.length > 7) strengthLevel++;
    if (/[A-Z]/.test(password)) strengthLevel++;
    if (/[0-9]/.test(password)) strengthLevel++;
    if (/[^A-Za-z0-9]/.test(password)) strengthLevel++;

    if (strengthLevel < 2) {
      setStrength('Weak');
    } else if (strengthLevel < 4) {
      setStrength('Moderate');
    } else {
      setStrength('Strong');
    }
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    checkStrength(newPassword);
  };

  const handleSignUp = () => {
    if (name.trim() === '' || email.trim() === '' || password.trim() === '') {
      alert("Please fill in all fields");
    } else {
      alert("Sign up successful!");
      navigate('/layout');  // Navigate to the layout page after successful registration
    }
  };

  return (
    <div className='bg-transparent w-[100%] flex justify-center items-center'>
      <div className='w-[30%] bg-white p-4 rounded-xl flex flex-col gap-4'>
        <div className='logo flex gap-3 justify-center items-center pb-4'>
          <img src='./futnext logo.svg' className='h-[40px] w-[40px]' alt="Logo" />
          <h1 className='text-[#00ca55] text-[24px] font-semibold mb-1'>Veron</h1>
        </div>

        <h1 className='w-full text-center text-[20px] font-semibold text-[#00ca55]'>
          Register Now
        </h1>

        <h3 className='w-full text-center pb-2'>
          Enter your credentials to continue
        </h3>
        
        <input
          type="text"
          placeholder='Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          className='input border p-3 rounded-md border-[gray] block w-full outline-none'
        />
        <input
          type="email"
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='input border p-3 rounded-md border-[gray] block w-full outline-none'
        />
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          className="input w-full p-3 border border-[gray] outline-none rounded-md"
          placeholder="Password"
        />
        
        <div className='flex'>
          <div
            className={`h-2 flex-1 mr-1 ${strength === 'Weak' ? 'bg-red-500' : 'bg-gray-300'}`}
          ></div>
          <div
            className={`h-2 flex-1 mr-1 ${strength === 'Moderate' ? 'bg-yellow-500' : 'bg-gray-300'}`}
          ></div>
          <div
            className={`h-2 flex-1 ${strength === 'Strong' ? 'bg-green-500' : 'bg-gray-300'}`}
          ></div>
        </div>

        <div className='flex gap-3'>
          <input type='checkbox' className='bg-[#FFCB05]' />
          <label className='text-[13px] flex justify-center items-center'>
            I agree with <span className='text-[#16a254] text-[17px]'>&nbsp;Terms&nbsp;</span> and <span className='text-[#16a254] text-[17px]'>&nbsp;Privacy&nbsp;</span>
          </label>
        </div>

        <button
          onClick={handleSignUp}
          className='w-full p-2 rounded-md bg-[#16a254] text-white font-semibold shadow-md'
        >
          Sign up
        </button>

        <h4 className='pt-4 border-t border-[gray] text-center'>
          <Link to='/'>Already have an account</Link>
        </h4>
      </div>
    </div>
  );
}

export default RegisterPage2;
