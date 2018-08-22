app.controller('DayController', ['$scope', 'events',  function($scope) {
	events.success(function(data) {
    $scope.day = data;
  });
}]);