import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './taskList.css';


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
        <div style={{margin: '1rem',display: 'flex',flexDirection: 'column',alignContent: 'space-around',alignItems: 'center',justifyContent: 'center', padding:'2rem'}}>
            <h2> 
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 100 100">
                <path fill="#c7ede6" d="M87.215,56.71C88.35,54.555,89,52.105,89,49.5c0-6.621-4.159-12.257-10.001-14.478 C78.999,35.015,79,35.008,79,35c0-11.598-9.402-21-21-21c-9.784,0-17.981,6.701-20.313,15.757C36.211,29.272,34.638,29,33,29 c-7.692,0-14.023,5.793-14.89,13.252C12.906,43.353,9,47.969,9,53.5C9,59.851,14.149,65,20.5,65c0.177,0,0.352-0.012,0.526-0.022 C21.022,65.153,21,65.324,21,65.5C21,76.822,30.178,86,41.5,86c6.437,0,12.175-2.972,15.934-7.614C59.612,80.611,62.64,82,66,82 c4.65,0,8.674-2.65,10.666-6.518C77.718,75.817,78.837,76,80,76c6.075,0,11-4.925,11-11C91,61.689,89.53,58.727,87.215,56.71z"></path><path fill="#fdfcef" d="M43.783,33.5c0,0,3.64,0,6.125,0s4.5-2.015,4.5-4.5c0-2.333-1.782-4.229-4.055-4.455 c0.022-0.181,0.055-0.358,0.055-0.545c0-2.485-2.015-4.5-4.5-4.5c-1.438,0-2.703,0.686-3.527,1.736 c-0.14-2.636-2.302-4.736-4.973-4.736c-2.761,0-5,2.239-5,5c0,0.446,0.077,0.87,0.187,1.282c-0.642-0.777-1.6-1.282-2.687-1.282 c-1.781,0-3.234,1.335-3.455,3.055c-0.181-0.022-0.358-0.055-0.545-0.055c-2.485,0-4.5,2.015-4.5,4.5s2.015,4.5,4.5,4.5 s9.5,0,9.5,0h5.375V34h3V33.5z"></path><path fill="#472b29" d="M37.408,16c-3.033,0-5.5,2.467-5.5,5.5c0,0.016,0,0.031,0,0.047c-0.602-0.354-1.29-0.547-2-0.547 c-1.831,0-3.411,1.261-3.858,3.005C26.003,24.002,25.955,24,25.908,24c-2.757,0-5,2.243-5,5s2.243,5,5,5h14.875 c0.276,0,0.5-0.224,0.5-0.5s-0.224-0.5-0.5-0.5H25.908c-2.206,0-4-1.794-4-4s1.794-4,4-4c0.117,0,0.23,0.017,0.343,0.032 l0.141,0.019c0.021,0.003,0.041,0.004,0.062,0.004c0.246,0,0.462-0.185,0.495-0.437C27.14,23.125,28.412,22,29.908,22 c0.885,0,1.723,0.401,2.301,1.1c0.098,0.118,0.241,0.182,0.386,0.182c0.078,0,0.156-0.018,0.228-0.056 c0.209-0.107,0.314-0.346,0.254-0.573c-0.116-0.436-0.17-0.802-0.17-1.153c0-2.481,2.019-4.5,4.5-4.5 c2.381,0,4.347,1.872,4.474,4.263c0.011,0.208,0.15,0.387,0.349,0.45c0.05,0.016,0.101,0.024,0.152,0.024 c0.15,0,0.296-0.069,0.392-0.192C43.545,20.563,44.687,20,45.908,20c2.206,0,4,1.794,4,4c0,0.117-0.017,0.23-0.032,0.343 l-0.019,0.141c-0.016,0.134,0.022,0.268,0.106,0.373c0.084,0.105,0.207,0.172,0.34,0.185c2.055,0.205,3.604,1.906,3.604,3.958 c0,2.206-1.794,4-4,4h-6.125c-0.276,0-0.5,0.224-0.5,0.5s0.224,0.5,0.5,0.5h6.125c2.757,0,5-2.243,5-5 c0-2.397-1.689-4.413-4.003-4.877c0.002-0.041,0.003-0.082,0.003-0.123c0-2.757-2.243-5-5-5c-1.176,0-2.293,0.416-3.183,1.164 C42.126,17.76,39.963,16,37.408,16L37.408,16z"></path><path fill="#472b29" d="M35.908,23c-1.403,0-2.609,0.999-2.913,2.341C32.627,25.119,32.209,25,31.783,25 c-1.202,0-2.198,0.897-2.353,2.068C29.227,27.022,29.034,27,28.845,27c-1.529,0-2.811,1.2-2.918,2.732 C25.918,29.87,26.021,29.99,26.159,30c0.006,0,0.012,0,0.018,0c0.13,0,0.24-0.101,0.249-0.232 c0.089-1.271,1.151-2.268,2.419-2.268c0.229,0,0.47,0.042,0.738,0.127c0.022,0.007,0.045,0.01,0.067,0.01 c0.055,0,0.11-0.02,0.156-0.054c0.064-0.047,0.102-0.129,0.102-0.209c0-1.034,0.841-1.875,1.875-1.875 c0.447,0,0.885,0.168,1.231,0.473c0.047,0.041,0.106,0.063,0.165,0.063c0.032,0,0.063-0.006,0.093-0.019 c0.088-0.035,0.148-0.117,0.155-0.212c0.102-1.292,1.191-2.305,2.479-2.305c0.208,0,0.425,0.034,0.682,0.107 c0.023,0.007,0.047,0.01,0.07,0.01c0.109,0,0.207-0.073,0.239-0.182c0.038-0.133-0.039-0.271-0.172-0.309 C36.424,23.04,36.164,23,35.908,23L35.908,23z"></path><path fill="#472b29" d="M49.791,24.5c-1.326,0-2.508,0.897-2.874,2.182c-0.038,0.133,0.039,0.271,0.172,0.309 c0.023,0.007,0.046,0.01,0.068,0.01c0.109,0,0.209-0.072,0.24-0.182C47.703,25.748,48.687,25,49.791,25 c0.117,0,0.23,0.014,0.342,0.029c0.012,0.002,0.023,0.003,0.035,0.003c0.121,0,0.229-0.092,0.246-0.217 c0.019-0.137-0.077-0.263-0.214-0.281C50.065,24.516,49.93,24.5,49.791,24.5L49.791,24.5z"></path><path fill="#fff" d="M14.405,52H4.5C4.224,52,4,51.776,4,51.5S4.224,51,4.5,51h9.905c0.276,0,0.5,0.224,0.5,0.5 S14.682,52,14.405,52z"></path><path fill="#fff" d="M17.5,52h-1c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h1c0.276,0,0.5,0.224,0.5,0.5 S17.777,52,17.5,52z"></path><path fill="#fff" d="M22.491,54H13.5c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h8.991c0.276,0,0.5,0.224,0.5,0.5 S22.767,54,22.491,54z"></path><path fill="#fff" d="M11.5,54h-1c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h1c0.276,0,0.5,0.224,0.5,0.5 S11.777,54,11.5,54z"></path><path fill="#fff" d="M8.5,54h-2C6.224,54,6,53.776,6,53.5S6.224,53,6.5,53h2C8.776,53,9,53.224,9,53.5S8.777,54,8.5,54z"></path><path fill="#fff" d="M14.5,56h-2c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h2c0.276,0,0.5,0.224,0.5,0.5 S14.776,56,14.5,56z"></path><path fill="#fff" d="M17.5,47c-0.177,0-0.823,0-1,0c-0.276,0-0.5,0.224-0.5,0.5c0,0.276,0.224,0.5,0.5,0.5 c0.177,0,0.823,0,1,0c0.276,0,0.5-0.224,0.5-0.5C18,47.224,17.776,47,17.5,47z"></path><path fill="#fff" d="M17.5,49c-0.177,0-4.823,0-5,0c-0.276,0-0.5,0.224-0.5,0.5c0,0.276,0.224,0.5,0.5,0.5 c0.177,0,4.823,0,5,0c0.276,0,0.5-0.224,0.5-0.5C18,49.224,17.776,49,17.5,49z"></path><path fill="#fff" d="M22.5,51c-0.177,0-2.823,0-3,0c-0.276,0-0.5,0.224-0.5,0.5c0,0.276,0.224,0.5,0.5,0.5 c0.177,0,2.823,0,3,0c0.276,0,0.5-0.224,0.5-0.5C23,51.224,22.776,51,22.5,51z"></path><path fill="#fff" d="M85.5,46.5h-10c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h10c0.276,0,0.5,0.224,0.5,0.5 S85.776,46.5,85.5,46.5z"></path><path fill="#fff" d="M89.5,46.5h-2c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h2c0.276,0,0.5,0.224,0.5,0.5 S89.776,46.5,89.5,46.5z"></path><path fill="#fff" d="M94.5,48.5h-10c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h10c0.276,0,0.5,0.224,0.5,0.5 S94.777,48.5,94.5,48.5z"></path><path fill="#fff" d="M82.5,48.5h-1c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h1c0.276,0,0.5,0.224,0.5,0.5 S82.776,48.5,82.5,48.5z"></path><path fill="#fff" d="M79.375,48.5H77.5c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h1.875c0.276,0,0.5,0.224,0.5,0.5 S79.651,48.5,79.375,48.5z"></path><path fill="#fff" d="M88.5,44.5h-5c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h5c0.276,0,0.5,0.224,0.5,0.5 S88.777,44.5,88.5,44.5z"></path><path fill="#fff" d="M85.5,50.5h-2c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h2c0.276,0,0.5,0.224,0.5,0.5 S85.776,50.5,85.5,50.5z"></path><rect width="18.222" height="10.25" x="53.956" y="40.25" fill="#96ba45"></rect><path fill="#5b7729" d="M72.178,50.5H35.733v18.222c0,1.258,1.019,2.278,2.278,2.278H69.9c1.258,0,2.278-1.019,2.278-2.278 V50.5z"></path><rect width="18.222" height="10.25" x="53.956" y="50.5" fill="#6f913d"></rect><rect width="18.222" height="10.25" x="35.733" y="40.25" fill="#6f913d"></rect><path fill="#c0d078" d="M69.9,30H53.956v10.25h18.222v-7.972C72.178,31.019,71.158,30,69.9,30z"></path><path fill="#96ba45" d="M38.011,30h15.944v10.25H35.733v-7.972C35.733,31.019,36.753,30,38.011,30z"></path><path fill="#472b29" d="M69.9,71.7h-31.89c-1.642,0-2.978-1.336-2.978-2.978V32.278c0-1.642,1.336-2.978,2.978-2.978H69.9 c1.642,0,2.978,1.336,2.978,2.978v36.444C72.878,70.364,71.542,71.7,69.9,71.7z M38.011,30.7c-0.87,0-1.577,0.708-1.577,1.578 v36.444c0,0.87,0.707,1.578,1.577,1.578H69.9c0.87,0,1.577-0.708,1.577-1.578V32.278c0-0.87-0.707-1.578-1.577-1.578H38.011z"></path><path fill="#6f913d" d="M46.622,61.889H28.4c-1.258,0-2.278-1.019-2.278-2.278V41.389c0-1.258,1.019-2.278,2.278-2.278 h18.222c1.258,0,2.278,1.019,2.278,2.278v18.222C48.9,60.87,47.881,61.889,46.622,61.889z"></path><path fill="#472b29" d="M46.622,40.511c0.484,0,0.878,0.394,0.878,0.878v18.222c0,0.484-0.394,0.878-0.878,0.878H28.4 c-0.484,0-0.878-0.394-0.878-0.878V41.389c0-0.484,0.394-0.878,0.878-0.878H46.622 M46.622,39.111H28.4 c-1.259,0-2.278,1.019-2.278,2.278v18.222c0,1.258,1.019,2.278,2.278,2.278h18.222c1.259,0,2.278-1.019,2.278-2.278V41.389 C48.9,40.13,47.881,39.111,46.622,39.111L46.622,39.111z"></path><path fill="#fff" d="M32.736,44.806h2.717l2.205,4.275l2.33-4.275h2.539L39.029,50.5l3.577,5.694h-2.678l-2.403-4.476 l-2.393,4.476h-2.717l3.636-5.715L32.736,44.806z"></path><path fill="#472b29" d="M42.527,44.806L39.029,50.5l3.577,5.694h-2.677l-2.403-4.476l-2.393,4.476h-2.717l3.636-5.715 l-3.317-5.674h2.717l2.205,4.275l2.33-4.275H42.527 M42.527,44.306h-2.539c-0.183,0-0.351,0.1-0.439,0.261l-1.879,3.447 l-1.773-3.437c-0.086-0.166-0.257-0.271-0.444-0.271h-2.717c-0.179,0-0.344,0.096-0.434,0.251 c-0.089,0.155-0.088,0.347,0.002,0.501l3.163,5.411l-3.473,5.458c-0.098,0.154-0.104,0.349-0.016,0.509 c0.088,0.16,0.256,0.259,0.438,0.259h2.717c0.184,0,0.354-0.102,0.441-0.264l1.953-3.653l1.962,3.654 c0.087,0.162,0.256,0.263,0.441,0.263h2.677c0.182,0,0.35-0.099,0.438-0.258s0.083-0.354-0.014-0.508l-3.412-5.431l3.335-5.43 c0.095-0.154,0.099-0.348,0.01-0.506S42.708,44.306,42.527,44.306L42.527,44.306z"></path><g><path fill="#fdfcef" d="M79.5,77.75c0,0,1.567,0,3.5,0s3.5-1.567,3.5-3.5c0-1.781-1.335-3.234-3.055-3.455 c0.028-0.179,0.055-0.358,0.055-0.545c0-1.933-1.567-3.5-3.5-3.5c-1.032,0-1.95,0.455-2.59,1.165 c-0.384-1.808-1.987-3.165-3.91-3.165c-2.209,0-4,1.791-4,4c0,0.191,0.03,0.374,0.056,0.558C69.128,68.964,68.592,68.75,68,68.75 c-1.228,0-2.245,0.887-2.455,2.055C65.366,70.777,65.187,70.75,65,70.75c-1.933,0-3.5,1.567-3.5,3.5s1.567,3.5,3.5,3.5 s7.5,0,7.5,0v0.5h7V77.75z"></path><path fill="#472b29" d="M81.25,73.25C81.112,73.25,81,73.138,81,73c0-1.223,0.995-2.218,2.218-2.218 c0.034,0.009,0.737-0.001,1.244,0.136c0.133,0.036,0.212,0.173,0.176,0.306c-0.036,0.134-0.173,0.213-0.306,0.176 c-0.444-0.12-1.1-0.12-1.113-0.118c-0.948,0-1.719,0.771-1.719,1.718C81.5,73.138,81.388,73.25,81.25,73.25z"></path><circle cx="74.5" cy="77.75" r=".5" fill="#472b29"></circle><path fill="#472b29" d="M83,78.25h-3.5c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5H83c1.654,0,3-1.346,3-3 c0-1.496-1.125-2.768-2.618-2.959c-0.134-0.018-0.255-0.088-0.336-0.196s-0.115-0.244-0.094-0.377 C82.975,70.564,83,70.41,83,70.25c0-1.654-1.346-3-3-3c-0.85,0-1.638,0.355-2.219,1c-0.125,0.139-0.321,0.198-0.5,0.148 c-0.182-0.049-0.321-0.195-0.36-0.379c-0.341-1.604-1.779-2.769-3.42-2.769c-1.93,0-3.5,1.57-3.5,3.5 c0,0.143,0.021,0.28,0.041,0.418c0.029,0.203-0.063,0.438-0.242,0.54c-0.179,0.102-0.396,0.118-0.556-0.01 C68.878,69.405,68.449,69.25,68,69.25c-0.966,0-1.792,0.691-1.963,1.644c-0.048,0.267-0.296,0.446-0.569,0.405 C65.314,71.275,65.16,71.25,65,71.25c-1.654,0-3,1.346-3,3s1.346,3,3,3h7.5c0.276,0,0.5,0.224,0.5,0.5s-0.224,0.5-0.5,0.5H65 c-2.206,0-4-1.794-4-4s1.794-4,4-4c0.059,0,0.116,0.002,0.174,0.006C65.588,69.07,66.711,68.25,68,68.25 c0.349,0,0.689,0.061,1.011,0.18c0.165-2.333,2.115-4.18,4.489-4.18c1.831,0,3.466,1.127,4.153,2.774 c0.68-0.499,1.502-0.774,2.347-0.774c2.206,0,4,1.794,4,4c0,0.048-0.001,0.095-0.004,0.142C85.739,70.84,87,72.419,87,74.25 C87,76.456,85.206,78.25,83,78.25z"></path><path fill="#472b29" d="M77.5,77.25c-0.159,0-0.841,0-1,0c-0.276,0-0.5,0.224-0.5,0.5c0,0.276,0.224,0.5,0.5,0.5 c0.159,0,0.841,0,1,0c0.276,0,0.5-0.224,0.5-0.5C78,77.474,77.776,77.25,77.5,77.25z"></path></g><path fill="#472b29" d="M53.955,71.032c-0.138,0-0.25-0.112-0.25-0.25V30.196c0-0.138,0.112-0.25,0.25-0.25 s0.25,0.112,0.25,0.25v40.586C54.205,70.92,54.093,71.032,53.955,71.032z"></path><path fill="#472b29" d="M72.178,40.5H50.479c-0.138,0-0.25-0.112-0.25-0.25S50.341,40,50.479,40h21.699 c0.138,0,0.25,0.112,0.25,0.25S72.315,40.5,72.178,40.5z"></path><path fill="#472b29" d="M56.729,50.739h-8.631c-0.138,0-0.25-0.112-0.25-0.25s0.112-0.25,0.25-0.25h8.631 c0.138,0,0.25,0.112,0.25,0.25S56.866,50.739,56.729,50.739z"></path><path fill="#472b29" d="M63.636,50.739h-5.293c-0.138,0-0.25-0.112-0.25-0.25s0.112-0.25,0.25-0.25h5.293 c0.138,0,0.25,0.112,0.25,0.25S63.773,50.739,63.636,50.739z"></path><path fill="#472b29" d="M72.178,50.739h-6.862c-0.138,0-0.25-0.112-0.25-0.25s0.112-0.25,0.25-0.25h6.862 c0.138,0,0.25,0.112,0.25,0.25S72.315,50.739,72.178,50.739z"></path><path fill="#472b29" d="M72.178,60.978h-24.08c-0.138,0-0.25-0.112-0.25-0.25s0.112-0.25,0.25-0.25h24.08 c0.138,0,0.25,0.112,0.25,0.25S72.315,60.978,72.178,60.978z"></path>
                </svg> Upload Excel File
            </h2> 
            <input style={{  marginLeft:'1rem' , padding:'2rem'}} type="file" onChange={handleFileChange} />
            <button onClick={handleUpload} style={{ width: '150px' , margin:'1rem'}} className="buttonMain" >Upload</button>
        </div>
    );
};

export default ExcelUpload;