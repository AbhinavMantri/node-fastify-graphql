const core = require('../core');

// Get all cars
const getCars = async (connection) => {
    const { Car } = connection || {};
	return core.findAll(Car, {});
}

// Get single car by ID
const getCar = async (id, connection) => {
	const { Car } = connection || {};
	return core.findOne(Car, { id });
}

// Add a new car
const addCar = async (data, connection) => {
	const { Car } = connection || {};
    return core.findOne(Car, data);
}

// Update an existing car
const updateCar = async (id, data, connection) => {
	const { Car } = connection || {};
    return core.update(Car, data, { where: { id } });
}

// Delete a car
const deleteCar = async (id, connection) => {
	const { Car } = connection || {};
    return core.delete(Car, { where: { id } });
}

module.exports = {
	getCar,
	getCars,
	addCar,
	updateCar,
	deleteCar
};