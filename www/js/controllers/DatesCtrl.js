multilingua.controller('DatesCtrl', function($scope, $stateParams, Dates) {

  //Toutes les dates des cours à venir
  Dates.get(function(items) {
    $scope.items = items;
  });

});

