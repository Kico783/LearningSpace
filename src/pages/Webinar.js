import React from 'react';

function Webinar() {
    // Імітація отримання даних вебінару
    const webinar = {
        title: "Вебінар з веб-розробки",
        description: "Детальний опис вебінару з веб-розробки",
        date: "2024-06-01",
        link: "webinar-link"
    };

    return (
        <div className="container">
            <h2>{webinar.title}</h2>
            <p>{webinar.description}</p>
            <p>Дата проведення: {webinar.date}</p>
            <a href={webinar.link}>Перейти до вебінару</a>
        </div>
    );
}

export default Webinar;
