const Movie = require('../models/movie');

module.exports = {
    method: 'GET',
    path: '/api/movies/count',
    handler: async (request, reply)=> {
        let genres = await Movie.count();
        return genres;  
    }
}