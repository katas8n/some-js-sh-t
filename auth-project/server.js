require('dotenv').config();

const express = require('express');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const http = require('http');
const cors = require('cors');

const app = express();

app.use(
    cors({
        origin: 'http://127.0.0.1:5500',
        credentials: true
    })
);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(
    session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: true
    })
);
app.use(passport.initialize());
app.use(passport.session());

// DB
const users = [
    {
        id: 23,
        name: 'John',
        password: bcrypt.hashSync('232323', 10)
    }
];

const findUser = username => users.find(user => user.name === username);

const strategy = new LocalStrategy((username, password, done) => {
    const user = findUser(username);

    if (!user)
        return done(null, false, {
            message: 'There is an incorrect user name.'
        });

    bcrypt.compare(password, user.password, (err, hasMatch) => {
        if (err) return done(err, false, { message: err.message });

        if (!hasMatch)
            return done(null, false, { message: 'Incorrect password!' });

        return done(null, user);
    });
});

passport.use(strategy);

passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser((id, done) => {
    const user = users.find(user => user.id === id);
    done(null, user);
});

app.post('/login', (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) return res.status(500).json({ error: err.message });
        if (!user) return res.status(401).json({ message: info.message });

        req.logIn(user, err => {
            if (err) return res.status(500).json({ error: err.message });

            const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
                expiresIn: '1h'
            });

            console.log('[token]', token);

            res.cookie('jwt', token);
            res.send({ msg: token });
        });
    })(req, res, next);
});
app.post('/logout', passport.authenticate('local'), (req, res) => {
    req.logOut(() => res.json({ msg: 'Good buy!' }));
});

app.get('/admin', (req, res) => {
    const token = req.cookies.jwt;

    if (!token) {
        return res.status(401).json({ message: 'Не авторизовано' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
        if (err) {
            return res.status(403).json({ message: 'Недійсний токен' });
        }

        res.json({
            message: 'Доступ дозволено! Ваш декодований токен:',
            decodedToken
        });
    });
});

const server = http.createServer(app);

server.listen(3000, () => {
    console.log('Server has been running on the port : ' + 3000);
});
