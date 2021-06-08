const { GraphQLID } = require("graphql");
const { serviceService } = require("../../../services");
const { Service } = require("../types");

module.exports = {
    type: Service,
    args: { id: { type: GraphQLID } },
    resolve: async(parent, args, context) => {
        return await serviceService.getService(args.id, context.connection.models);
    }
}