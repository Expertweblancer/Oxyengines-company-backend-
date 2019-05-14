module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Product', {
        id: {
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER
        },
        product_category: {
            type: DataTypes.ENUM,
            values: ['Design','App','Web'],
            required: true
        },
        product_image: {
            type: DataTypes.STRING,
            required: true
        }
    }, {
        paranoid: true,
        underscored: true
    });
};