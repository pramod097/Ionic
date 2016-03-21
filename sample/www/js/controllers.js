angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.products = false;
  $scope.getProducts= function(){
    $scope.products = !$scope.products ;
  };

  $scope.showstartcard = true;
  $scope.showsecondcard = true;
  $scope.hidecard= function(){
    $scope.showstartcard = false;
    $scope.showsecondcard = true;
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('LoginCtrl', function($scope, $rootScope) {
    $scope.loginData = {};
    $scope.doLogin = function() {
        console.log("LOGIN user: " + $scope.loginData.username + " - PW: " + $scope.loginData.password);
        $rootScope.location("/app/main")
    }
    $scope.loginData= {
      username: 'pramod@gmail.com',
      password: '123456'
    }
})



