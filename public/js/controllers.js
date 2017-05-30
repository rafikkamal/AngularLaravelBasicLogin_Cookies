myApp.controller('userController', ['$scope', '$http', '$location', 'userModel',
	function($scope, $http, $location, userModel){
	angular.extend($scope, {
		doLogin: function(loginFrom){
			var data = {
                email: $scope.login.email,
                password: $scope.login.password
            };
            /*
			return $http({
	            headers: {
	                'Content-Type': 'application/json'
	            },
	            url: baseUrl + 'auth',
	            method: "POST",
	            data: {
	                email: login.email.$viewValue,
	                password: login.password.$viewValue
	            }
	        }).then(function successCallback(response) {
	        	console.log($location.absUrl());
	        	$location.path('/dashboard');
			}, function errorCallback(response) {
	        	alert('ERROR : '+response.data);
			});
			*/
			userModel.doLogin(data).then(function(){
				$location.path('/dashboard');
			});
		},
		doLogout: function(){
			userModel.doUserLogout();
			$location.path('/');
		}
	});
	
}]);
//# sourceMappingURL=controllers.js.map
