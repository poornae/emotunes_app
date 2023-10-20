const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');  // Adjust the path based on your structure

const Feedback = sequelize.define('Feedback', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    feedbackContent: {  // Assuming the feedback is stored as text
        type: DataTypes.TEXT,
        allowNull: false
    },
    userId: {  // This assumes a foreign key relationship with tblUser
        type: DataTypes.INTEGER,
        references: {
            model: 'Users',  // 'Users' would be the name Sequelize uses for the User model, depending on your settings
            key: 'id'
        },
        allowNull: false
    }
}, {
    tableName: 'tblFeedback',
    timestamps: true  // If you want Sequelize to automatically add `createdAt` and `updatedAt` fields
});

module.exports = Feedback;
