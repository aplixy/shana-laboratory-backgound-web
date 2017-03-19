var app = angular.module("conditionEditApp", []);

app.controller('conditionEditCtrl', function($scope, $http, $location) {
	var id = $location.search().id;
	if (id) {
		$scope.id=id;
		$http.get("http://localhost:9090/api/condition/" + id).success(
				function(response) {
					$scope.condition.name = response.name;
					$scope.condition.alias = response.alias;
					$scope.condition.enName = response.enName;
					$scope.condition.enAlias = response.enAlias;
					$scope.condition.abbreviation = response.abbreviation;
				});
	}
	$scope.save=function(condition){
		$http.post("http://localhost:9090/api/condition",condition).success(
				function(response) {
					 alert("success");
				});
	};
   
});