// const { gql } = require('apollo-server-fastify');
const { resolvers, queries } = require('./queries');
const typeDefs = require('./types');

// const typeDefs = gql`
//     extend type Query {
//         ${query}
//     }

//     ${types}
// `;

module.exports = {
    typeDefs,
    queries,
    resolvers
};