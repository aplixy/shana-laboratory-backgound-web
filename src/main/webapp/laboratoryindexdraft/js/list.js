var laboratoryIndexDraftListApp= angular.module('laboratoryIndexDraftListApp', []);
laboratoryIndexDraftListApp.controller('laboratoryIndexDraftListCtrl', function($scope, $http) {
    $http({
        method: 'GET',
        url: 'http://localhost:9090/laboratoryindexdrafts'
    }).then(function successCallback(response) {
    	debugger;
            $scope.indexDrafts = response.data.data;

        }, function errorCallback(response) {
            // 请求失败执行代码
    });
});
angular.bootstrap(document.getElementById("laboratoryIndexDraftListApp"), ['laboratoryIndexDraftListApp']);