const Hapi = require('hapi');
// Crée un serveur local sur le port 8000
const server = new Hapi.Server();
server.connection({
    host: 'localhost',
    port: 8000
});
// Ajoute une route minimal de réponse
server.route({
    method: 'GET',
    path:'/',
    handler: function (request, reply) {
        return reply('hello world');
    }
});
// Démarre le serveur
server.start((err) => {
    if (err) {
        throw err;
    }
    console.log('Serveur disponible à:', server.info.uri);
});