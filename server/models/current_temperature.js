'use strict';
module.exports = (sequelize, DataTypes) => {
    const current_temperature = sequelize.define('current_temperature', {
        temperature: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    }, {
        underscored: true
    });

    return current_temperature;
};