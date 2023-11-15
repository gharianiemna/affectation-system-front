import React, { useMemo, useEffect, useState } from 'react';
import axios from 'axios';
import {MaterialReactTable,useMaterialReactTable} from 'material-react-table';
import './taskList.css';
import moment from 'moment';

const TaskList = () => {
const [tasks, setTasks] = useState([]);
const [assignmentDate, setAssignmentDate] = useState('');

useEffect(() => {
    const fetchTasks = async () => {
    try {
    const response = await axios.get('http://localhost:8000/getTasks');
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
            const updatedResponse = await axios.get('http://localhost:8000/getTasks');
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
        </div>
        )
};

export default TaskList;
