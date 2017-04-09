define([ 'app' ], function(app) {
	app.register.controller('laboratoryIndexDraftListCtrl', function($scope, $http) {
		$http({
			method : 'GET',
			url : 'http://localhost:9090/laboratoryindexdrafts'
		}).then(function successCallback(response) {
			$scope.indexDrafts = response.data.data;
			$scope.pageIndex=1;
			$scope.pageSize=10;
			$scope.total=6;
		}, function errorCallback(response) {
			// 请求失败执行代码
		});
	});
});