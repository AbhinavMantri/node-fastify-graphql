const { serviceDAL } = require("../../dals")

const getService = (id, connection) => {
    return serviceDAL.getService(id, connection);
}

const getCarsServices = (id, connection) => {
    return serviceDAL.getCarsServices(id, connection);
}

module.exports = {
   getService,
   getCarsServices
};