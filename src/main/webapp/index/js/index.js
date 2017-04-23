//'use strict';
define(["require", "angular", "angular-ui-router","app"], function(require, angular,uiRouter,app) {   	
    app.config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider){   	
    	$urlRouterProvider.otherwise('laboratoryindexdraft');  
    	var hospitalPage="/hospitaldraft/list.html";    	
    	var indexDraftPage="/laboratoryindexdraft/list.html";   	
    	var indexDraftCreateOrEditPage="/laboratoryindexdraft/createOrEdit.html"; 
    	
    	if(app.isPhone()){
 
    	  hospitalPage="/hospitaldraft/list_p.html";    	
    	  indexDraftPage="/laboratoryindexdraft/list_p.html";   	
    	  indexDraftCreateOrEditPage="/laboratoryindexdraft/createOrEdit_p.html"; 
    	}
    	
    	var hospitalRouteState=app.generateRouteState("hospitalDraftListCtrl",hospitalPage,'/hospitaldraft/js/list.js');   
    	var indexDraftRouteState=app.generateRouteState("laboratoryIndexDraftListCtrl",indexDraftPage,'/laboratoryindexdraft/js/list.js');
    	var indexDraftCreateOrEditRouteState=app.generateRouteState("laboratoryIndexDraftCreateOrEditCtrl",indexDraftCreateOrEditPage,'/laboratoryindexdraft/js/createOrEdit.js',{id:null}); 
    	$stateProvider
    	.state('hospitaldraft',hospitalRouteState)
        .state('laboratoryindexdraft',indexDraftRouteState)
        .state('laboratoryindexdraftcreateoredit',indexDraftCreateOrEditRouteState);
    }]);
    app.controller('indexCtrl', [ '$scope',function($scope) {
        $scope.load('laboratoryindexdraft',{});
        $scope.showMenu_v = false;
        $scope.showOrHiveMenu_v = function () {
        	$scope.showMenu_v  = !$scope.showMenu_v;
        	title_menu=document.getElementById('title_menu');
        	if(!title_menu)
        		return;
        	debugger;   
        	if($scope.showMenu_v)
        	{
        	
        		title_menu.style.visibility="visible";   		   		
        	}
        	else
        	{
        		title_menu.style.visibility="hidden";
        	}
        	debugger
        	return false;
        };
        //document.onclick=$scope.showOrHiveMenu_v;
    }]);
    return app;
});