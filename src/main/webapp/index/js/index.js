//'use strict';
define(["require", "angular", "angular-ui-router","app"], function(require, angular,uiRouter,app) {   	
    app.config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider){   	
    	$urlRouterProvider.otherwise('laboratoryindexdraft');   	
    	var hospitalRouteState=app.generateRouteState("hospitalDraftListCtrl","/hospitaldraft/list.html",'/hospitaldraft/js/list.js');   
    	var indexDraftRouteState=app.generateRouteState("laboratoryIndexDraftListCtrl","/laboratoryindexdraft/list.html",'/laboratoryindexdraft/js/list.js');
    	var indexDraftCreateOrEditRouteState=app.generateRouteState("laboratoryIndexDraftCreateOrEditCtrl","/laboratoryindexdraft/createOrEdit.html",'/laboratoryindexdraft/js/createOrEdit.js',{id:null}); 
    	
    	$stateProvider
    	.state('hospitaldraft',hospitalRouteState)
        .state('laboratoryindexdraft',indexDraftRouteState)
        .state('laboratoryindexdraftcreateoredit',indexDraftCreateOrEditRouteState);
    }]);
    return app;
});