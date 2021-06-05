const { DataTypes, Model } = require('sequelize');

class Owner extends Model {}

const colDefs = {
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING, 
    }
};

const otherAttrs = {
    modelName: 'Owner'
};

module.exports = {
    model: Owner,
    colDefs: colDefs,
    otherAttrs: otherAttrs
};