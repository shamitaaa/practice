import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { login } from '../store/slice';
import '../index.css'
import { Link } from 'react-router-dom';

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(login({
            username:username,
            password:password,
            loggedIn: true,
        }))
    }

    return (
        <div className='login'>
            <form className='form' onSubmit={(e) => handleSubmit(e)}>
                <h2>Login</h2>
                <label>Enter username</label>
                <input className='input'
                    type="username"
                    placeholder='username'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <label>Enter password</label>
                <input className='input'
                    type="password"
                    placeholder='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type='submit'>Submit</button>
                <Link to="/about">
                <button className='button-inc'>Next Page</button>
                </Link>
            </form>
        </div>
    )
}

export default Login