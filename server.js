const fastify = require('fastify')({ logger: true });

// simple example
fastify.get('/', async(request, reply) => {
    return {hello: 'world'};
});

fastify.route({
    method: 'GET',
    url: '/route',
    schema: {
        queryString: {
            name: {type: 'string'}
        },
        response: {
            200: {
                type: 'object',
                properties: {
                    hello: {type: 'string'}
                }
            }
        }
    },
    preHandler: async(request, reply) => {

    },
    handler: async(request, reply) => {
        return {hello: 'world route'};
    }
});

const start = async() => {
    try {
        await fastify.listen(8080);
    } catch(err) {
        fastify.log.error(err);
        process.exit(1);
    }
};

start();