async function authRoutes(fastify, options) {
    fastify.get('/login', async(request, reply) => {
        return 'logged in';
    });

    fastify.get('/logout', async(request, reply) => {
        return 'logged out';
    });
}

module.exports = authRoutes;