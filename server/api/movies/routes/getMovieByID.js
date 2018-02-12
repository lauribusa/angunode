const Movie = require('../models/movie');

module.exports = {
    method: 'GET',
    path: '/api/movies/{id}',
    handler: async (request, reply)=> {
        let movie = await Movie.find({id:request.params.id});
        return movie;  
    }
}