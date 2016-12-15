multilingua.controller('ContactCtrl', function($scope, $http) {

  var items = [];
  var url = 'https://projet4-23e35.firebaseio.com/responsables.json';
  $http.get(url).success(function(data) {
    angular.forEach(data, function(value, key) {
      items.push({key, value});
    });
    return items;
  });

  $scope.items = items;

})