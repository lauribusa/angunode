const Hapi = require('hapi');
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