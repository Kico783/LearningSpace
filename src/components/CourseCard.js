import React from 'react';
import '../styles/CourseCard.css';

function CourseCard({ title, description, image }) {
    return (
        <div className="card">
            <img src={image} alt={title} />
            <h3 className="card-title">{title}</h3>
            <p className="card-description">{description}</p>
        </div>
    );
}

export default CourseCard;


