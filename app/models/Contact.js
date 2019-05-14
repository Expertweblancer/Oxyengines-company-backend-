module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Contact', {
        id: {
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER
        },
        name: {
            type: DataTypes.STRING,
            required: true
        },
        email: {
            type: DataTypes.STRING,
            required: true
        },
        phone: {
            type: DataTypes.STRING,
            required: true
        },
        subject: {
            type: DataTypes.STRING,
            required: true
        },
        message: {
            type: DataTypes.TEXT,
            required: true
        },
        category: {
            type: DataTypes.STRING,
            required: true
        }
    }, {
        paranoid: true,
        underscored: true
    });
};
