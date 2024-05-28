import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Course from './pages/Course';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Webinar from './pages/Webinar';
import ProgrammingCourse from './pages/ProgrammingCourse';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/index.css';

function App() {
    return (
        <Router>
            <div>
                <Header />
                <div className="container">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/course/:id" element={<Course />} />
                        <Route path="/course/programming" element={<ProgrammingCourse />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/webinar/:id" element={<Webinar />} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </Router>
    );
}

export default App;


