nscApp.controller("PageCtrl", function ($scope, $ionicViewSwitcher, $state) {


    var currentIndex = 0;

    $scope.$on('$stateChangeSuccess',function(event, toState, toParams, fromState, fromParams){
        var objTopic;
        var state = toState.name;
        currentIndex = _.indexOf($scope.uTopicList, state);


        $scope.__currentIndex = currentIndex;
        $scope.__listLength = $scope.uTopicList.length;

        if(currentIndex > -1){
            objTopic = _.findWhere($scope.topicsGroup, {state: state});
            if(objTopic){

                $scope.topicHeading = objTopic.head;
            }
        }else{
            objTopic = _.findWhere($scope.topicList, {state: state});
            if(objTopic){

                $scope.topicHeading = objTopic.head;
            }
        }
    });

    $scope.$on("SwipeLeftEvent", function(){

        $scope.moveRight();
    });

    $scope.$on("SwipeRightEvent", function(){

        $scope.moveLeft();
    });

    $scope.moveRight = function(){

        if(currentIndex < $scope.uTopicList.length - 1 && currentIndex > -1){
            $ionicViewSwitcher.nextDirection('forward');

            $scope.toState($scope.uTopicList[currentIndex+1]);
        }
    };

    $scope.moveLeft = function(){

        if(currentIndex > 0){
            $ionicViewSwitcher.nextDirection('back');

            $scope.toState($scope.uTopicList[currentIndex-1]);
        }
    };
});