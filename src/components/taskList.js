import React, { useMemo, useEffect, useState } from 'react';
import axios from 'axios';
import {MaterialReactTable,useMaterialReactTable} from 'material-react-table';
import './taskList.css';
import moment from 'moment';
import { Link } from 'react-router-dom';


const TaskList = () => {
const [tasks, setTasks] = useState([]);
const [assignmentDate, setAssignmentDate] = useState('');

useEffect(() => {
    const authToken = localStorage.getItem('authToken');
    const fetchTasks = async () => {
    try {
        const config = {
            headers: {
                Authorization: `Bearer ${authToken}`,
            },
        };
    const response = await axios.get('http://localhost:8000/api/getTasks', config);
    const formattedTasks = response.data.map(task => ({...task, startDate: moment(task.startDate).format('DD-MM-YYYY HH:mm:ss')}));
    setTasks(formattedTasks);
    } catch (error) {
    console.error('Error fetching tasks:', error);
    }
    };
    fetchTasks();
    }, []);

    const columns = useMemo(
        () => [
        {
            accessorKey: 'type',
            header: 'Type',
            size: 150,
        },
        {
            accessorKey: 'difficulty',
            header: 'Difficulty',
            size: 150,
        },
        {
            accessorKey: 'name',
            header: 'Name',
            size: 200,
        },
        {
            accessorKey: 'code',
            header: 'Code',
            size: 150,
        },
        {
            accessorKey: 'startDate',
            header: 'Start Date',
            size: 150,
       
        },      
        {
            accessorKey: 'user.username',
            header: 'User',
            size: 150,
        },
        ],
        [],
    );

    const table = useMaterialReactTable({
        columns,
        data: tasks,
    });

    const handleAssignTasks = async () => {
        try {
            const authToken = localStorage.getItem('authToken');
            const config = {
                headers: {
                    Authorization: `Bearer ${authToken}`,
                },
            };

            if (!authToken) {
                console.error('Authentication token not available.');
                return;
            }
            const response = await axios.post(
                `http://localhost:8000/api/affect/${assignmentDate}`,
                {},
                {
                    headers: {
                        'Authorization': `Bearer ${authToken}`,
                    },
                }
            );
            console.log(response.data);
            const updatedResponse = await axios.get('http://localhost:8000/api/getTasks', config);
            setTasks(updatedResponse.data);
        } catch (error) {
            console.error('Error assigning tasks:', error);
        }
    };
    

    const handleDateChange = (e) => {
        setAssignmentDate(e.target.value);
    };
    return ( 
    <div className='taskPage'>
        <div className='assignTask'>
            <label style={{ display: 'flex', flexDirection: 'row', margin: '2rem', alignItems: 'center', justifyContent: 'space-around'}}>
            Assignment Date: <input type="date"    value={assignmentDate}   onChange={handleDateChange}  style={{width:'200px'}}/>
            <button onClick={handleAssignTasks}   style={{width:'200px',}}  >Assign</button>
            </label>
        </div>
        <MaterialReactTable table={table} />
        <Link to="/upload-excel">
        <button style={{ width: '200px', marginTop: '20px' }}>Upload Excel</button>
      </Link>
        </div>
        )
};

export default TaskList;
