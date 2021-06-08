const { GraphQLObjectType, GraphQLID, GraphQLString } = require('graphql');
const { carService } = require("../../../services");

const Service = new GraphQLObjectType({
	name: 'Service',
	fields: () => {
        const { Car } = require('../../car/types');

        return ({
            id: { type: GraphQLID },
            car_id: { type: GraphQLID },
            name: { type: GraphQLString },
            date: { type: GraphQLString },
            car: {
                type: Car,
                async resolve(parent, args, context) {
                    return await carService.getCar(parent.car_id, context.connection.models);
                }
            }
        }); 
    }
});

module.exports = Service;