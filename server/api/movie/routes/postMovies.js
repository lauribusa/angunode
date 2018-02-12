module.exports = {
    method: 'POST',
    path: '/post',
    handler: async (request, reply)=> {
        let movies = await Movie.find();
        return movies;  
    }
}