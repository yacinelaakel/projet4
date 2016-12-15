multilingua.controller('DatesCtrl', function($scope, $http, $cordovaLocalNotification) {
  //récupérer les dates depuis firebase
  var url = 'https://projet4-23e35.firebaseio.com/dates.json';
  var currentDate = new Date();
  // //Petit problème avec l'heure : elle a une heure de retard par rapport à moi
  currentDate.setHours(currentDate.getHours()+1);
  
  var items = [];
  $http.get(url).success(function(data) {
    angular.forEach(data, function(value, key) {
      //Format "YYYY-MM-DDTHour"
      var uneDate = new Date(value.date + "T" + value.heure);
      //On affiche que les dates futures
      if(uneDate > currentDate) {
          $scope.scheduleDelayedNotification = function () {
            var now = new Date().getTime();
            var _10SecondsFromNow = new Date(now + 10 * 1000);
      
            $cordovaLocalNotification.schedule({
              id: 1,
              title: 'Title here',
              text: 'Text here',
              at: _10SecondsFromNow
            }).then(function (result) {
            // ...
          });
    };
        items.push({date: value.date, heure: value.heure});
      }
    });
  });
  $scope.items = items;

});