module.exports = (sequelize, DataTypes) => {
    return sequelize.define('User', {
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
            unique: true,
            required: true,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            required: true
        }
    }, {
        paranoid: false,
        underscored: true
    });
};