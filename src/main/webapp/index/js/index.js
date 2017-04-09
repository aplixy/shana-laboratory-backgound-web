//'use strict';
define(["require", "angular", "angular-ui-router","app"], function(require, angular,uiRouter,app) {   	
    app.config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider){   	
    	$urlRouterProvider.otherwise('laboratoryindexdraft');   	
    	var hospitalRouteState=app.generateRouteState("hospitalDraftListCtrl","/hospitaldraft/list.html",'/hospitaldraft/js/list.js');   
    	var indexRouteState=app.generateRouteState("laboratoryIndexDraftListCtrl","/laboratoryindexdraft/list.html",'/laboratoryindexdraft/js/list.js'); 
    	$stateProvider
    	.state('hospitaldraft',hospitalRouteState)
        .state('laboratoryindexdraft',indexRouteState);
    }]);
    return app;
});