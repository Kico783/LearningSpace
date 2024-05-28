const express = require('express');
const bcrypt = require('bcrypt');
const connection = require('../config/db');
const router = express.Router();

// Форма реєстрації
router.get('/Register', (req, res) => {
    res.sendFile('Register.html', { root: 'pages' });
});

// Обробка реєстрації
router.post('/Register', async (req, res) => {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    // Перевірка чи існує користувач з таким ім'ям або email
    connection.query('SELECT * FROM users WHERE username = ? OR email = ?', [username, email], (err, results) => {
        if (err) throw err;

        if (results.length > 0) {
            return res.send('Username or Email already exists!');
        }

        // Додавання нового користувача
        connection.query('INSERT INTO users (username, email, password) VALUES (?, ?, ?)', [username, email, hashedPassword], (err) => {
            if (err) throw err;
            res.send('Registration successful!');
        });
    });
});

// Форма авторизації
router.get('/Login', (req, res) => {
    res.sendFile('Login.html', { root: 'pages' });
});

// Обробка авторизації
router.post('/Login', (req, res) => {
    const { username, password } = req.body;

    connection.query('SELECT * FROM users WHERE username = ?', [username], async (err, results) => {
        if (err) throw err;

        if (results.length === 0) {
            return res.send('No user found with that username!');
        }

        const user = results[0];

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (isPasswordValid) {
            res.send('Login successful!');
        } else {
            res.send('Invalid password!');
        }
    });
});

module.exports = router;
