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
            
            <label style={{    width: '600px',  display: 'flex', flexDirection: 'row', margin: '2rem', alignItems: 'center', justifyContent: 'space-around'}}>
                          <img src="data:image/png;base64,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" />  Choose date: <input type="date"    value={assignmentDate}   onChange={handleDateChange}  style={{width:'200px'}}/>
            <button className="buttonMain" onClick={handleAssignTasks}   style={{width:'150px',}}  >Assign</button>
            </label>
        </div>
        <MaterialReactTable table={table} />
        <Link to="/upload-excel">
        <button style={{ width: '150px' , margin:'1rem'}} className="buttonMain"  >Upload Excel</button>
      </Link>
        </div>
        )
};

export default TaskList;
