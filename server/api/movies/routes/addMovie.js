const Movie = require('../models/movie');

module.exports = {
    method: 'POST',
    path: '/api/movies',
    handler: async (request, reply)=> {
        console.log(request.payload);
        let movie = new Movie(request.payload);
        await movie.save();
        return movie;
    }
}