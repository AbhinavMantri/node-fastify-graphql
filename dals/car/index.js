const core = require('../core');

// Get all cars
exports.getCars = async (connection) => {
    const { Car } = connection || {};
	return core.findAll(Car, {});
}

// Get single car by ID
exports.getCar = async (id, connection) => {
	const { Car } = connection || {};
	return core.findOne(Car, { id });
}

// Add a new car
exports.addCar = async (data, connection) => {
	const { Car } = connection || {};
    return core.findOne(Car, data);
}

// Update an existing car
exports.updateCar = async (id, data, connection) => {
	const { Car } = connection || {};
    return core.update(Car, data, { where: { id } });
}

// Delete a car
exports.deleteCar = async req => {
	const { Car } = connection || {};
    return core.delete(Car, { where: { id } });
}