nscApp.controller('AppCtrl', function ($scope, topicList, $timeout, $ionicFilterBar, $ionicModal, $state, $ionicHistory, $ionicViewSwitcher, $ionicSideMenuDelegate, $state, $window) {

    $scope.myWidth = $window.innerWidth;

    $scope.topicList = topicList.data.topics;
    $scope.uTopicList = _.uniq(_.pluck(topicList.data.topics, "state"));

    $ionicModal.fromTemplateUrl('./js/common/templates/search-modal.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function (modal) {
        $scope.modal = modal;
    });
    $scope.openModal = function () {
        $scope.modal.show();
    };
    $scope.closeModal = function () {
        $scope.modal.hide();
    };
    // Cleanup the modal when we're done with it!
    $scope.$on('$destroy', function () {
        $scope.modal.remove();
    });
    // Execute action on hide modal
    $scope.$on('modal.hidden', function () {
        // Execute action
    });
    // Execute action on remove modal
    $scope.$on('modal.removed', function () {
        // Execute action
    });

    $scope.toggleLeftSideMenu = function () {
        $ionicSideMenuDelegate.toggleLeft();
    };

    $scope.openPage = function (selectedTopic) {

        if (filterBarInstance){
            filterBarInstance(); //hide filter-bar instance
        }


        $scope.topicsGroup = _.where($scope.topicList, {head: selectedTopic.head}).sort(compare)
        $scope.uTopicList = _.uniq(_.pluck($scope.topicsGroup, "state"));

        $scope.toState(selectedTopic.state || "app.bleeding.bleedingExternal");

    };

    function compare(a,b){
        if (a["title"].toLowerCase() < b["title"].toLowerCase())
            return -1;
        if (a["title"].toLowerCase() > b["title"].toLowerCase())
            return 1;
        return 0;
    }

    angular.element($window).bind("resize", function () {

        $scope.myWidth = $window.innerWidth;

        if ($ionicSideMenuDelegate.isOpen()) {
            $("ion-side-menu-content").css({'transform': 'translate3d(-' + 736 + 'px, 0px, 0px)'});
        }
    });

    var filterBarInstance;
    $scope.filterObject = {topic: ""};

    $scope.search = function () {
        $scope.openModal();

        $timeout(function () {
            perform_action();
        }, 100);

    };

    $scope.toState = function(toState){
        if(toState != ""){
            $state.go(toState);
        }
    };

    function perform_action() {

        filterBarInstance = $ionicFilterBar.show({

            items: $scope.topicList,
            update: function (filteredItems, filterText) {

                $scope.filterObject.topic = filterText;
                $scope.filteredList = filteredItems;
            },
            cancel: function () {
                $scope.closeModal();
            },
            filterProperties: 'title'
        });
    }
});