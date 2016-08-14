nscApp.controller("PageCtrl", function ($scope, $ionicViewSwitcher, $state) {


    var currentIndex = 0;

    $scope.$on('$stateChangeSuccess',function(event, toState, toParams, fromState, fromParams){
        var state = {url: toState.url };
        currentIndex = _.findIndex($scope.topicList, state);
    });

    $scope.$on("SwipeLeftEvent", function(){

        if(currentIndex < $scope.topicList.length - 1 ){
            $ionicViewSwitcher.nextDirection('forward');

            $scope.toState($scope.topicList[currentIndex+1].state);
        }

    });

    $scope.$on("SwipeRightEvent", function(){

        if(currentIndex > 0){
            $ionicViewSwitcher.nextDirection('back');

            $scope.toState($scope.topicList[currentIndex-1].state);
        }
    });
});