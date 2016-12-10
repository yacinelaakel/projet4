angular.module('multilingua.controllers', [])

.controller('CoursCtrl', function($scope) {})

.controller('CoursStep1Ctrl', function($scope, $stateParams, Lessons) {

  //Langue choisie
  $scope.selectedLanguage = $stateParams.selectedLanguage;
  //Associe la langue choisie au subject concerné 
  var lessons = Lessons.get($stateParams.selectedLanguage);

  //Choisit une leçon au hasard dans le subject concerné
  var nbr = Math.floor((Math.random() * lessons.cours.length - 1) + 1);
  $scope.leCours = lessons.cours[nbr];

  var audio = "audio/";
  $scope.audio = audio.concat($scope.leCours.audio);

})

.controller('CoursStep2Ctrl', function($scope, $stateParams) {
  $scope.leCours = $stateParams.leCours;
})

.controller('ContactCtrl', function($scope, $http) {

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

.controller('DatesCtrl', function($scope, $http) {
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
        items.push({date: value.date, heure: value.heure});
      }
    });
  });
  $scope.items = items;

});
