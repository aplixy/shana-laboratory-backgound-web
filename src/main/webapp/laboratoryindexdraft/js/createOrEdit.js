define(['app'],function(app){
    app.register.controller('laboratoryIndexDraftCreateOrEditCtrl', function($scope,$http){
    	$scope.id = "John";
    	$scope.code = "John";
    	$scope.cnName = "Doe";
    	$scope.save = function() {
    		var data = {
    			code : $scope.code,
    			type : $scope.type,
    			cnName : $scope.cnName,
    			enName : $scope.enName,
    			unit : $scope.unit
    		};
    		var id = $scope.id;
    		debugger;
    		if (id && "" != id) {
    			data.id = id;
    			debugger;
    			$http.put('http://localhost:9090/laboratoryindexdrafts', data)
    					.then(function successCallback(response) {
    						var data = response.data.data;
    						$scope.id = data.id;
    						alert("保存成功");
    					}, function errorCallback(response) {
    						alert("保存失败");
    					});

    		} else {
    			$http.post('http://localhost:9090/laboratoryindexdrafts', data)
    					.then(function successCallback(response) {
    						var data = response.data.data;
    						debugger;
    						$scope.id = data.id;
    						alert("保存成功");
    					}, function errorCallback(response) {
    						alert("保存失败");
    					});

    		}
    	};
    	var id = $scope.id;
    	debugger;
    	if (id && "" != id) {
    		$http({
    			method : 'GET',
    			url : 'http://localhost:9090/laboratoryindexdrafts/'+id
    		}).then(function successCallback(response) {
    			debugger;
    			$scope.code = response.data.data.code;
    			$scope.type = response.data.data.type;
    			$scope.cnName = response.data.data.cnName;
    			$scope.enName = response.data.data.enName;
    		}, function errorCallback(response) {
    			// 请求失败执行代码
    		});
    	}
    });
})