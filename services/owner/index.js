const { ownerDAL } = require("../../dals")

const getOwners = (connection) => {
    return ownerDAL.getOwners(connection);
}

const getOwner = (id, connection) => {
    return ownerDAL.getOwner(id, connection);
}

const getOwnersCars = (id, connection) => {
    return ownerDAL.getOwnersCars(id, connection);
}

module.exports = {
    getOwners,
    getOwner,
    getOwnersCars
};