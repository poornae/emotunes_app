const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2/promise');
const bcrypt = require('bcryptjs');
const session = require('express-session');

const userRoutes = require('./routes/userRoutes');
const imageRoutes = require('./routes/imageRoutes');
const feedbackRoutes = require('./routes/feedbackRoutes');

const app = express();
const PORT = 5000;

const { errorHandler } = require('./middleware/errorMiddleware');
const { checkUserSession } = require('./middleware/authMiddleware');

// Connect to MySQL
const pool = mysql.createPool({
    host: 'your_mysql_host',
    user: 'your_mysql_user',
    password: 'your_mysql_password',
    database: 'emotunes_app',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(session({
    secret: 'emotunes_secret',
    resave: false,
    saveUninitialized: true,
}));
app.use('/api/feedback', checkUserSession, feedbackRoutes);
app.use(errorHandler);

// Routes
app.use('/api/users', userRoutes);
app.use('/api/images', imageRoutes);
app.use('/api/feedback', checkUserSession, feedbackRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
