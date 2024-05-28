import React from 'react';

function Dashboard() {
    // Імітація отримання даних користувача
    const user = {
        name: "Ім'я користувача",
        courses: [
            { id: 1, title: "Курс з програмування", progress: 0 },
            { id: 2, title: "Курс з веб-розробки", progress: 0 }
        ]
    };

    return (
        <div className="container">
            <h2>Панель управління</h2>
            <h3>Вітаємо, {user.name}!</h3>
            <h4>Ваші курси</h4>
            <ul>
                {user.courses.map(course => (
                    <li key={course.id}>{course.title} - {course.progress}% завершено</li>
                ))}
            </ul>
        </div>
    );
}

export default Dashboard;
