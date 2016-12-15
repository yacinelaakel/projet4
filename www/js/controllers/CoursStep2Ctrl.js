multilingua.controller('CoursStep2Ctrl', function($scope, $stateParams, $ionicPopup, $state) {
  //Contient seulement les exercices
  $scope.leCoursExercice = JSON.parse($stateParams.leCoursExercice);

  $scope.erreur = false;
  $scope.afficherSolution = false;

  $scope.showAlert = function() {
    //reset en cas d'erreur
    $scope.score = 0;
    $scope.totalQuestion = 0;
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
      $scope.totalQuestion++;
    });
    if($scope.propsSelected.indexOf(undefined) == -1) {
      var alertPopup = $ionicPopup.alert({
        title: 'Votre score',
        cssClass: 'submitButton',
        template: '<strong style="color:green; font-size:19px">' + $scope.score + '</strong>/' + $scope.totalQuestion + ' <span style="font-size:19px"> bonne(s) réponse !</span>'
      });

      alertPopup.then(function(res) {
        $state.go('tab.cours');
      });
    }
  };
})