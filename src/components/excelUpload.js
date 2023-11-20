import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



const ExcelUpload = () => {
    const [file, setFile] = useState(null);
    const navigate = useNavigate();
    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };
    const handleUpload = () => {
        const formData = new FormData();
        formData.append('file', file);
        const authToken = localStorage.getItem('authToken'); 
        axios.post('http://localhost:8000/api/upload-excel', formData, {
            headers: {
                'Authorization': `Bearer ${authToken}`,
                'Content-Type': 'multipart/form-data',
            },    })
        .then(response => {
            console.log(response.data);
            navigate('/'); 
        })
        .catch(error => {
            console.error(error);
        });
    };
    return (
        <div>
        <h2>Upload Excel File</h2>
        <input type="file" onChange={handleFileChange} />
        <button onClick={handleUpload}>Upload</button>
        </div>
    );
};

export default ExcelUpload;
