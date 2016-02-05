var app = angular.module('app', []);

app.controller('RestClientController', function($scope, $http) {
	$http.get('http://rest-service.guides.spring.io/greeting').
		success(function(response) {
		$scope.webServiceResponse = response;
	});
});


app.controller('JsonpController', function($scope, $http) {
	
	var url = "http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=44db6a862fba0b067b1930da0d769e98";
	$http({
	  method: 'get',
	  url: url
	}).then(function successCallback(response) {
		// this callback will be called asynchronously
		// when the response is available
		console.log(response);
		$scope.webServiceResponse = response;
	  }, function errorCallback(response) {
		// called asynchronously if an error occurs
		// or server returns response with an error status.
		console.log(response);
	  });
});




