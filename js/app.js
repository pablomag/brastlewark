const appBrastlewark = angular.module("appBrastlewark", ['ngRoute']);

appBrastlewark.config(['$routeProvider',
	function ($routeProvider)
	{
		$routeProvider.
			when('/gnome/:id', {
				templateUrl: 'views/gnome.html',
				controller: 'GnomeController'
			}).
			when('/', {
				templateUrl: 'views/home.html',
				controller: 'HomeController'
			}).
			otherwise({
				redirectTo: '/'
			});
	}
]);
