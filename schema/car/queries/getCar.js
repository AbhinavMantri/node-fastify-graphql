const { GraphQLID } = require('graphql');
const { carService } = require("../../../services");
const { Car } = require("../types");

module.exports = {
    type: Car,
    args: { id: { type: GraphQLID } },
    resolve: async (parent, args, context) => {
        return await carService.getCar(args.id, context.connection.models);
    }
}