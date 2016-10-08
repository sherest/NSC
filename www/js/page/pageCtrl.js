nscApp.controller("PageCtrl", function ($scope, $rootScope, $ionicViewSwitcher, $state) {


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
        } else if($scope.topicHeading){

            //move to next head topics list page
            moveToNextTopic($scope.topicHeading, 1);
        }
    };

    $scope.moveLeft = function(){

        if(currentIndex > 0){
            $ionicViewSwitcher.nextDirection('back');

            $scope.toState($scope.uTopicList[currentIndex-1]);
        } else if($scope.topicHeading){

            //move to previous head topics list page
            moveToNextTopic($scope.topicHeading, 0);
        }
    };

    function moveToNextTopic(head, count){
        var _currentIndex = _.findLastIndex($rootScope.tiles, {
            head: $scope.topicHeading
        });

        _currentIndex+=count;

        if(_currentIndex >= $rootScope.tiles.length){
            _currentIndex = 0;
        } else if(_currentIndex < 0){
            _currentIndex = $rootScope.tiles.length-1;
        }

        var nextTopicObject = $rootScope.tiles[_currentIndex];
        $scope.openPage(nextTopicObject, 'app.topics');
    }
});