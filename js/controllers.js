const dataUrl = "https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json";

appBrastlewark.controller("GnomeController", ($scope, $http, $routeParams, $window) =>
{
	$scope.id = $routeParams.id;

	$http(
	{
		method: 'GET',
		url: dataUrl,
		cache:true
	}).then(function(result)
	{
		const data = result.data.Brastlewark;

		let gnome = {};

		if (isNaN(Number($scope.id)))
		{
			gnome = data.filter(gnome => gnome.name.toLowerCase() === $scope.id.toLowerCase());
		} else {

			gnome = data.filter(gnome => gnome.id === parseInt($scope.id));
		}

		$scope.inhabitant = gnome[0];
	});

	$scope.goback = () =>
	{
		$window.history.back();
	};
});

appBrastlewark.controller("HomeController", ($scope, $http) =>
{
	$scope.limit = 40;

	$http(
	{
		method: 'GET',
		url: dataUrl,
		cache:true
	}).then(function(result)
	{
		const data = result.data.Brastlewark
		$scope.inhabitants = data;

		$scope.featured = [];
		let gnomesFeatured = 2;

		for (let i = 0; i < gnomesFeatured; i++)
		{
			$scope.featured.push(data[parseInt(Math.random() * data.length)]);
		}
	});

	$scope.showMore = () =>
	{
		$scope.limit += 20;
	}
});
