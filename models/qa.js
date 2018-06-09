'use strict';
module.exports = (sequelize, DataTypes) => {
    var QA = sequelize.define('QA', {
        question: DataTypes.STRING,
        answer: DataTypes.STRING
    }, {
        underscored: true,
    });
    QA.associate = function(models) {
    // associations can be defined here
    };
    return QA;
};