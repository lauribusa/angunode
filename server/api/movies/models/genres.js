

const mongoose = require('mongoose');


const schemaGenre = new mongoose.Schema({ //mongoose nous donne une classe qui s'appelle schema 

	id: {
		type: Number
	},
	name:{
		type:String
	}
});

module.exports = mongoose.model('genres', schemaGenre); // export classique en node js