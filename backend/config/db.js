const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('emotunes_app', 'your_mysql_user', 'your_mysql_password', {
    host: 'your_mysql_host',
    dialect: 'mysql',
    logging: false, // This will turn off SQL logging in the console
    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

async function testConnection() {
    try {
        await sequelize.authenticate();
        console.log('Database connection established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

module.exports = {
    sequelize,
    testConnection
};
