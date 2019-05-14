module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Review', {
        id: {
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER
        },
        client_name: {
            type: DataTypes.STRING,
            required: true
        },
        client_review: {
            type: DataTypes.TEXT,
            required: true
        }
    }, {
        paranoid: true,
        underscored: true
    });
};