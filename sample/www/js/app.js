// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform,$rootScope,$location) {
    $rootScope.location= function(path){
      $location.path(path);
    }
  
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider


  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'LoginCtrl'
    })

  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.contents', {
    url: '/contents',
    views: {
      'menuContent': {
        templateUrl: 'templates/contents.html'
      }
    }
  })

  .state('app.browse', {
      url: '/browse',
      views: {
        'menuContent': {
          templateUrl: 'templates/browse.html'
        }
      }
    })

    .state('app.main', {
      url: '/main',
      views: {
        'menuContent': {
          templateUrl: 'templates/main.html',
        }
      }
    })

    .state('app.details', {
      url: '/details',
      views: {
        'menuContent': {
          templateUrl: 'templates/details.html',
        }
      }
    })

    .state('app.cart', {
      url: '/cart',
      views: {
        'menuContent': {
          templateUrl: 'templates/cart.html',
        }
      }
    })

    .state('app.user_details', {
      url: '/user_details',
      views: {
        'menuContent': {
          templateUrl: 'templates/user_details.html',
        }
      }
    })

    .state('app.orders', {
      url: '/orders',
      views: {
        'menuContent': {
          templateUrl: 'templates/orders.html',
        }
      }
    })


    .state('app.order_details', {
      url: '/order_details',
      views: {
        'menuContent': {
          templateUrl: 'templates/order_details.html'
        }
      }
    })



  
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');
});
