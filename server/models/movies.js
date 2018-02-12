import { release } from 'os';

const mongoose = require('mongoose');


const schemaMovies = new mongoose.Schema({ //mongoose nous donne une classe qui s'appelle schema 
	_id: {
		type: String
	},
	vote_count: {
		type: Number
	},
	id: {
		type: Number
	},
	video: {
		type: Boolean

	},
	vote_average: {
		type: Number

	},
	title: {
		type: String
	},
	popularity: {
		type: Number
	},
	poster_path: {
		type: String
	},
	original_language: {
		type: String
	},
	original_title: {
		type: String
	},
	genre_ids: [{
		name: Number,
		values:[]
	}],
	backdrop_path: {
		type: String
	},
    adult:{
        type: Boolean
    },
    overview:{
        type:String
    }
    release_date:{
        type:String
    }
});

module.exports = mongoose.model('movies', schemaMovies); // export classique en node js