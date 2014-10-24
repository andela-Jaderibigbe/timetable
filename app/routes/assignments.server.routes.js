'use strict';

module.exports = function(app) {
	var users = require('../../app/controllers/users');
	var assignments = require('../../app/controllers/assignments');

	// Assignments Routes
	app.route('/assignments')
		.get(assignments.list)
		.post(users.requiresLogin, assignments.create);

	app.route('/assignments/:assignmentId')
		.get(assignments.read)
		.put(users.requiresLogin, assignments.hasAuthorization, assignments.update)
		.delete(users.requiresLogin, assignments.hasAuthorization, assignments.delete);

	// Finish by binding the Assignment middleware
	app.param('assignmentId', assignments.assignmentByID);
};