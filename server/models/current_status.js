'use strict';
module.exports = (sequelize, DataTypes) => {
    const current_status = sequelize.define('current_status', {
        status: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        threshold: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
    }, {
        underscored: true
    });

    return current_status;
};