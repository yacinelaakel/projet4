var multilingua = angular.module('multilingua', ['ionic', 'ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
  
  $ionicConfigProvider.views.maxCache(0);
  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.cours', {
    cache: false,
    url: '/cours',
    views: {
      'tab-cours': {
        templateUrl: 'templates/tab-cours.html',
        controller: 'CoursCtrl'
      }
    }
  })

  .state('tab.step1', {
    url: '/step1/:selectedLanguage',
    views: {
      'tab-cours': {
        templateUrl: 'templates/cours-step1.html',
        controller: 'CoursStep1Ctrl'
      }
    }
  })

  .state('tab.step2', {
    url: '/step2/:leCoursExercice',
    views: {
      'tab-cours': {
        templateUrl: 'templates/cours-step2.html',
        controller: 'CoursStep2Ctrl'
      }
    }
  })

  .state('tab.contact', {
      url: '/contact',
      views: {
        'tab-contact': {
          templateUrl: 'templates/tab-contact.html',
          controller: 'ContactCtrl'
        }
      }
    })

  .state('tab.dates', {
    url: '/dates',
    views: {
      'tab-dates': {
        templateUrl: 'templates/tab-dates.html',
        controller: 'DatesCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/cours');

});
