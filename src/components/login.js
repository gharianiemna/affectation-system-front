import React, { useState } from 'react';
import './login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({username: '',password: '',});
      // handleChange tiens en consid les update de données on input change cad lire les entrées de l'util
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value,});
    };
     //  handleSubmit pour final submission
    const handleSubmit = async (e) => {
    e.preventDefault();
        try {
        const response = await axios.post('http://localhost:8000/api/login_check', {
            username: formData.username,
            password: formData.password,
        });
        if (response && response.data && response.data.token) {
            localStorage.setItem('authToken', response.data.token);
            navigate('/');
            } else {
                console.error('Unexpected response:', response);
            }
        } catch (error) {
        console.error('Login failed:', error.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
        <label>
            <p>Username</p>
            <input type="text" name="username"  value={formData.username}  onChange={handleChange}  />
        </label>
        <label>
            <p>Password</p>
            <input  type="password"  name="password" value={formData.password} onChange={handleChange} />
        </label>
        <div>
            <button type="submit">Submit</button>
        </div>
        </form>
    );
}
