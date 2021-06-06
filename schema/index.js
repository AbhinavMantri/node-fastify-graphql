// const { typeDefs: carTypes, resolvers: carResolver, queries: carQueries } = require('./cars');

// const queries = `
//     ${carQueries}
// `;

// const typeDefs = [].concat(carTypes);

// const resolvers = Object.assign(carResolver);

// module.exports = {
//     typeDefs,
//     queries,
//     resolvers
// };

const graphql = require('graphql');
const connection = require('../connection');

// Destructure GraphQL functions
const {
	GraphQLSchema,
	GraphQLObjectType,
	GraphQLString,
	GraphQLInt,
	GraphQLID,
	GraphQLList,
//	GraphQLNonNull
} = graphql

// Import Controllers
const { carService, ownerService, serviceService } = require('../services');

// Define Object Types
const carType = new GraphQLObjectType({
	name: 'Car',
	fields: () => ({
		_id: { type: GraphQLID },
		title: { type: GraphQLString },
		brand: { type: GraphQLString },
		price: { type: GraphQLString },
		age: { type: GraphQLInt },
		owner_id: { type: GraphQLID },
		owner: {
			type: ownerType,
			async resolve(parent, args) {
				return await ownerService.getOwner(parent.owner_id, connection);
			}
		},
		services: {
			type: new GraphQLList(serviceType),
			async resolve(parent, args) {
				return await serviceService.getCarsServices(parent._id, connection);
			}
		}
	})
});


const ownerType = new GraphQLObjectType({
	name: 'Owner',
	fields: () => ({
		_id: { type: GraphQLID },
		firstName: { type: GraphQLString },
		lastName: { type: GraphQLString },
		email: { type: GraphQLString },
		cars: {
			type: new GraphQLList(carType),
			async resolve(parent, args) {
				return await ownerService.getOwnersCars(parent._id, connection);
			}
		}
	})
});

const serviceType = new GraphQLObjectType({
	name: 'Service',
	fields: () => ({
		_id: { type: GraphQLID },
		car_id: { type: GraphQLID },
		name: { type: GraphQLString },
		date: { type: GraphQLString },
		car: {
			type: carType,
			async resolve(parent, args) {
				return await carController.getSingleCar(parent.car_id, connection);
			}
		}
	})
});

// Define Root Query
const RootQuery = new GraphQLObjectType({
	name: 'RootQueryType',
	fields: {
		getCar: {
			type: carType,
			args: { id: { type: GraphQLID } },
			resolve: async (parent, args, context) => {
				return await carService.getCar(args.id, context.connection.models);
			}
		},
		getCars: {
			type: new GraphQLList(carType),
			resolve: async (parent, args, context) => {
				return await carService.getCars(context.connection.models);
			}
		},
		getOwner: {
			type: ownerType,
			args: { id: { type: GraphQLID } },
			resolve: async (parent, args, context) => {
				return await ownerService.getOwner(args.id, context.connection);
			}
		},
		getService: {
			type: serviceType,
			args: { id: { type: GraphQLID } },
			resolve: async(parent, args, context) => {
				return await serviceService.getService(args.id, context.connection);
			}
		}
	}
})

// Define Mutations
const Mutations = new GraphQLObjectType({
	name: 'RootMutationType',
	fields: {
		addCar: {
			type: carType,
			args: {},
			resolve: (args, context) => {
				return ''
			}
		},
		editCar: {
			type: carType,
			args: {},
			resolve: (args, context) => {
				return ''
			}
		},
		deleteCar: {
			type: carType,
			args: {},
			resolve: (args, context) => {
				return ''
			}
		}
	}
})

// Export the schema
module.exports = new GraphQLSchema({
	query: RootQuery,
	mutation: Mutations
})