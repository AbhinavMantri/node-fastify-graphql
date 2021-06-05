const core = require("../core");

// Get single service ID
exports.getService = async (id, connection) => {
    const { Service } = connection || {};
	return core.findOne(Service, { where: {id} });
}

// Get single car's services
exports.getCarsServices = async (car_id, connection) => {
	const { Service } = connection || {};
	return core.findAll(Service, { where: {car_id} });
}