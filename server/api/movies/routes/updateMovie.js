const Movie = require('../models/movie');

module.exports = {
    method: 'PUT',
    path: '/api/movies/{id}',
    handler: async (req, rep) => {
        console.log(req.payload);

        return Movie.findOneAndUpdate(
            { id: req.params.id },
            { $set: req.payload },
            { new: true}
        );
    }
};