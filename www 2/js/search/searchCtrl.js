nscApp.controller("SearchCtrl", function ($scope, $ionicNavBarDelegate, $timeout) {

  $scope.search = {title:''};
  var targetElement = null;

  $scope.goBack = function() {
    $ionicNavBarDelegate.back();
  };

  $scope.clearSearch = function(){
    $scope.search.title = "";

    $timeout(function(){
      targetElement.focus();
    }, 0);
  };

  $scope.retainFocus = function(){
    targetElement.focus();
  };

  $scope.$on("$ionicView.afterEnter", function(){

    $timeout(function(){
      targetElement = $(".item-input");

      targetElement.focus();
    }, 1);
  })
});
