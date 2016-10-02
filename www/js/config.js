nscApp.config(function ($ionicConfigProvider, $ionicFilterBarConfigProvider) {
  $ionicConfigProvider.backButton.previousTitleText(false);
  $ionicConfigProvider.views.swipeBackEnabled(false);
  //$ionicConfigProvider.scrolling.jsScrolling(false);
  $ionicConfigProvider.backButton.text('').icon('ion-ios-arrow-back');

  $ionicFilterBarConfigProvider.placeholder("search...");
});

nscApp.run(function ($ionicPlatform) {
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
