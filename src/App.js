import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TaskList from './components/pages/taskList';
import Profile from './components/pages/profile';
import NavBar from './components/navbar/navbar';
import 'bootstrap/dist/css/bootstrap.css';
import Login from './components/login/login';
import UserList from './components/pages/userList';
import ExcelUpload from './components/pages/excelUpload';

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
          <Route path="/upload-excel" element={<ExcelUpload />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
