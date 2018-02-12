const Film = require('../models/film');

module.exports = {
    method: 'GET',
    path: '/get/:id',
    handler: async (request, reply)=> {
        let film = await Film.find();
        return film;  
    }
}