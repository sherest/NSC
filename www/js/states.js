nscApp.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

        .state('app', {
            url: '/app',
            abstract: true,
            templateUrl: 'js/menu/menu.html',
            controller: 'AppCtrl',
            resolve: {
                indexList: ["$http", function($http){
                    return $http.get("jsons/index.json");
                }],

                topicList: ["$http", function($http){
                    return $http.get("jsons/topics.json");
                }]
            }
        })

        .state('app.home', {
            url: '/home',
            views: {
                'menuContent': {
                    templateUrl: 'js/home/home.html',
                    controller: 'HomeCtrl'
                }
            },
            resolve: {
                tiles : ["$http", function($http){
                    return $http.get("jsons/home_page_tile.json");
                }]
            }
        })

        .state('app.bleeding', {
            url: '/app/bleeding',
            abstract:true,
            views: {
                'menuContent': {
                    templateUrl: 'js/page/bleeding/index.html',
                    controller: "BleedingCtrl"
                }
            }
        })

        .state('app.bleeding.bleedingExternal', {
            url: '/bleeding-external',
            views: {
                'subContent': {
                    templateUrl: 'js/page/bleeding/bleeding-external.html'
                }
            }
        })

        .state('app.bleeding.controlBleedingUsingTourniquet', {
            url: '/control-bleeding-using-tourniquet',
            views: {
                'subContent': {
                    templateUrl: 'js/page/bleeding/control-bleeding-using-tourniquet.html'
                }
            }
        })

        .state('app.bleeding.bleedingInternal', {
            url: '/bleeding-internal',
            views: {
                'subContent': {
                    templateUrl: 'js/page/bleeding/bleeding-internal.html'
                }
            }
        });



    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/home');
});
