import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './userList.css';
import { useNavigate } from 'react-router-dom';

function UserList() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const authToken = localStorage.getItem('authToken');

        const fetchUsers = async () => {
            try {
                const config = {
                    headers: {
                        Authorization: `Bearer ${authToken}`,
                    },
                };

                const response = await axios.get('http://localhost:8000/api/getUsers', config);
                setUsers(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching user list:', error);
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    const handleUserSelect = (userId) => {
        // Redirect to the user profile component
        navigate(`/profile/${userId}`);
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', margin: '2rem', alignItems: 'center', justifyContent: 'space-around'}}>
        <h2>User List</h2>
        <ul className="user-list">
            {users.map((user) => (
                <li key={user.id} className="user-item">
                    {user.username}{' '}
                    <button onClick={() => handleUserSelect(user.id)}>View Profile</button>
                </li>
            ))}
        </ul>
    </div>
    );
}

export default UserList;
