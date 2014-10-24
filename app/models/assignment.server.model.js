'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Assignment Schema
 */
var AssignmentSchema = new Schema({
	name: {
		type: String,
		default: '',
		required: 'Please fill Assignment name',
		trim: true
	},
	created: {
		type: Date,
		default: Date.now
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	},

	project:{
		type: Schema.ObjectId,
		ref: 'Project'	
	},

	people:[
	{type: Schema.ObjectId,
		ref: 'Person'}
		]
	,

	startDate:{
		type: Date
	},

	endDate:{
		type: Date
	}
});

mongoose.model('Assignment', AssignmentSchema);