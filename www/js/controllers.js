angular.module('multilingua.controllers', [])

.controller('CoursCtrl', function($scope) {})

.controller('CoursStep1Ctrl', function($scope, $stateParams, Lessons) {
  //Langue choisie
  $scope.selectedLanguage = $stateParams.selectedLanguage;

  //On récupère un cours selon le jours actuel et selon la matière choisie
  $scope.leCours = Lessons.get($stateParams.selectedLanguage);

  var audio = "audio/";
  $scope.audio = audio.concat($scope.leCours.audio);

})

.controller('CoursStep2Ctrl', function($scope, $stateParams, $ionicPopup, $state) {
  //Contient seulement les exercices
  $scope.leCoursExercice = JSON.parse($stateParams.leCoursExercice);

  $scope.erreur = false;
  $scope.afficherSolution = false;

  $scope.showAlert = function() {
    //reset en cas d'erreur
    $scope.score = 0;
    $scope.propsSelected = [];
    angular.forEach($scope.leCoursExercice, function(exercice) {
      if(exercice.propSelected == null) {
        $scope.erreur = true;
        $scope.propsSelected.push(exercice.propSelected);
      } else {
        $scope.propsSelected.push(exercice.propSelected);
        if(exercice.reponse == exercice.propSelected) {
          $scope.score++;
        }
      }
    });
    if($scope.propsSelected.indexOf(undefined) == -1) {
      var alertPopup = $ionicPopup.alert({
        title: 'Votre score',
        cssClass: 'submitButton',
        template: '<strong style="color:green; font-size:19px">' + $scope.score + '</strong><span style="font-size:19px"> bonne(s) réponse !</span>'
      });

      alertPopup.then(function(res) {
        $state.go('tab.cours');
      });
    }
  };
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

.controller('DatesCtrl', function($scope, $http, $cordovaLocalNotification) {
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
