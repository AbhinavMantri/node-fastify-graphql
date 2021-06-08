const { GraphQLList } = require("graphql");
const { carService } = require("../../../services");
const { Car } = require("../types");

module.exports = {
    type: new GraphQLList(Car),
    resolve: async (parent, args, context) => {
        return await carService.getCars(context.connection.models);
    }
};