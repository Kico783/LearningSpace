import React from 'react';

function Course() {
    // Імітація отримання даних курсу
    const course = {
        title: "Курс з програмування",
        description: "Детальний опис курсу з програмування",
        lessons: [
            { id: 1, title: "Вступ", content: "Зміст уроку" },
            { id: 2, title: "Основи", content: "Зміст уроку" }
        ]
    };

    return (
        <div className="container">
            <h2>{course.title}</h2>
            <p>{course.description}</p>
            <h3>Уроки</h3>
            <ul>
                {course.lessons.map(lesson => (
                    <li key={lesson.id}>{lesson.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default Course;
