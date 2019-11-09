'use strict';
module.exports = (sequelize, DataTypes) => {
    const log = sequelize.define('log', {
        temperature: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
    }, {
        underscored: true
    });

    return log;
};