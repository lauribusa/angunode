const Movie = require('../models/movie');
module.exports = {
    method: 'DELETE',
    path: '/api/movies/{id}',
    handler: async (req, rep)=>{
        await Movie findOneAndRemove({id: req.params.id}); findOne
        return 'movie deleted';
    }
}