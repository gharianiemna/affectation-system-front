import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';


function UserProfile() {
    const { userId } = useParams();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const authToken = localStorage.getItem('authToken');
        const fetchUserProfile = async () => {
            try {
                const config = {
                    headers: {
                        Authorization: `Bearer ${authToken}`,
                    },
                };
                const response = await axios.get(`http://localhost:8000/api/getUser/${userId}`, config);
                setUser(response.data);
                setLoading(false);
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching user profile:', error);
                setLoading(false);
            }
        };

        fetchUserProfile();
    }, [userId]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!user) {
        return <div>User not found</div>;
    }

    return (
<div className="d-flex align-items-center justify-content-center" style={{ marginTop: '1rem' }}>
            <Card style={{ width: '20rem' }} className="text-center" >
    <Card.Body >
    <Card.Title >Profile</Card.Title>
    <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.PMhANanxddOBObcYxcYOcwHaGy?pid=ImgDet&w=860&h=789&rs=1" style={{ width: '10rem' }}/>
    <Card.Subtitle className="mb-2 text-muted">  <strong>Username:</strong> {user.username}</Card.Subtitle>
    <Card.Subtitle className="mb-2 text-muted">  <strong>Level:</strong> {user.level}</Card.Subtitle>
    <Card.Text> <br></br></Card.Text>
    <Card.Text> <strong>Task list:</strong> 
    <ul> {user.task.map((task) => ( <li><strong>code: </strong>{task.code} - <strong>difficulty: </strong>{task.difficulty}</li> ))} </ul>

    </Card.Text>

    </Card.Body>
    </Card>
        </div>
    );
}

export default UserProfile;
