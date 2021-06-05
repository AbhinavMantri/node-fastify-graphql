const getCars = require('./getCars');

module.exports = {
    resolvers: {
        getCars,
    },
    queries: `
        getCars: [Cars]
    `
};