const Movie = require('../models/movie');

module.exports = {
    method: 'GET',
    path: '/api/movies',
    handler: async (request, reply)=> {
        let movies = await Movie.find();
        return movies;  
    }
}