const Movie = require('../models/movie');

module.exports = {
    method: 'GET',
    path: '/get/:id',
    handler: async (request, reply)=> {
        let movie = await Movie.find(id: req.params.id);
        return movie;  
    }
}