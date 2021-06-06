const { carDAL } = require("../../dals")

const getCars = (connection) => {
    return carDAL.getCars(connection);
}

const getCar = (id, connection) => {
    return carDAL.getCar(id, connection);
}

const addCar = (data, connection) => {
    return carDAL.addCar(data, connection);
}

const updateCar = (id, data, connection) => {
    return carDAL.updateCar(id, data, connection);
}

const deleteCar = (id, connection) => {
    return carDAL.deleteCar(id, connection);
}

module.exports = {
    getCar,
    getCars,
    addCar,
    updateCar,
    deleteCar
};