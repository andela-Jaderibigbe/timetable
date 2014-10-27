angular.module('persons').factory('Persons', ['$resource',
	function($resource) {
		return $resource('/person/:personId', { personId:'@person',
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);'use strict';


angular.module('persons').factory('Projects', ['$resource',
	function($resource) {
		return $resource('/persons/:personId/Projects/:projectId', { personId:'@person', projectId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);
