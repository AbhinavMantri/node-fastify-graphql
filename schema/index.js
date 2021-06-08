const graphql = require('graphql');
const car = require('./car');
const owner = require('./owner');
const service = require('./service');

// Destructure GraphQL functions
const {
	GraphQLSchema,
	GraphQLObjectType,
	// GraphQLString,
	// GraphQLInt,
	// GraphQLID,
	// GraphQLList,
} = graphql

// Import Controllers
// const { carService, ownerService, serviceService } = require('../services');
// const { Owner } = require('./owner/types');
// const { Service } = require('./service/types');
// const { Car } = require('./car/types');

// Define Object Types
// const carType = new GraphQLObjectType({
// 	name: 'Car',
// 	fields: () => ({
// 		_id: { type: GraphQLID },
// 		title: { type: GraphQLString },
// 		brand: { type: GraphQLString },
// 		price: { type: GraphQLString },
// 		age: { type: GraphQLInt },
// 		owner_id: { type: GraphQLID },
// 		owner: {
// 			type: ownerType,
// 			async resolve(parent, args) {
// 				return await ownerService.getOwner(parent.owner_id, connection);
// 			}
// 		},
// 		services: {
// 			type: new GraphQLList(serviceType),
// 			async resolve(parent, args) {
// 				return await serviceService.getCarsServices(parent._id, connection);
// 			}
// 		}
// 	})
// });


// const ownerType = new GraphQLObjectType({
// 	name: 'Owner',
// 	fields: () => ({
// 		_id: { type: GraphQLID },
// 		firstName: { type: GraphQLString },
// 		lastName: { type: GraphQLString },
// 		email: { type: GraphQLString },
// 		cars: {
// 			type: new GraphQLList(carType),
// 			async resolve(parent, args) {
// 				return await ownerService.getOwnersCars(parent._id, connection);
// 			}
// 		}
// 	})
// });

// const serviceType = new GraphQLObjectType({
// 	name: 'Service',
// 	fields: () => ({
// 		_id: { type: GraphQLID },
// 		car_id: { type: GraphQLID },
// 		name: { type: GraphQLString },
// 		date: { type: GraphQLString },
// 		car: {
// 			type: carType,
// 			async resolve(parent, args) {
// 				return await carController.getSingleCar(parent.car_id, connection);
// 			}
// 		}
// 	})
// });

// Define Root Query
const RootQuery = new GraphQLObjectType({
	name: 'RootQueryType',
	fields: {
		...car.queries,
		...owner.queries,
		...service.queries,
	}
})

// Define Mutations
const Mutations = new GraphQLObjectType({
	name: 'RootMutationType',
	fields: {
		...car.mutations,
	}
})

// Export the schema
module.exports = new GraphQLSchema({
	query: RootQuery,
	mutation: Mutations
})