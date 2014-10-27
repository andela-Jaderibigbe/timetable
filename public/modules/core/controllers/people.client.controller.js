'use strict';

angular.module('persons').controller('PersonsController', ['$scope', '$stateParams', '$location', 'Authentication', 'Persons', 'Projects'
	function($scope, $stateParams, $location, Authentication, Persons, projects) {
		$scope.authentication = Authentication;

		$scope.addPerson = function() {
			var person = new Persons({
				name: this.name,
				email: this.email,
				group: this.group
			});

			list.item.unshift(item);
			user.people.$save(function(response) {
				$location.path('#/' + response._id);

				$scope.person = '';
				$scope.email = '';
				$scope.group = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		$scope.removeProject = function(i) {
			$scope.person.projects.splice(i, 1);
		}
			


		$scope.update = function() {
			var person = $scope.person;

			person.$update(function() {
				$location.path('#/' + person._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};


	}
]);