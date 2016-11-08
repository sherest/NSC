nscApp.directive('swipeGesture', function($ionicGesture, $state) {
    return {
        restrict : 'A',
        link : function(scope, elem, attr) {

            $ionicGesture.on('swiperight', function(event) {

                scope.$emit("SwipeRightEvent");

            }, elem);

            $ionicGesture.on('swipeleft', function(event) {

                scope.$emit("SwipeLeftEvent");

            }, elem);

        }
    }
});