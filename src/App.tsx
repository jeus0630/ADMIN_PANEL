import React from 'react';
import Sidebar from './components/sidebar/Sidebar';
import Topbar from './components/topbar/Topbar';
import "./app.scss";
import Home from './pages/home/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserList from './pages/userList/UserList';
import User from './pages/user/User';

function App() {
  return (
    <Router>
      <div>
        <Topbar></Topbar>
        <div className="container">
          <Sidebar></Sidebar>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/users" element={<UserList></UserList>}></Route>
            <Route path="/user/:id" element={<User></User>}></Route>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/" element={<Home></Home>}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
