'use strict';

angular.module('persons').controller('PersonsController', ['$scope', '$stateParams', '$location', 'Authentication', 'Persons', 'Projects', 'Assignments',
	function($scope, $stateParams, $location, Authentication, Persons, Projects, Assignments) {
		$scope.authentication = Authentication;
		$scope.persons = [];
		$scope.person = {};
		$scope.assignments = Assignments.query();
		$scope.addPerson = function() {
			var person = new Persons({
				name: this.name,
				email: this.email,
				group: this.group
			});

			
			user.people.$save(function(response) {
			$scope.persons.push(response);
			$scope.persons.unshift(person);


				$scope.person = '';
				$scope.email = '';
				$scope.group = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		$scope.removeAssignment = function(i) {
			$scope.assignments[i].splice(0, 1);
		}
			


		$scope.update = function() {
			var person = $scope.person;

			person.$update(function() {
				$location.path('#/' + person._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		$scope.selectPerson = function(person) {
			$scope.person =  person;
			
		}

		$scope.assignProject = function(){
			var assignment = new Assignments({
				name: this.name,
				project: this.project,
				people: this.peole,
				startDate: this.startDate,
				endDate: this.endDate,
				user: this.user,
				created: this.created
			});

			assignment.$save(function(response){
				$scope.assignments.push(response);
			})
		}


	}
]);


