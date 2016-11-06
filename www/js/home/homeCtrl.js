nscApp.controller("HomeCtrl", function ($scope, $rootScope, tiles, $window) {

  $rootScope.tiles = tiles.data.data;

  var fullScrollVal = 0;
  $scope.$on("new_scroll_val", function (evt, data) {
    fullScrollVal = data.fullScrollVal;
  });

  $scope.scrollLeft = function () {
    $(".f-box").animate({scrollLeft: 0}, 800);
  };

  $scope.scrollRight = function () {
    $(".f-box").animate({scrollLeft: fullScrollVal}, 500);
  };

  $scope.$on("$ionicView.afterEnter", function () {
    onResizeFunction();
  });

  angular.element($window).bind('resize', function () {
    onResizeFunction();
    $scope.$apply();
  });

  function onResizeFunction(){
    $scope.cal_width = {width: '100%'};
    var fix_ratio = 0.6595165679526173;
    var ele_height = $('.home-page-new .scroll-content').height() * fix_ratio - 5;


    if ($rootScope.orientation == "portrait") {
      $scope.cal_width = {width: ele_height + 'px'};
    }

    console.log($scope.cal_width);
  }
});
