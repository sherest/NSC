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

nscApp.directive("scrollPosition", function ($timeout, $window) {
    return function(scope, element, attrs) {

        angular.element(element).bind("scroll", function() {

            updateScroll (this);
        });

        angular.element($window).bind("resize", function() {

            $timeout(function(){
                angular.element(element).trigger("scroll");
            },1000);
        });

        function updateScroll(_this){
            scope.isScroll = _this.scrollWidth > _this.clientWidth;
            scope.isLeft = _this.scrollLeft > 0;
            scope.isRight = (_this.scrollWidth - _this.scrollLeft) > _this.clientWidth;
            scope.fullScrollVal = _this.scrollWidth - _this.clientWidth;

            if(scope.fullScrollVal<0){
                scope.fullScrollVal = 0;
            }

            scope.$emit("new_scroll_val", {"fullScrollVal": scope.fullScrollVal});

            // console.log(this.clientWidth, this.scrollWidth, this.scrollLeft);
            console.log(scope.isScroll, scope.isLeft, scope.isRight);

            scope.$apply();
        }

        $timeout(function(){
            angular.element(element).trigger("scroll");
        },1000);
    };
});