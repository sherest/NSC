angular.module('ion-alpha-scroll', [])
    .directive('repeatDone', function ($timeout) {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                if (scope.$last) {
                    $timeout(function () {
                        scope.$eval(attrs.repeatDone);
                    });
                }
            }
        }

    })
    .directive('ionAlphaScroll', [
        '$ionicScrollDelegate', '$location', '$timeout', '$document', '$window',
        function ($ionicScrollDelegate, $location, $timeout, $document, $window) {
            return {
                require: '?ngModel',
                restrict: 'AE',
                replace: true,
                compile: function (tElement, tAttrs, tTransclude) {
                    var children = tElement.contents();
                    var template = angular.element([
                        '<ion-list class="ion_alpha_list_outer">',
                        '<div delegate-handle="alphaScroll" id="alpha-scroll" ng-class="{\'ngScrolling\': dy_scrolling}">',
                        '<div data-ng-repeat="(letter, items) in sorted_items" class="ion_alpha_list">',
                        '<ion-item class="item item-divider" id="index_{{letter}}">{{letter}}</ion-item>',
                        '<ion-item ng-repeat="item in items" class="custom"></ion-item>',
                        '</div>',
                        '</div>',
                        '<ul class="ion_alpha_sidebar" on-touch="alphaTouch()" on-drag="onDrag($event)">',
                        ' <li ng-click="alphaScrollGoToList(\'index_{{letter}}\', $event)" data-code="{{letter.charCodeAt(0)}}" ng-repeat="letter in alphabet" ng-class="{portrait: checkoutletter(letter)}" repeat-done="layoutDone()"><span class="alpha" ng-class="{portrait:$index%2==1}">{{letter}}</span><span ng-if="$index%2==1" class="alpha landscape">&bull;</span></li>',
                        '</ul>',
                        '</ion-list>'
                    ].join(''));

                    angular.element(template.find('ion-item')[1]).append(children);
                    tElement.html('');
                    tElement.append(template);

                    return function (scope, element, attrs, ngModel) {
                        var count = 0;
                        var hideCount = 0;
                        // var orientation = 0;
                        var li_height = 0;
                        var _alpha = null;
                        var _list = null;
                        var nscroll = 0;
                        var nTop = 0;
                        var ex_elem = $('#alpha-scroll');
                        var scrollContainer = element.find('ion-scroll');
                        var hide = ['C', 'D', 'E', 'F', 'J', 'K', "L", "M", 'Q', 'R', 'V', 'W'];


                        scope.dy_scrolling = false;

                        scope.onTouch = function(e){
                            scope.dy_scrolling = false;
                        };
                        scope.alphaTouch = function(){

                            //scope.dy_scrolling = true;
                        };

                        var ionicScroll = scrollContainer.controller('$ionicScroll');


                        onResizeFunction();

                        function compare(a,b){
                            if (a[attrs.key].toLowerCase() < b[attrs.key].toLowerCase())
                                return -1;
                            if (a[attrs.key].toLowerCase() > b[attrs.key].toLowerCase())
                                return 1;
                            return 0;
                        }

                        // do nothing if the model is not set
                        if (!ngModel) return;

                        ngModel.$render = function () {
                            scope.items = [];
                            scope.items = ngModel.$viewValue.sort(compare);
                            scope.alphabet = iterateAlphabet();
                            scope.checkoutletter = function (letter) {

                                return hide.indexOf(letter) > -1 && hide.indexOf(letter) < hideCount;
                            };
                            var tmp = {};
                            for (i = 0; i < scope.items.length; i++) {
                                var letter = scope.items[i][attrs.key].toUpperCase().charAt(0);

                                if(letter.charCodeAt(0) >= 48 &&  letter.charCodeAt(0) <= 57){

                                    letter = "Numbers";
                                }

                                if (tmp[letter] == undefined) {
                                    tmp[letter] = []
                                }

                                tmp[letter].push(scope.items[i]);
                            }
                            // tmp.unshift();

                            scope.sorted_items = tmp;

                            scope.alphaScrollGoToList = function (id, e) {

                                //console.log(e)
                                e.preventDefault();

                                var code = id.split("_")[1].charCodeAt(0);
                                if(id === "index_#"){
                                    id = "index_Numbers";
                                }

                                if(id == "index_X" || id == "index_Y" || id == "index_Z"){
                                  id = "index_W";
                                }

                                if(id == "index_K"){
                                  id = "index_L";
                                }

                                if(id == "index_Q"){
                                  id = "index_R";
                                }


                                if(_alpha == null){
                                    _alpha = $(".alpha");
                                    _list = $("ul.ion_alpha_sidebar");
                                }

                                _alpha.removeClass('selected');
                                _list.find("li[data-code="+code+"]").find("span").addClass("selected");


                                var hashID = "#";
                                hashID+=id;

                                nscroll =  ex_elem.scrollTop() + $( hashID ).offset().top - nTop;
                                console.log(nscroll ,ex_elem.scrollTop());
                                if($(hashID).get(0)){
                                    //$location.hash(id);
                                    //$ionicScrollDelegate.$getByHandle('alphaScroll').anchorScroll(true);

                                    //ex_elem.get(0).scrollTop = 0;
                                    ex_elem.animate({
                                        scrollTop: nscroll
                                    }, 1000);
                                }

                                scope.dy_scrolling = false;
                            };

                            //Create alphabet object
                            function iterateAlphabet() {
                                var str = "#ABCDEFGHIJKLMNOPQRSTUVWXYZ";
                                var numbers = new Array();
                                for (var i = 0; i < str.length; i++) {
                                    var nextChar = str.charAt(i);
                                    numbers.push(nextChar);
                                }
                                return numbers;
                            }

                            scope.layoutDone = function () {

                                console.log("done");
                                angular.element($window).trigger("resize");
                            };

                            scope.onDrag = function(event){
                                //console.log(event.gesture.direction, event.gesture.angle, $(event.gesture.target).parent().height(),event.gesture.distance);
                                var _h = $(event.gesture.target).parent().height();

                                if(scope.orientation == "landscape"){
                                    _h = parseInt(_h/1.6);
                                }

                                var _c = parseInt($(event.gesture.target).parent().attr("data-code"));
                                var _d = parseInt(event.gesture.distance / _h);



                                if((event.gesture.direction === "up" && _d > 0) ||
                                    (event.gesture.direction === "down" && _d < 0)){
                                    _d *= -1;
                                }

                                var _fc = _c + _d;

                                if(_fc > 35 && _fc < 65){
                                    _c = 65;
                                    _fc = _c + _d;
                                }


                                if(_fc < 65){
                                    _fc = 35;
                                }

                                if(_fc > 90){
                                    _fc = 90;
                                }

                                var _id = "index_" + String.fromCharCode(_fc);
                                console.log(_id);
                                scope.alphaScrollGoToList(_id);
                            }
                        };

                        function onResizeFunction() {

                            var headerHeight = $document[0].body.querySelector('.bar-header').offsetHeight;
                            var subHeaderHeight = attrs.subheader === "true" ? 44 : 0;
                            var tabHeight = $document[0].body.querySelector('.tab-nav') ? $document[0].body.querySelector('.tab-nav').offsetHeight : 0;
                            var footerHeight = $document[0].body.querySelector('.bar-footer') ? $document[0].body.querySelector('.bar-footer').offsetHeight : 0;
                            var windowHeight = window.innerHeight;
                            var windowWidth = window.innerWidth;
                            // orientation = windowWidth < windowHeight ? 'portrait' : 'landscape';

                            var contentHeight = windowHeight - headerHeight - subHeaderHeight - tabHeight - footerHeight;
                            var top = headerHeight + subHeaderHeight;
                            nTop = top;

                            var estimatedHeight = 20 * 27;
                            li_height = (contentHeight - 20) / 27;
                            li_height = li_height <= 15 ? 15 : li_height;

                            var fontSize = li_height - 8 >= 12 ? 12 : 10;

                            hideCount = ( 27 - parseInt(contentHeight / li_height) );

                            if (hideCount % 2 != 0) {
                                hideCount++;
                            }

                            var ion_alpa_sidebar = $(".ion_alpha_sidebar");
                            element.find('ion-scroll').css({"height": contentHeight + "px"});
                            element.find('ul').css({"top": top + "px", "height": contentHeight + "px"});

                            ion_alpa_sidebar.find('li').css({"height": li_height + "px"});
                            ion_alpa_sidebar.find('span').css({"font-size": fontSize + "px"});
                            // $("body").removeClass("portrait landscape").addClass(orientation);
                        }

                        angular.element($window).bind('resize', function () {
                            onResizeFunction();
                            scope.$apply();
                        });

                    }
                }
            };
        }]);
