module.exports = {
    method: 'POST',
    path: '/api/movies',
    handler: async (request, reply)=> {
        let movies = await Movie.find();
        return movies;  
    }
}