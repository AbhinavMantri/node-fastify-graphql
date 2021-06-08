const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLInt, GraphQLList } = require('graphql');
const { ownerService, serviceService } = require('../../../services');

const Car = new GraphQLObjectType({
    name: 'Car',
    fields: () => ({
        id: { type: GraphQLID },
        title: { type: GraphQLString },
        brand: { type: GraphQLString },
        price: { type: GraphQLString },
        age: { type: GraphQLInt },
        owner_id: { type: GraphQLID },
        owner: {
            type: require('../../owner/types').Owner,
            resolve: async (parent, args, context) => {
                return await ownerService.getOwner(parent.owner_id, context.connection.models);
            }
        },
        services: {
            type: new GraphQLList(require('../../service/types').Service),
            resolve: async(parent, args, context)  => {
                return await serviceService.getCarsServices(parent.id, context.connection.models);
            }
        }
    })
});

module.exports = Car;