import React from 'react';
import { useRef } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Portfolio from './pages/Portfolio';
import Login from './pages/Login';
import Member from './pages/Member';
import Memberlist from './pages/Memberlist';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/portfolio/add/:name" element={<Portfolio />}></Route>
        <Route path="/portfolio/memberlist" element={<Memberlist />}></Route>
        <Route path="/portfolio/member/:name" element={<Member />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/*" element={<div style={{ display: "flex", justifyContent: "center", marginTop: "50px", fontWeight: "bold", fontSize: "50px" }}>Not Found 404</div>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
