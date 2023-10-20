const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');  // Adjust the path as per your structure

const User = sequelize.define('User', {
    // Assuming an auto-incrementing ID field as primary key
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    username: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
        validate: {
            len: [4, 50]  // Username length between 4 to 50 characters
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [8, 100]  // Password should be between 8 to 100 characters
        }
    },
    email: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
            len: [5, 50]  // Email length constraints
        }
    }
}, {
    tableName: 'tblUser',
    timestamps: false  // If you don't want Sequelize to automatically add `createdAt` and `updatedAt` fields
});

module.exports = User;
