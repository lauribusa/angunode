'use strict';

const Hapi = require('hapi');
const db = require('./database').db;
const routes = require('./routes');

// Create a server with a host and port
const server = Hapi.server({ 
    host: 'localhost', 
    port: 8000 
});

// Add the route
server.route(routes);

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

