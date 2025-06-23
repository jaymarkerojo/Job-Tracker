import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { Link } from 'react-router-dom';
import PasswordInput from '../../components/Input/PasswordInput';
import { validateEmail } from '../../assets/utils/helper';

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState ("");
    const [error, setError] = useState(null);

    const handleLogin = async (e) => {
        e.preventDefault();
        if (!validateEmail(email)) {
            setError("Please enter a valid emall address.");
            return;
        }
            if (!password) {
                setError("Please enter your password.")
                return;
            }
            setError("")
    };
    // Login API call
  return (
    <>
    <Navbar/>
    <div className='flex item-center justify-center mt-28'>
        <div className='w-96 border rounded bg-white px-7 py-10'>
        <form onSubmit={handleLogin}>
        <h4 className=' text-2xl mb-7'>Login</h4>
        <input 
        type="text" 
        placeholder='Email' 
        className='w-full text-sm bg-transparent border-1.5 px-5 py-3 rounded mb-4 outline-none'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        />

        
        <PasswordInput 
        value ={password}
        onChange={(e) => setPassword(e.target.value)}
        />

        {error && <p className='text-red-500 text-xs pb-1'>{error}</p>}
        <button type='submit' className = "w-full text-sm bg-blue-500 text-white p-2 rounded my-1 hover:bg-blue-500">
        Login
        </button>

        <p className='text-sm text-center mt-4'>
            Not registered yet?{" "}
            <Link to="/signUp" className='font-medium text-blue-500 underline'>
            Create an Account
            </Link>
            </p>
            </form>
        </div>
    </div>
    </>
  )
}

export default Login;