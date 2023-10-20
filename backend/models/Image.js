const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');  // Adjust the path as per your structure

const Image = sequelize.define('Image', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    imageData: {
        type: DataTypes.BLOB,  // Blob data type for storing the image
        allowNull: false
    },
    imageName: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    userId: {  // This assumes a foreign key relationship with tblUser
        type: DataTypes.INTEGER,
        references: {
            model: 'Users',  // 'Users' would be the name Sequelize uses for the User model, depending on your settings
            key: 'id'
        },
        allowNull: false
    },
    emotion: {  // Assuming a field to store the emotion detected, you can adjust based on your requirements
        type: DataTypes.STRING(50),
        allowNull: true
    }
}, {
    tableName: 'tblImage',
    timestamps: true  // If you want Sequelize to automatically add `createdAt` and `updatedAt` fields
});

module.exports = Image;
