nscApp.controller("PageCtrl", function ($scope, $ionicViewSwitcher, $state) {


    var currentIndex = 0;

    $scope.$on('$stateChangeSuccess',function(event, toState, toParams, fromState, fromParams){
        var state = toState.name;
        currentIndex = _.indexOf($scope.uTopicList, state);

        if(currentIndex > -1){
            var objTopic = _.findWhere($scope.topicsGroup, {state: state});
            $scope.topicHeading = objTopic.head;
        }
    });

    $scope.$on("SwipeLeftEvent", function(){

        if(currentIndex < $scope.uTopicList.length - 1 && currentIndex > -1){
            $ionicViewSwitcher.nextDirection('forward');

            $scope.toState($scope.uTopicList[currentIndex+1]);
        }

    });

    $scope.$on("SwipeRightEvent", function(){

        if(currentIndex > 0){
            $ionicViewSwitcher.nextDirection('back');

            $scope.toState($scope.uTopicList[currentIndex-1]);
        }
    });
});