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
        .state('app.airway-obstruction', {
            url: '/app/airway-obstruction',
            abstract:true,
            views: {
                'menuContent': {
                    templateUrl: 'js/page/airway-obstruction/index.html',
                    controller: "PageCtrl"
                }
            }
        })

        .state('app.airway-obstruction.fbao', {
            url: '/fbao',
            views: {
                'subContent': {
                    templateUrl: 'js/page/airway-obstruction/fbao.html'
                }
            }
        })

        .state('app.airway-obstruction.fbao-adult', {
            url: '/fbao-adult',
            views: {
                'subContent': {
                    templateUrl: 'js/page/airway-obstruction/fbao-adult.html'
                }
            }
        })

        .state('app.airway-obstruction.fbao-infant', {
            url: '/fbao-infant',
            views: {
                'subContent': {
                    templateUrl: 'js/page/airway-obstruction/fbao-infant.html'
                }
            }
        })

        .state('app.airway-obstruction.fbao-unresponsive', {
            url: '/fbao-unresponsive',
            views: {
                'subContent': {
                    templateUrl: 'js/page/airway-obstruction/fbao-unresponsive.html'
                }
            }
        })

        .state('app.bleeding', {
            url: '/app/bleeding',
            abstract:true,
            views: {
                'menuContent': {
                    templateUrl: 'js/page/bleeding/index.html',
                    controller: "PageCtrl"
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
        })

        .state('app.stroke', {
            url: '/app/stroke',
            abstract:true,
            views: {
                'menuContent': {
                    templateUrl: 'js/page/stroke/index.html',
                    controller: "PageCtrl"
                }
            }
        })

        .state('app.stroke.fastStroke', {
            url: '/FAST-stroke',
            views: {
                'subContent': {
                    templateUrl: 'js/page/stroke/stroke.html'
                }
            }
        })

        .state('app.burns', {
            url: '/app/burns',
            abstract:true,
            views: {
                'menuContent': {
                    templateUrl: 'js/page/burns/index.html',
                    controller: "PageCtrl"
                }
            }
        })

        .state('app.burns.burns', {
            url: '/burns',
            views: {
                'subContent': {
                    templateUrl: 'js/page/burns/burns.html'
                }
            }
        })

        .state('app.burns.burnsHeat', {
            url: '/burns-heat',
            views: {
                'subContent': {
                    templateUrl: 'js/page/burns/burns-heat.html'
                }
            }
        })

        .state('app.cpr', {
            url: '/app/cpr',
            abstract:true,
            views: {
                'menuContent': {
                    templateUrl: 'js/page/cpr/index.html',
                    controller: "PageCtrl"
                }
            }
        })

        .state('app.cpr.call-first-vs-call-fast', {
            url: '/call-first-vs-call-fast',
            views: {
                'subContent': {
                    templateUrl: 'js/page/cpr/call-first-vs-call-fast.html'
                }
            }
        })

        .state('app.cpr.1-rescuer-cpr', {
            url: '/1-rescuer-cpr',
            views: {
                'subContent': {
                    templateUrl: 'js/page/cpr/1-rescuer-cpr.html'
                }
            }
        })

        .state('app.cpr.2-rescuer-cpr-for-adults-and-children', {
            url: '/2-rescuer-cpr-for-adults-and-children',
            views: {
                'subContent': {
                    templateUrl: 'js/page/cpr/2-rescuer-cpr-for-adults-and-children.html'
                }
            }
        })
    
        .state('app.cpr.2-rescuer-cpr-for-infants', {
            url: '/2-rescuer-cpr-for-infants',
            views: {
                'subContent': {
                    templateUrl: 'js/page/cpr/2-rescuer-cpr-for-infants.html'
                }
            }
        })

        .state('app.cpr.using-an-aed', {
            url: '/using-an-aed',
            views: {
                'subContent': {
                    templateUrl: 'js/page/cpr/using-an-aed.html'
                }
            }
        })
    
        .state('app.respiratory-emergencies', {
            url: '/app/respiratory-emergencies',
            abstract:true,
            views: {
                'menuContent': {
                    templateUrl: 'js/page/respiratory-emergencies/index.html',
                    controller: "PageCtrl"
                }
            }
        })
    
        .state('app.respiratory-emergencies.signAndSymptom', {
            url: '/sign-and-symptom',
            views: {
                'subContent': {
                    templateUrl: 'js/page/respiratory-emergencies/sign-and-symptom.html'
                }
            }
        })

        .state('app.respiratory-emergencies.inadequateBreathing', {
            url: '/inadequate-breathing',
            views: {
                'subContent': {
                    templateUrl: 'js/page/respiratory-emergencies/inadequate-breathing.html'
                }
            }
        })

        .state('app.respiratory-emergencies.emergencyCare', {
            url: '/emergency-care',
            views: {
                'subContent': {
                    templateUrl: 'js/page/respiratory-emergencies/emergency-care.html'
                }
            }
        })

        .state('app.respiratory-emergencies.emergencyCareForAnAsthama', {
            url: '/emergency-care-for-an-asthama',
            views: {
                'subContent': {
                    templateUrl: 'js/page/respiratory-emergencies/emergency-care-for-an-asthama.html'
                }
            }
        })


        .state('app.oxygen', {
            url: '/app/oxygen',
            abstract:true,
            views: {
                'menuContent': {
                    templateUrl: 'js/page/oxygen-administration/index.html',
                    controller: "PageCtrl"
                }
            }
        })

        .state('app.oxygen.administration', {
            url: '/administration',
            views: {
                'subContent': {
                    templateUrl: 'js/page/oxygen-administration/oxygen-administration.html'
                }
            }
        })

        .state('app.pediatricProblems', {
            url: '/app/pediatric-problems',
            abstract:true,
            views: {
                'menuContent': {
                    templateUrl: 'js/page/pediatric-problems/index.html',
                    controller: "PageCtrl"
                }
            }
        })

        .state('app.pediatricProblems.blowByOxygen', {
            url: '/blow-by-oxygen',
            views: {
                'subContent': {
                    templateUrl: 'js/page/pediatric-problems/blow-by-oxygen-for-respiratory-distress.html'
                }
            }
        })

        .state('app.pediatricProblems.seizures', {
            url: '/seizures',
            views: {
                'subContent': {
                    templateUrl: 'js/page/pediatric-problems/seizures.html'
                }
            }
        })

        .state('app.pediatricProblems.SUID', {
            url: '/SUID',
            views: {
                'subContent': {
                    templateUrl: 'js/page/pediatric-problems/SUID.html'
                }
            }
        })

        .state('app.pediatricProblems.abuseIsSuspected', {
            url: '/abuse-is-suspected',
            views: {
                'subContent': {
                    templateUrl: 'js/page/pediatric-problems/abuse-is-suspected.html'
                }
            }
        })

        .state('app.poisoning', {
            url: '/app/poisoning',
            abstract:true,
            views: {
                'menuContent': {
                    templateUrl: 'js/page/poisoning/index.html',
                    controller: "PageCtrl"
                }
            }
        })

        .state('app.poisoning.emergencyCare', {
            url: '/emergency-care',
            views: {
                'subContent': {
                    templateUrl: 'js/page/poisoning/poisoning.html'
                }
            }
        })


        .state('app.shock', {
            url: '/app/shock',
            abstract:true,
            views: {
                'menuContent': {
                    templateUrl: 'js/page/shock/index.html',
                    controller: "PageCtrl"
                }
            }
        })

        .state('app.shock.signsAndSymptomsOfShock', {
            url: '/signsAndSymptomsOfShock',
            views: {
                'subContent': {
                    templateUrl: 'js/page/shock/shock.html'
                }
            }
        });


    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/home');
});
