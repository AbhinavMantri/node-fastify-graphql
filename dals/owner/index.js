const core = require("../core")

// Get all owners
exports.getOwners = async (connection) => {
    const { Owner } = connection || {};
	return core.findAll(Owner);
}

// Get single owner by ID
exports.getOwner = async (id, connection) => {
	const { Owner } = connection || {};
	return core.findOne(Owner, { where: {id} });
}

// Get single owner's cars
exports.getOwnersCars = async (id, connection) => {
    const { Car } = connection || {};
	return core.findAll(Car, { where: { owner_id: id } });
}