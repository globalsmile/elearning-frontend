import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../actions/authActions';

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(login({ email, password }));
	};

	return (
		<div>
		<h2>Login</h2>
		        <form onSubmit={handleSubmit}>
		          <div>
		            <label>Email:</label>
		            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
		          </div>
		          <div>
		            <label>Password:</label>
		            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
		          </div>
		          <button type="submit">Login</button>
		        </form>
		      </div>
		    );
};

export default Login;
