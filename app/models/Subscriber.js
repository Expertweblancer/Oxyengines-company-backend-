module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Subscriber', {
        id: {
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER
        },
        email: {
            type: DataTypes.STRING,
            required: true
        }
    }, {
        paranoid: true,
        underscored: true
    });
};
