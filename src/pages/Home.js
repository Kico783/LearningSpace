import React from 'react';
import { Link } from 'react-router-dom';
import CourseCard from '../components/CourseCard';
import WebinarCard from '../components/WebinarCard';

function Home() {
    return (
        <div className="container">
            <h1>Ласкаво просимо на платформу онлайн-курсів!</h1>
            <p>Виберіть курс або вебінар для навчання.</p>

            <h2>Курси</h2>
            <div>
                <Link to="/course/programming">
                    <CourseCard
                        title="Курс з програмування"
                        description="Основи програмування для початківців"
                        image="https://edge1s.com/wp-content/uploads/2023/01/C-techs_ramka-4.png"
                    />
                </Link>
            </div>

            <h2>Вебінари</h2>
            <div>
                <WebinarCard
                    title="Вебінар: Вступ до програмування"
                    description="Основні концепції та перші кроки"
                    date="2024-06-01"
                    link="https://youtu.be/fzWZTWzvgeM?si=BYEsxxz6ySXcBwaZ"
                />
            </div>
        </div>
    );
}

export default Home;

