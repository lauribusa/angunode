'use strict';

const Hapi = require('hapi');
<<<<<<< HEAD
// Crée un serveur local sur le port 8000
const server = Hapi.server({ 
    host: 'localhost',
    port: '8000' 
});

server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        reply('Hapi World!');
    }
});
server.start((err) => {
if (err) {
        throw err;
    }
    console.log('Server running at: ${server.info.uri}');
});
=======

// Create a server with a host and port
const server = Hapi.server({ 
    host: 'localhost', 
    port: 8000 
});

// Add the route
server.route({
    method: 'GET',
    path:'/hello', 
    handler: function (request, h) {

        return 'hello world';
    }
});

// Start the server
async function start() {

    try {
        await server.start();
    }
    catch (err) {
        console.log(err);
        process.exit(1);
    }

    console.log('Server running at:', server.info.uri);
};

start();
>>>>>>> e9faa83cbd56d5f23c7c29b1ae2d9447e37e1232
