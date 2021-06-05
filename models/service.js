const { DataTypes, Model } = require('sequelize');

class Service extends Model {}

const colDefs = {
    car_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
};

const otherAttrs = {
    modelName: 'Service'
};

module.exports = {
    model: Service,
    colDefs: colDefs,
    otherAttrs: otherAttrs
};