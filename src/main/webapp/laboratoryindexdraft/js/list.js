define([ 'app' ], function(app) {
	app.register.controller('laboratoryIndexDraftListCtrl', function($scope, $http) {		
		$scope.getData=function(){
			var getDataUrl="http://localhost:9090/laboratoryindexdrafts?pageIndex="+$scope.pageIndex+"&pageSize="+$scope.pageSize;
			if($scope.type&&$scope.type!="全部类型")
			{
				
				getDataUrl+="&type="+$scope.type;
			}
			if($scope.code)
			{
				getDataUrl+="&code="+$scope.code;
			}
			if($scope.cnName)
			{
				getDataUrl+="&cnName="+$scope.cnName
			}
			$http({
				method : 'GET',
				url : getDataUrl
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
		$scope.setType=function(type)
		{
		    $scope.type=type;
		};
		$scope.search=function()
		{
		    $scope.getData();
		};
		$scope.deleteElement=function(id)
		{
			var deleteUrl="http://localhost:9090/laboratoryindexdrafts/"+id;
			$http({
				method : 'DELETE',
				url : deleteUrl
			}).then(function successCallback(response) {
				$scope.getData();
			}, function errorCallback(response) {
				// 请求失败执行代码
			});
		};
		
		if(!$scope.pageIndex)
		{
			$scope.pageIndex=1;
		}
		if(!$scope.pageSize)
		{
			$scope.pageSize=10;
		}
		if(!$scope.type)
		{
			$scope.type="全部类型";
		}
		$scope.getData();
	});
});