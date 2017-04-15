define(["app"],function(app){
    app.register.controller('laboratoryIndexDraftCreateOrEditCtrl',['$scope','$http','$stateParams', function($scope,$http,$stateParams){
    	$scope.id = $stateParams.id;
    	$scope.save = function() {
    		var data = {
    			code : $scope.code,
    			type : $scope.type,
    			cnName : $scope.cnName,
    			enName : $scope.enName,
    			minNormal:$scope.minNormal,
    			maxNormal:$scope.maxNormal,
    			min:$scope.min,
    			max:$scope.max,
    			unit : $scope.unit
    		};
    		var id = $scope.id;
    		if (id && "" != id) {
    			data.id = id;
    			
    			$http.put('http://localhost:9090/laboratoryindexdrafts', data)
    					.then(function successCallback(response) {
    						var data = response.data;
    						alert('保存成功');
    					}, function errorCallback(response) {
    						alert('保存失败');
    					});

    		} else {
    			$http.post('http://localhost:9090/laboratoryindexdrafts', data)
    					.then(function successCallback(response) {
    						var data = response.data;
    						debugger;
    						$scope.id = data.id;
    						alert('保存成功');
    					}, function errorCallback(response) {
    						alert('保存失败');
    					});

    		}
    	};
    	$scope.reset=function()
		{
    		$scope.getData();
		};
    	$scope.setType=function(type)
		{
		    $scope.type=type;
		};
		$scope.setUnit=function(unit)
		{
		    $scope.unit=unit;
		};
		$scope.getData=function(){
    	   var id = $scope.id;
    	   if (id && "" != id) {
    		  $http({
    			method : 'GET',
    			url : 'http://localhost:9090/laboratoryindexdrafts/'+id
    		  }).then(function successCallback(response) {
    			
    			$scope.code = response.data.data.code;
    			$scope.type = response.data.data.type;
    			$scope.cnName = response.data.data.cnName;
    			$scope.enName = response.data.data.enName;
    			$scope.maxNormal = response.data.data.maxNormal;
    			$scope.minNormal = response.data.data.minNormal;
    			$scope.max = response.data.data.max;
    			$scope.min = response.data.data.min;
    			$scope.unit = response.data.data.unit;
    		  }, function errorCallback(response) {
    			// 请求失败执行代码
    		 });
    	   }
		};
		$scope.getData();
    }]);
})