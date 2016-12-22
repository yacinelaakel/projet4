multilingua.controller('ContactCtrl', function($scope, Contact) {

  Contact.get(function(items) {
    $scope.items = items;
  });

})