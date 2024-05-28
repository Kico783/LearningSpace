import React, { useState } from 'react';
import axios from 'axios';
import '../styles/Form.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/login', {
                username,
                password
            });
            localStorage.setItem('token', response.data.token);
            alert('Login successful');
        } catch (error) {
            console.error('Login error:', error);
            alert('Login failed');
        }
    };

    return (
        <div className="containerForm">
            <h2>Авторизація</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
                </div>
                <div>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
        
    );
};

export default Login;
