import React from 'react';
import '../styles/WebinarCard.css';

function WebinarCard({ title, description, date, link }) {
    return (
        <div className="card">
            <h3 className="card-title">{title}</h3>
            <p className="card-description">{description}</p>
            <p>Дата: {date}</p>
            <a href={link}>Перейти до вебінару</a>
        </div>
    );
}

export default WebinarCard;

