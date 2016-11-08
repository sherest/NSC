/**
 * Created by shmehta on 27/10/16.
 */
nscApp.directive('focusMe', function($timeout) {
  return {
    link: function(scope, element, attrs) {

      $timeout(function() {
        element[0].focus();
      });
    }
  };
});
