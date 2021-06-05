const { DataTypes, Model } = require('sequelize');

class Car extends Model {}

const colDefs = {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    owner_id: {
        type: DataTypes.STRING,
        allowNull: false
    },
    brand: {
        type: DataTypes.STRING, 
    },
    title: {
        type: DataTypes.STRING,
    },
    place: {
        type: DataTypes.STRING,
    },
    age: {
        type: DataTypes.NUMBER,
    }
};

const otherAttrs = {
    modelName: 'Car'
};

module.exports = {
    model: Car,
    colDefs: colDefs,
    otherAttrs: otherAttrs
};