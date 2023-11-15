import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TaskList from './components/taskList';
import Profile from './components/profile';
import NavBar from './components/navbar';
import 'bootstrap/dist/css/bootstrap.css';
import Login from './components/login';
import UserList from './components/userList';

const App = () => {
  return (
    <div>
      <Router>
      <NavBar />
        <Routes>
          <Route path="/" element={<TaskList />} />
          <Route path="/profile/:userId" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/userList" element = {<UserList/>}/>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
