import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
    return (
        <header className="header">
            <nav>
                <Link to="/">Головна</Link>
                <Link to="/dashboard">Панель управління</Link>
                <Link to="/login">Вхід</Link>
                <Link to="/register">Реєстрація</Link>
            </nav>
        </header>
    );
}

export default Header;
