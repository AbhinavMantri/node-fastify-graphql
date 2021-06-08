const { GraphQLID } = require('graphql');
const { ownerService } = require("../../../services");
const { Owner } = require("../types");

module.exports = {
    type: Owner,
    args: { id: { type: GraphQLID } },
    resolve: async (parent, args, context) => {
        return await ownerService.getOwner(args.id, context.connection.models);
    }
}