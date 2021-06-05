// const { ApolloServer, makeExecutableSchema } = require('apollo-server-fastify');
const { queries, typeDefs, resolvers } = require('./schema');

const schema = `
    type Query {
        ${queries}
    }

    ${typeDefs.map(t => `${t}\n`)}
`;

// module.exports = new ApolloServer({
//     schema: makeExecutableSchema({
//         typeDefs: [query].concat(typeDefs),
//         resolvers: {
//             Query: resolvers,
//         }
//     }),
// });

module.exports = {
    schema,
    resolvers: {
        Query: resolvers,
    },
    graphiql: true
};