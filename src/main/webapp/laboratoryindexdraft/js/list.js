define([ 'app' ], function(app) {
	app.register.controller('laboratoryIndexDraftListCtrl', function($scope, $http) {		
		$scope.getData=function(){
			$http({
				method : 'GET',
				url : "http://localhost:9090/laboratoryindexdrafts?pageIndex="+$scope.pageIndex+"&pageSize="+$scope.pageSize
			}).then(function successCallback(response) {
				$scope.indexDrafts = response.data.data;
				$scope.totalRow=response.data.totalRow;
				$scope.totalPage=response.data.totalPage;
			}, function errorCallback(response) {
				// 请求失败执行代码
			});
		};
		$scope.goNext=function()
		{
			if($scope.pageIndex<$scope.totalPage)
			{
			   $scope.pageIndex+=1;
			   $scope.getData();
			}
		};
		$scope.goPre=function()
		{
			if($scope.pageIndex>1){
			  $scope.pageIndex-=1;
			  $scope.getData();
			}
		};
		$scope.setPageSize=function(pageSize)
		{
			$scope.pageSize=pageSize;
			$scope.getData();
		};
		
		if(!$scope.pageIndex)
		{
			$scope.pageIndex=1;
		}
		if(!$scope.pageSize)
		{
			$scope.pageSize=10;
		}
		$scope.getData();
	});
});