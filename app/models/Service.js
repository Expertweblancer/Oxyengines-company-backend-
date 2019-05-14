module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Service', {
        id: {
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER
        },
        service_name: {
            type: DataTypes.STRING,
            required: true
        },
        service_category: {
            type: DataTypes.ENUM,
            values:['Design','Backend','Marketing','Frontend'],
            required: true
        }
    }, {
        paranoid: true,
        underscored: true
    });
};