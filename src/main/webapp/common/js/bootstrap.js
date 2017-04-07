require.config({
	paths : {
		"domReady" : '/common/js/third/domReady',
		"angular" : '/common/js/third/angular.min',
		"angular-ui-router" : '/common/js/third/angular-ui-router',
		"app" : '/common/js/app'
	},
	shim : {
		"angular" : {
			exports : "angular"
		},
		"angular-ui-router" : {
			deps : [ "angular" ],
			exports : "angular-ui-router"
		},
		"app" : {
			deps : [ "angular","angular-ui-router" ],
			exports : "app"
		}
	},
	deps : [ '/index/js/index.js' ],
	urlArgs : "bust=" + (new Date()).getTime()
});
