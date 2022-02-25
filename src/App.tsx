import React from 'react';
import Sidebar from './components/sidebar/Sidebar';
import Topbar from './components/topbar/Topbar';
import "./app.scss";
import Home from './pages/Home/Home';

function App() {
  return (
    <div>
      <Topbar></Topbar>
      <div className="container">
        <Sidebar></Sidebar>
        <Home></Home>
      </div>
    </div>
  );
}

export default App;
