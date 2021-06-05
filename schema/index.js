const { typeDefs: carTypes, resolvers: carResolver, queries: carQueries } = require('./cars');

const queries = `
    ${carQueries}
`;

const typeDefs = [].concat(carTypes);

const resolvers = Object.assign(carResolver);

module.exports = {
    typeDefs,
    queries,
    resolvers
};