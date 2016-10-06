nscApp.config(function ($ionicConfigProvider, $ionicFilterBarConfigProvider) {
  $ionicConfigProvider.backButton.previousTitleText(false);
  $ionicConfigProvider.views.swipeBackEnabled(false);
  //$ionicConfigProvider.scrolling.jsScrolling(false);
  $ionicConfigProvider.backButton.text('').icon('ion-ios-arrow-back');

  $ionicFilterBarConfigProvider.placeholder("Search...");
});

nscApp.run(function ($ionicPlatform, $rootScope) {
  $rootScope.bPopupModal = false;
  $ionicPlatform.ready(function () {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
      StatusBar.styleLightContent();
    }
  });
});
