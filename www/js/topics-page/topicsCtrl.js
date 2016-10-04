nscApp.controller('TopicsCtrl', function ($scope){

    if($scope.topicsGroup){
        $scope.topicHeading = $scope.topicsGroup[0].head;
    }


});