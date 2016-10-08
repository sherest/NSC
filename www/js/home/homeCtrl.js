nscApp.controller("HomeCtrl", function ($scope, $rootScope, tiles) {

    $rootScope.tiles = tiles.data.data;

    var fullScrollVal = 0;
    $scope.$on("new_scroll_val", function(evt, data){
        fullScrollVal = data.fullScrollVal;
    });

    $scope.scrollLeft = function(){
        $(".f-box").animate({scrollLeft: 0}, 800);
    };

    $scope.scrollRight = function(){
        $(".f-box").animate({scrollLeft: fullScrollVal}, 500);
    }
});