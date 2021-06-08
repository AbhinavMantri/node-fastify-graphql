const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLList } = require('graphql');
const { ownerService } = require('../../../services'); 

const Owner = new GraphQLObjectType({
    name: 'Owner',
    fields: () => {
        const { Car } = require('../../car/types');
        
        return ({
            id: { type: GraphQLID },
            firstName: { type: GraphQLString },
            lastName: { type: GraphQLString },
            email: { type: GraphQLString },
            cars: {
                type: new GraphQLList(Car),
                async resolve(parent, args, context) {
                    return await ownerService.getOwnersCars(parent._id, context.connection.models);
                }
            }
        })
    }
});

module.exports = Owner;