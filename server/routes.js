

const Movie = require('./models/movies');
module.exports = [
  {
      method: 'GET',
      path: '/get',
      handler: async (request, reply)=> {
          let movies = await Movie.find();
          return movies;  
      }
  },
  {
      method: 'POST',
      path: '/send',
      handler: async (request, reply)=> {
        let movies = await Movie.find();
        return movies;  
    }
  },
  {
    method: 'GET',
    path:'/', 
    handler: (request, h)=> {

        return 'hello world';
    }
}
];