const Movie = require('../models/movie');

module.exports = {
    method: 'GET',
    path: '/get',
    handler: async (request, reply)=> {
        let movies = await Movie.find();
        return movies;  
    }
}