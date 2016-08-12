nscApp.directive('a', function () {
    return {
        restrict: 'E',
        link: function (scope, element, attrs) {
            if ( !attrs.href ){
                return;
            }
            var url = attrs.href;
            if ( url.lastIndexOf('http',0) === 0 ){
                element.on('click',function(e){
                    e.preventDefault();
                    if(attrs.ngClick){
                        scope.$eval(attrs.ngClick);
                    }
                    window.open(encodeURI(url), '_system');
                });
            }
        }
    };
});