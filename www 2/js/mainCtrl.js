nscApp.controller('MainCtrl', function ($scope, $rootScope, $http, $timeout, $ionicModal, $state, $window) {

  $scope.zoomImage = null;

  $http.get("jsons/topics.json").success(successHandler);

  function successHandler(response){

    $scope.topicList = response.topics;
    $scope.uTopicList = _.uniq(_.pluck($scope.topicList, "state"));
  }


  $scope.myWidth = $window.innerWidth;

  $(document).on("click", ".popupModalMain .modal-backdrop-bg", function(e){

    $scope.$apply(function(){

      $scope.closePopupModal();
      $scope.closeVerticalHelpModal();
    });
  });

  $scope.openFromPopup = function(toState){

    $scope.closePopupModal();

    $timeout(function() {
      $state.go(toState);
    }, 500);
  };


  $ionicModal.fromTemplateUrl('./js/common/templates/popup-modal.html', {
    scope: $scope,
    animation: 'fade-in'
  }).then(function (modal) {
    $scope.popupModal = modal;
  });
  $scope.openPopupModal = function () {
    $rootScope.bPopupModal = true;
    $scope.popupModal.show();
  };
  $scope.closePopupModal = function () {
    $scope.popupModal.hide();

    $timeout(function(){
      $rootScope.bPopupModal = false;
    }, 500);
  };




  $ionicModal.fromTemplateUrl('./js/common/templates/image-modal.html', {
    scope: $scope,
    animation: 'fade-in'
  }).then(function (modal) {
    $scope.imageModal = modal;
  });
  $scope.showFullImage = function (url) {
    $rootScope.bPopupModal = true;
    $scope.zoomImage = url;
    $scope.imageModal.show();
  };
  $scope.closeImageModal = function () {
    $timeout(function(){
      $rootScope.bPopupModal = false;
    }, 500);

    $scope.imageModal.hide();
  };



  $ionicModal.fromTemplateUrl('./js/common/templates/vertical-help.html', {
    scope: $scope,
    animation: 'fade-in'
  }).then(function (modal) {
    $scope.verticalHelpModal = modal;

    if(!window.localStorage['AppLaunched']){

      $rootScope.bPopupModal = true;
      $scope.verticalHelpModal.show();

      window.localStorage['AppLaunched'] = "true";
    }
  });
  $scope.openVerticalHelpModal = function () {

    $scope.popupModal.hide();

    $rootScope.bPopupModal = true;
    $scope.verticalHelpModal.show();
  };
  $scope.closeVerticalHelpModal = function () {
    $scope.verticalHelpModal.hide();

    $timeout(function(){
      $rootScope.bPopupModal = false;
    }, 500);
  };


  $scope.openPage = function (selectedTopic, topics) {


    $scope.getGroupListing (selectedTopic);


    if(topics){

      if(selectedTopic.head == "Memory Aids"){

        $scope.toState('page.abbreviations');
      } else {
        checkTopic(selectedTopic.head);
      }

    } else {
      //if state is not defined then get borrow it from uTopicList and show its first state.
      if(!selectedTopic.state){
        $scope.toState($scope.uTopicList[0]);
      }else{
        $scope.toState(selectedTopic.state);
      }
    }

  };

  $scope.getGroupListing = function(selectedTopic){
    $scope.topicsGroup = _.where($scope.topicList, {head: selectedTopic.head}).sort(compare); //all topics as object array
    $scope.uTopicList = _.uniq(_.pluck($scope.topicsGroup, "state")); //all states of selected topic as string of array
  };

  function checkTopic(head){
    switch(head){
      case "Memory Aids": $scope.toState("memoryAidTopics"); break;
      case "Responder Safety": $scope.toState("responderSafetyTopics"); break;
      case "Assessment": $scope.toState("assessmentTopics"); break;
      case "Circulation/Airway/Breathing": $scope.toState("airwayTopics"); break;
      case "Medical": $scope.toState("medicalTopics"); break;
      case "Trauma": $scope.toState("traumaTopics"); break;
      case "EMS Operations": $scope.toState("emsOperationsTopics"); break;
      case "Special Situations": $scope.toState("specialSituationsTopics"); break;
      case "Miscellaneous": $scope.toState("miscellaneousTopics"); break;
      case "A-Z": $scope.toState("AZTopics"); break;
    }
  }

  function compare(a,b){
    if (a["title"].toLowerCase() < b["title"].toLowerCase())
      return -1;
    if (a["title"].toLowerCase() > b["title"].toLowerCase())
      return 1;
    return 0;
  }

  $scope.toState = function(toState){
    if(toState != ""){
      $state.go(toState);
    }
  };

  function onResizeFunction() {
    var windowHeight = window.innerHeight;
    var windowWidth = window.innerWidth;
    $rootScope.orientation = windowWidth < windowHeight ? 'portrait' : 'landscape';

    var ratio = gcd (windowWidth, windowHeight);
    var sRatio = windowHeight/ratio + ":" + windowWidth/ratio;

    console.log(ratio,  windowHeight/ratio + ":" + windowWidth/ratio, $rootScope.orientation);


    $("body").removeClass("portrait landscape").addClass($rootScope.orientation);
  }

  function gcd (a, b) {
    return (b == 0) ? a : gcd (b, a%b);
  }

  angular.element($window).bind('resize', function () {
    onResizeFunction();
    $scope.$apply();
  });

  onResizeFunction();
});
