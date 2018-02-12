const Movie = require('./models/movies');
module.exports = [
  {
      method: 'GET',
      path: '/get',
      handler: function (request, reply) {
          Movie.find(function(error, movies) {
              if (error) {
                  console.error(error);
              }
              reply(wolves);
          });
      }
  },
  {
      method: 'POST',
      path: '/send',
      handler: (request, reply)=> {
          Movie.find((error, data)=> {
              if (error) {
                  console.error(error);
              }
              reply(data);
          });
      }
  }
];