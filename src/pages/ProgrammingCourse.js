import React from 'react';
import Accordion from '../components/Accordion';

function ProgrammingCourse() {
    return (
        <div className="container">
            <h1>Курс з програмування</h1>
            <p>Цей курс призначений для початківців, які хочуть навчитися основам програмування.</p>

            <h2>Опис курсу</h2>
            <p>В цьому курсі ви дізнаєтеся про основні концепції програмування, включаючи змінні, цикли, умовні оператори та функції.</p>

            <h2>Зміст курсу</h2>
            <Accordion title="Вступ до програмування">
                <ul>
                    <li>Що таке програмування?</li>
                    <li>Історія програмування</li>
                    <li>Сучасні мови програмування</li>
                </ul>
            </Accordion>
            <Accordion title="Змінні та типи даних">
                <ul>
                    <li>Що таке змінна?</li>
                    <li>Типи даних</li>
                    <li>Операції з змінними</li>
                </ul>
            </Accordion>
            <Accordion title="Умовні оператори">
                <ul>
                    <li>Що таке умовний оператор?</li>
                    <li>Оператор if</li>
                    <li>Оператор switch</li>
                </ul>
            </Accordion>
            <Accordion title="Цикли">
                <ul>
                    <li>Що таке цикл?</li>
                    <li>Цикл for</li>
                    <li>Цикл while</li>
                </ul>
            </Accordion>
            <Accordion title="Функції">
                <ul>
                    <li>Що таке функція?</li>
                    <li>Оголошення функцій</li>
                    <li>Виклик функцій</li>
                </ul>
            </Accordion>
        </div>
    );
}

export default ProgrammingCourse;

