nscApp.controller("BleedingCtrl", function ($scope, $ionicViewSwitcher, $state) {


    var currentIndex = 0;

    $scope.$on('$stateChangeSuccess',function(event, toState, toParams, fromState, fromParams){
        var state = {url: toState.url };
        currentIndex = _.findIndex($scope.topicList, state);

        console.log(currentIndex);
    });

    $scope.$on("SwipeLeftEvent", function(){

        if(currentIndex < $scope.topicList.length - 1 ){
            $ionicViewSwitcher.nextDirection('forward');
            $state.go($scope.topicList[currentIndex+1].state);
        }

    });

    $scope.$on("SwipeRightEvent", function(){

        if(currentIndex > 0){
            $ionicViewSwitcher.nextDirection('back');
            $state.go($scope.topicList[currentIndex-1].state);
        }
    });
});