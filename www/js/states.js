nscApp.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

        .state('app', {
            url: '/app',
            abstract: true,
            templateUrl: 'js/menu/menu.html',
            controller: 'AppCtrl',
            resolve: {
                topicList: ["$http", function ($http) {
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
                tiles: ["$http", function ($http) {
                    return $http.get("jsons/home_page_tile.json");
                }]
            }
        })

        .state('app.abbreviations', {
            url: '/abbreviations',
            abstract: true,
            views: {
                'menuContent': {
                    templateUrl: 'js/page/page.html',
                    controller: "PageCtrl"
                }
            }
        })

        .state('app.abbreviations.abbreviations', {
            url: '/abbreviations',
            views: {
                'subContent': {
                    templateUrl: 'js/page/abbreviations/abbreviations.html'
                }
            }
        })

        .state('app.abbreviations.aed', {
            url: '/aed',
            views: {
                'subContent': {
                    templateUrl: 'js/page/abbreviations/aed.html'
                }
            }
        })

        .state('app.abbreviations.apgar', {
            url: '/apgar',
            views: {
                'subContent': {
                    templateUrl: 'js/page/abbreviations/apgar.html'
                }
            }
        })

        .state('app.abbreviations.avpuScale', {
            url: '/avpu_scale',
            views: {
                'subContent': {
                    templateUrl: 'js/page/abbreviations/avpu_scale.html'
                }
            }
        })

        .state('app.abbreviations.bvm', {
            url: '/bvm',
            views: {
                'subContent': {
                    templateUrl: 'js/page/abbreviations/bvm.html'
                }
            }
        })

        .state('app.abbreviations.csm', {
            url: '/csm',
            views: {
                'subContent': {
                    templateUrl: 'js/page/abbreviations/csm.html'
                }
            }
        })

        .state('app.abbreviations.dots', {
            url: '/dots',
            views: {
                'subContent': {
                    templateUrl: 'js/page/abbreviations/dots.html'
                }
            }
        })

        .state('app.abbreviations.dcapBtls', {
            url: '/dcap_btls',
            views: {
                'subContent': {
                    templateUrl: 'js/page/abbreviations/dcap_btls.html'
                }
            }
        })

        .state('app.abbreviations.fbao', {
            url: '/fbao',
            views: {
                'subContent': {
                    templateUrl: 'js/page/abbreviations/fbao.html'
                }
            }
        })

        .state('app.abbreviations.mci', {
            url: '/mci',
            views: {
                'subContent': {
                    templateUrl: 'js/page/abbreviations/mci.html'
                }
            }
        })

        .state('app.abbreviations.opqrst', {
            url: '/opqrst',
            views: {
                'subContent': {
                    templateUrl: 'js/page/abbreviations/opqrst.html'
                }
            }
        })

        .state('app.abbreviations.rpm', {
            url: '/rpm',
            views: {
                'subContent': {
                    templateUrl: 'js/page/abbreviations/rpm.html'
                }
            }
        })

        .state('app.abbreviations.smapleHistory', {
            url: '/smaple_history',
            views: {
                'subContent': {
                    templateUrl: 'js/page/abbreviations/smaple_history.html'
                }
            }
        })

        .state('app.abdominalPain', {
            url: '/abdominal-pain',
            abstract: true,
            views: {
                'menuContent': {
                    templateUrl: 'js/page/page.html',
                    controller: "PageCtrl"
                }
            }
        })

        .state('app.abdominalPain.whenEmergencCareNeeded', {
            url: '/when-emergenc-care-needed',
            views: {
                'subContent': {
                    templateUrl: 'js/page/abdominal-pain/when-emergenc-care-needed.html'
                }
            }
        })

        .state('app.airwayOpening', {
            url: '/airway-opening',
            abstract: true,
            views: {
                'menuContent': {
                    templateUrl: 'js/page/page.html',
                    controller: "PageCtrl"
                }
            }
        })

        .state('app.airwayOpening.airwayOpening', {
            url: '/airway_opening',
            views: {
                'subContent': {
                    templateUrl: 'js/page/airway-opening/airway-opening.html'
                }
            }
        })

        .state('app.airwayOpening.headTiltChinLift', {
            url: '/head-tilt-chin-lift',
            views: {
                'subContent': {
                    templateUrl: 'js/page/airway-opening/head-tilt-chin-lift.html'
                }
            }
        })

        .state('app.airwayOpening.jawThrust', {
            url: '/jaw-thrust',
            views: {
                'subContent': {
                    templateUrl: 'js/page/airway-opening/jaw-thrust.html'
                }
            }
        })

        .state('app.airwayMaintenance', {
            url: '/airway-maintenance',
            abstract: true,
            views: {
                'menuContent': {
                    templateUrl: 'js/page/page.html',
                    controller: "PageCtrl"
                }
            }
        })

        .state('app.airwayMaintenance.safetyPrecautionsWhenSuctioning', {
            url: '/safety-precautions-when-suctioning',
            views: {
                'subContent': {
                    templateUrl: 'js/page/airway-maintenance/safety-precautions-when-suctioning.html'
                }
            }
        })

        .state('app.airwayMaintenance.suctioningAdultOrChild', {
            url: '/suctioning-adult-or-child',
            views: {
                'subContent': {
                    templateUrl: 'js/page/airway-maintenance/suctioning-adult-or-child.html'
                }
            }
        })

        .state('app.airwayMaintenance.suctioningInfant', {
            url: '/suctioning-infant',
            views: {
                'subContent': {
                    templateUrl: 'js/page/airway-maintenance/suctioning-infant.html'
                }
            }
        })

        .state('app.airwayMaintenance.oralAirwayInsertionInAdults', {
            url: '/oral-airway-insertion-in-adults',
            views: {
                'subContent': {
                    templateUrl: 'js/page/airway-maintenance/oral-airway-insertion-in-adults.html'
                }
            }
        })

        .state('app.airwayMaintenance.nasalAirwayInsertionInAdults', {
            url: '/nasal-airway-insertion-in-adults',
            views: {
                'subContent': {
                    templateUrl: 'js/page/airway-maintenance/nasal-airway-insertion-in-adults.html'
                }
            }
        })

        .state('app.alcoholAndDrugAbuse', {
            url: '/alcohol-and-drug-abuse',
            abstract: true,
            views: {
                'menuContent': {
                    templateUrl: 'js/page/page.html',
                    controller: "PageCtrl"
                }
            }
        })

        .state('app.alcoholAndDrugAbuse.alcoholAndDrugAbuse', {
            url: '/alcohol-and-drug-abuse',
            views: {
                'subContent': {
                    templateUrl: 'js/page/alcohol-and-drug-abuse/alcohol-and-drug-abuse.html'
                }
            }
        })

        .state('app.alcoholAndDrugAbuse.opioidDrugOverdose', {
            url: '/opioid-drug-overdose',
            views: {
                'subContent': {
                    templateUrl: 'js/page/alcohol-and-drug-abuse/opioid-drug-overdose.html'
                }
            }
        })

        .state('app.allergicReactions', {
            url: '/allergic-reactions',
            abstract: true,
            views: {
                'menuContent': {
                    templateUrl: 'js/page/page.html',
                    controller: "PageCtrl"
                }
            }
        })

        .state('app.allergicReactions.earlySignsAndSymptoms', {
            url: '/early-signs-and-symptoms',
            views: {
                'subContent': {
                    templateUrl: 'js/page/allergic-reactions/early-signs-and-symptoms.html'
                }
            }
        })

        .state('app.allergicReactions.developingSignsAndSymptoms', {
            url: '/developing-signs-and-symptoms',
            views: {
                'subContent': {
                    templateUrl: 'js/page/allergic-reactions/developing-signs-and-symptoms.html'
                }
            }
        })

        .state('app.allergicReactions.emergencyCareForAllergicReactions', {
            url: '/emergency-care-for-allergic-reactions',
            views: {
                'subContent': {
                    templateUrl: 'js/page/allergic-reactions/emergency-care-for-allergic-reactions.html'
                }
            }
        })

        .state('app.alteredMentalStatus', {
            url: '/altered-mental-status',
            abstract: true,
            views: {
                'menuContent': {
                    templateUrl: 'js/page/page.html',
                    controller: "PageCtrl"
                }
            }
        })

        .state('app.alteredMentalStatus.commonCausesOfAlteredMentalStatus', {
            url: '/common-causes-of-altered-mental-status',
            views: {
                'subContent': {
                    templateUrl: 'js/page/altered-mental-status/common-causes-of-altered-mental-status.html'
                }
            }
        })

        .state('app.alteredMentalStatus.emergencyCareForAlteredMentalStatus', {
            url: '/emergency-care-for-altered-mental-status',
            views: {
                'subContent': {
                    templateUrl: 'js/page/altered-mental-status/emergency-care-for-altered-mental-status.html'
                }
            }
        })

        .state('app.anatomy', {
            url: '/anatomy',
            abstract: true,
            views: {
                'menuContent': {
                    templateUrl: 'js/page/page.html',
                    controller: "PageCtrl"
                }
            }
        })

        .state('app.anatomy.directionalTerms', {
            url: '/directional-terms',
            views: {
                'subContent': {
                    templateUrl: 'js/page/anatomy/directional-terms.html'
                }
            }
        })

        .state('app.anatomy.abdominalQuadrants', {
            url: '/abdominal-quadrants',
            views: {
                'subContent': {
                    templateUrl: 'js/page/anatomy/abdominal-quadrants.html'
                }
            }
        })

        .state('app.anatomy.respiratorySystem', {
            url: '/respiratory-system',
            views: {
                'subContent': {
                    templateUrl: 'js/page/anatomy/respiratory-system.html'
                }
            }
        })

        .state('app.anatomy.majorArteries', {
            url: '/major-arteries',
            views: {
                'subContent': {
                    templateUrl: 'js/page/anatomy/major-arteries.html'
                }
            }
        })

        .state('app.anatomy.skeletalSystem', {
            url: '/skeletal-system',
            views: {
                'subContent': {
                    templateUrl: 'js/page/anatomy/skeletal-system.html'
                }
            }
        })

        .state('app.apgar', {
            url: '/apgar',
            abstract: true,
            views: {
                'menuContent': {
                    templateUrl: 'js/page/page.html',
                    controller: "PageCtrl"
                }
            }
        })

        .state('app.apgar.apgar', {
            url: '/apgar',
            views: {
                'subContent': {
                    templateUrl: 'js/page/apgar/apgar.html'
                }
            }
        })

        .state('app.behavioralEmergencies', {
            url: '/behavioral-emergencies',
            abstract: true,
            views: {
                'menuContent': {
                    templateUrl: 'js/page/page.html',
                    controller: "PageCtrl"
                }
            }
        })

        .state('app.behavioralEmergencies.assessingBehavioralEmergencies', {
            url: '/assessing-behavioral-emergencies',
            views: {
                'subContent': {
                    templateUrl: 'js/page/behavioral-emergencies/assessing-behavioral-emergencies.html'
                }
            }
        })

        .state('app.behavioralEmergencies.emergencyCareForBehavioralEmergencies', {
            url: '/emergency-care-for-behavioral-emergencies',
            views: {
                'subContent': {
                    templateUrl: 'js/page/behavioral-emergencies/emergency-care-for-behavioral-emergencies.html'
                }
            }
        })

        .state('app.bitesAndStings', {
            url: '/bites-and-stings',
            abstract: true,
            views: {
                'menuContent': {
                    templateUrl: 'js/page/page.html',
                    controller: "PageCtrl"
                }
            }
        })

        .state('app.bitesAndStings.careForAnimalBites', {
            url: '/care-for-animal-bites',
            views: {
                'subContent': {
                    templateUrl: 'js/page/bites-and-stings/care-for-animal-bites.html'
                }
            }
        })

        .state('app.bitesAndStings.careForOtherBitesAndStings', {
            url: '/care-for-other-bites-and-stings',
            views: {
                'subContent': {
                    templateUrl: 'js/page/bites-and-stings/care-for-other-bites-and-stings.html'
                }
            }
        })

        .state('app.airwayObstruction', {
            url: '/airway-obstruction',
            abstract: true,
            views: {
                'menuContent': {
                    templateUrl: 'js/page/page.html',
                    controller: "PageCtrl"
                }
            }
        })

        .state('app.airwayObstruction.airwayObstructionUnresponsive', {
            url: '/airway-obstruction-unresponsive',
            views: {
                'subContent': {
                    templateUrl: 'js/page/airway-obstruction/airway-obstruction-unresponsive.html'
                }
            }
        })

        .state('app.airwayObstruction.fbao', {
            url: '/fbao',
            views: {
                'subContent': {
                    templateUrl: 'js/page/airway-obstruction/fbao.html'
                }
            }
        })

        .state('app.airwayObstruction.fbaoAdult', {
            url: '/fbao-adult',
            views: {
                'subContent': {
                    templateUrl: 'js/page/airway-obstruction/fbao-adult.html'
                }
            }
        })

        .state('app.airwayObstruction.fbaoInfant', {
            url: '/fbao-infant',
            views: {
                'subContent': {
                    templateUrl: 'js/page/airway-obstruction/fbao-infant.html'
                }
            }
        })

        .state('app.bleeding', {
            url: '/bleeding',
            abstract: true,
            views: {
                'menuContent': {
                    templateUrl: 'js/page/page.html',
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
            url: '/stroke',
            abstract: true,
            views: {
                'menuContent': {
                    templateUrl: 'js/page/page.html',
                    controller: "PageCtrl"
                }
            }
        })

        .state('app.stroke.stroke', {
            url: '/stroke',
            views: {
                'subContent': {
                    templateUrl: 'js/page/stroke/stroke.html'
                }
            }
        })

        .state('app.stroke.fastStroke', {
            url: '/FAST-stroke',
            views: {
                'subContent': {
                    templateUrl: 'js/page/stroke/fast-stroke.html'
                }
            }
        })

        .state('app.burns', {
            url: '/burns',
            abstract: true,
            views: {
                'menuContent': {
                    templateUrl: 'js/page/page.html',
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

        .state('app.chemicalBurns', {
            url: '/chemical-burns',
            abstract: true,
            views: {
                'menuContent': {
                    templateUrl: 'js/page/page.html',
                    controller: "PageCtrl"
                }
            }
        })

        .state('app.chemicalBurns.burnsChemical', {
            url: '/burns-chemical',
            views: {
                'subContent': {
                    templateUrl: 'js/page/chemical-burns/burns-chemical.html'
                }
            }
        })

        .state('app.childbirth', {
            url: '/childbirth',
            abstract: true,
            views: {
                'menuContent': {
                    templateUrl: 'js/page/page.html',
                    controller: "PageCtrl"
                }
            }
        })

        .state('app.childbirth.supportiveCareDuringLabor', {
            url: '/supportive-care-during-labor',
            views: {
                'subContent': {
                    templateUrl: 'js/page/childbirth/supportive-care-during-labor.html'
                }
            }
        })

        .state('app.childbirth.assessingChildbirthImminence', {
            url: '/assessing-childbirth-imminence',
            views: {
                'subContent': {
                    templateUrl: 'js/page/childbirth/assessing-childbirth-imminence.html'
                }
            }
        })

        .state('app.childbirth.prepareForChildbirth', {
            url: '/prepare-for-childbirth',
            views: {
                'subContent': {
                    templateUrl: 'js/page/childbirth/prepare-for-childbirth.html'
                }
            }
        })

        .state('app.childbirth.assistingWithDelivery', {
            url: '/assisting-with-delivery',
            views: {
                'subContent': {
                    templateUrl: 'js/page/childbirth/assisting-with-delivery.html'
                }
            }
        })

        .state('app.childbirth.careForMaternalBleedingAfterDelivery', {
            url: '/care-for-maternal-bleeding-after-delivery',
            views: {
                'subContent': {
                    templateUrl: 'js/page/childbirth/care-for-maternal-bleeding-after-delivery.html'
                }
            }
        })

        .state('app.childbirth.careOfTheNewborn', {
            url: '/care-of-the-newborn',
            views: {
                'subContent': {
                    templateUrl: 'js/page/childbirth/care-of-the-newborn.html'
                }
            }
        })

        .state('app.choking', {
            url: '/choking',
            abstract: true,
            views: {
                'menuContent': {
                    templateUrl: 'js/page/page.html',
                    controller: "PageCtrl"
                }
            }
        })

        .state('app.choking.choking', {
            url: '/choking',
            views: {
                'subContent': {
                    templateUrl: 'js/page/choking/choking.html'
                }
            }
        })

        .state('app.coldEmergencies', {
            url: '/cold-emergencies',
            abstract: true,
            views: {
                'menuContent': {
                    templateUrl: 'js/page/page.html',
                    controller: "PageCtrl"
                }
            }
        })

        .state('app.coldEmergencies.frostbite', {
            url: '/frostbite',
            views: {
                'subContent': {
                    templateUrl: 'js/page/cold-emergencies/frostbite.html'
                }
            }
        })

        .state('app.coldEmergencies.hypothermia', {
            url: '/hypothermia',
            views: {
                'subContent': {
                    templateUrl: 'js/page/cold-emergencies/hypothermia.html'
                }
            }
        })

        .state('app.electricalBurns', {
            url: '/electrical-burns',
            abstract: true,
            views: {
                'menuContent': {
                    templateUrl: 'js/page/page.html',
                    controller: "PageCtrl"
                }
            }
        })

        .state('app.electricalBurns.burnsElectrical', {
            url: '/burns-electrical',
            views: {
                'subContent': {
                    templateUrl: 'js/page/electrical-burns/burns-electrical.html'
                }
            }
        })

        .state('app.fainting', {
            url: '/fainting-index',
            abstract: true,
            views: {
                'menuContent': {
                    templateUrl: 'js/page/page.html',
                    controller: "PageCtrl"
                }
            }
        })

        .state('app.fainting.fainting', {
            url: '/fainting',
            views: {
                'subContent': {
                    templateUrl: 'js/page/fainting/fainting.html'
                }
            }
        })

        .state('app.cpr', {
            url: '/cpr',
            abstract: true,
            views: {
                'menuContent': {
                    templateUrl: 'js/page/page.html',
                    controller: "PageCtrl"
                }
            }
        })

        .state('app.cpr.callFirstVsCallFast', {
            url: '/call-first-vs-call-fast',
            views: {
                'subContent': {
                    templateUrl: 'js/page/cpr/call-first-vs-call-fast.html'
                }
            }
        })

        .state('app.cpr.1RescuerCpr', {
            url: '/1-rescuer-cpr',
            views: {
                'subContent': {
                    templateUrl: 'js/page/cpr/1-rescuer-cpr.html'
                }
            }
        })

        .state('app.cpr.2RescuerCprForAdultsAndChildren', {
            url: '/2-rescuer-cpr-for-adults-and-children',
            views: {
                'subContent': {
                    templateUrl: 'js/page/cpr/2-rescuer-cpr-for-adults-and-children.html'
                }
            }
        })

        .state('app.cpr.2RescuerCprForInfants', {
            url: '/2-rescuer-cpr-for-infants',
            views: {
                'subContent': {
                    templateUrl: 'js/page/cpr/2-rescuer-cpr-for-infants.html'
                }
            }
        })

        .state('app.cpr.usingAnAed', {
            url: '/using-an-aed',
            views: {
                'subContent': {
                    templateUrl: 'js/page/cpr/using-an-aed.html'
                }
            }
        })

        .state('app.respiratoryEmergencies', {
            url: '/respiratory-emergencies',
            abstract: true,
            views: {
                'menuContent': {
                    templateUrl: 'js/page/page.html',
                    controller: "PageCtrl"
                }
            }
        })

        .state('app.respiratoryEmergencies.signAndSymptom', {
            url: '/sign-and-symptom',
            views: {
                'subContent': {
                    templateUrl: 'js/page/respiratory-emergencies/sign-and-symptom.html'
                }
            }
        })

        .state('app.respiratoryEmergencies.inadequateBreathing', {
            url: '/inadequate-breathing',
            views: {
                'subContent': {
                    templateUrl: 'js/page/respiratory-emergencies/inadequate-breathing.html'
                }
            }
        })

        .state('app.respiratoryEmergencies.emergencyCareForAnAsthama', {
            url: '/emergency-care-for-an-asthama',
            views: {
                'subContent': {
                    templateUrl: 'js/page/respiratory-emergencies/emergency-care-for-an-asthama.html'
                }
            }
        })


        .state('app.oxygen', {
            url: '/oxygen',
            abstract: true,
            views: {
                'menuContent': {
                    templateUrl: 'js/page/page.html',
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
            url: '/pediatric-problems',
            abstract: true,
            views: {
                'menuContent': {
                    templateUrl: 'js/page/page.html',
                    controller: "PageCtrl"
                }
            }
        })

        .state('app.pediatricProblems.pediatricProblems', {
            url: '/pediatric-problems',
            views: {
                'subContent': {
                    templateUrl: 'js/page/pediatric-problems/pediatric-problems.html'
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
            url: '/seizures-pediatric',
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

        .state('app.pediatricProblems.traumaPediatricPatients', {
            url: '/trauma-in-pediatric-patients',
            views: {
                'subContent': {
                    templateUrl: 'js/page/pediatric-problems/trauma-in-pediatric-patients.html'
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
            url: '/poisoning',
            abstract: true,
            views: {
                'menuContent': {
                    templateUrl: 'js/page/page.html',
                    controller: "PageCtrl"
                }
            }
        })

        .state('app.poisoning.swallowedPoison', {
            url: '/swallowed-poison',
            views: {
                'subContent': {
                    templateUrl: 'js/page/poisoning/swallowed-poison.html'
                }
            }
        })

        .state('app.poisoning.inhaledPoison', {
            url: '/inhaled-poison',
            views: {
                'subContent': {
                    templateUrl: 'js/page/poisoning/inhaled-poison.html'
                }
            }
        })

        .state('app.reassessment', {
            url: '/reassessment',
            abstract: true,
            views: {
                'menuContent': {
                    templateUrl: 'js/page/page.html',
                    controller: "PageCtrl"
                }
            }
        })

        .state('app.reassessment.reassessment', {
            url: '/reassessment',
            views: {
                'subContent': {
                    templateUrl: 'js/page/reassessment/reassessment.html'
                }
            }
        })

        .state('app.recoverPosition', {
            url: '/recover-position',
            abstract: true,
            views: {
                'menuContent': {
                    templateUrl: 'js/page/page.html',
                    controller: "PageCtrl"
                }
            }
        })

        .state('app.recoverPosition.recoverPosition', {
            url: '/recover-position',
            views: {
                'subContent': {
                    templateUrl: 'js/page/recovery-position-haines/recovery-position.html'
                }
            }
        })


        .state('app.sceneSafety', {
            url: '/scene-safety',
            abstract: true,
            views: {
                'menuContent': {
                    templateUrl: 'js/page/page.html',
                    controller: "PageCtrl"
                }
            }
        })

        .state('app.sceneSafety.sceneSafety', {
            url: '/scene-safety',
            views: {
                'subContent': {
                    templateUrl: 'js/page/scene-safety/scene-safety.html'
                }
            }
        })

        .state('app.sceneSafety.potentialViolence', {
            url: '/potential-violence',
            views: {
                'subContent': {
                    templateUrl: 'js/page/scene-safety/potential-violence.html'
                }
            }
        })

        .state('app.sceneSafety.vehicleCrashHazards', {
            url: '/vehicle-crash-hazards',
            views: {
                'subContent': {
                    templateUrl: 'js/page/scene-safety/vehicle-crash-hazards.html'
                }
            }
        })

        .state('app.sceneSafety.sceneSizeUp', {
            url: '/scene-size-up',
            views: {
                'subContent': {
                    templateUrl: 'js/page/scene-safety/scene-size-up.html'
                }
            }
        })

        .state('app.sceneSafety.environmentalDangers', {
            url: '/environmental-dangers',
            views: {
                'subContent': {
                    templateUrl: 'js/page/scene-safety/environmental-dangers.html'
                }
            }
        })

        .state('app.sceneSafety.hazardsWithinStructures', {
            url: '/hazards-within-structures',
            views: {
                'subContent': {
                    templateUrl: 'js/page/scene-safety/hazards-within-structures.html'
                }
            }
        })


        .state('app.seizures', {
            url: '/seizures',
            abstract: true,
            views: {
                'menuContent': {
                    templateUrl: 'js/page/page.html',
                    controller: "PageCtrl"
                }
            }
        })

        .state('app.seizures.causesOfSeizures', {
            url: '/causes-of-seizures',
            views: {
                'subContent': {
                    templateUrl: 'js/page/seizures/seizures.html'
                }
            }
        })


        .state('app.shock', {
            url: '/shock',
            abstract: true,
            views: {
                'menuContent': {
                    templateUrl: 'js/page/page.html',
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
        })


        .state('app.spinalHeadInjury', {
            url: '/spinal-head-injury',
            abstract: true,
            views: {
                'menuContent': {
                    templateUrl: 'js/page/page.html',
                    controller: "PageCtrl"
                }
            }
        })

        .state('app.spinalHeadInjury.spinalInjuries', {
            url: '/spinal-injuries',
            views: {
                'subContent': {
                    templateUrl: 'js/page/spinal-and-head-injuries/spinal-injuries.html'
                }
            }
        })


        .state('app.splinting', {
            url: '/splinting',
            abstract: true,
            views: {
                'menuContent': {
                    templateUrl: 'js/page/page.html',
                    controller: "PageCtrl"
                }
            }
        })

        .state('app.splinting.splinting', {
            url: '/splinting',
            views: {
                'subContent': {
                    templateUrl: 'js/page/splinting/splinting.html'
                }
            }
        })

        .state('app.splinting.rigidSplint', {
            url: '/rigid-splint',
            views: {
                'subContent': {
                    templateUrl: 'js/page/splinting/rigid-splint.html'
                }
            }
        })

        .state('app.splinting.slingAndBinder', {
            url: '/sling-and-binder',
            views: {
                'subContent': {
                    templateUrl: 'js/page/splinting/sling-and-binder.html'
                }
            }
        })

        .state('app.triage', {
            url: '/triage',
            abstract: true,
            views: {
                'menuContent': {
                    templateUrl: 'js/page/page.html',
                    controller: "PageCtrl"
                }
            }
        })

        .state('app.triage.triage', {
            url: '/triage',
            views: {
                'subContent': {
                    templateUrl: 'js/page/triage/triage.html'
                }
            }
        })

        .state('app.triage.startTriageAssessment', {
            url: '/start-triage-assessment',
            views: {
                'subContent': {
                    templateUrl: 'js/page/triage/triage-start-assessment.html'
                }
            }
        })

        .state('app.triage.triageAssessment', {
            url: '/triage-assessment',
            views: {
                'subContent': {
                    templateUrl: 'js/page/triage/triage-assessment.html'
                }
            }
        })

        .state('app.triage.triageCategories', {
            url: '/triage-categories',
            views: {
                'subContent': {
                    templateUrl: 'js/page/triage/triage-categories.html'
                }
            }
        })

        .state('app.triage.triageJumpStart', {
            url: '/triage-jump-start',
            views: {
                'subContent': {
                    templateUrl: 'js/page/triage/triage-jump-start.html'
                }
            }
        })


        .state('app.ventilation', {
            url: '/ventilation',
            abstract: true,
            views: {
                'menuContent': {
                    templateUrl: 'js/page/page.html',
                    controller: "PageCtrl"
                }
            }
        })

        .state('app.ventilation.ventilation', {
            url: '/ventilation',
            views: {
                'subContent': {
                    templateUrl: 'js/page/ventilation/ventilation.html'
                }
            }
        })


        .state('app.vitalSigns', {
            url: '/vital-signs',
            abstract: true,
            views: {
                'menuContent': {
                    templateUrl: 'js/page/page.html',
                    controller: "PageCtrl"
                }
            }
        })

        .state('app.vitalSigns.vitalSigns', {
            url: '/vital-signs',
            views: {
                'subContent': {
                    templateUrl: 'js/page/vital-signs/vital-signs.html'
                }
            }
        })


        .state('app.wounds', {
            url: '/wounds',
            abstract: true,
            views: {
                'menuContent': {
                    templateUrl: 'js/page/page.html',
                    controller: "PageCtrl"
                }
            }
        })

        .state('app.wounds.wounds', {
            url: '/wounds',
            views: {
                'subContent': {
                    templateUrl: 'js/page/wounds-and-soft-tissue-injuries/wounds.html'
                }
            }
        })

        .state('app.frostbite', {
            url: '/frostbite',
            abstract: true,
            views: {
                'menuContent': {
                    templateUrl: 'js/page/page.html',
                    controller: "PageCtrl"
                }
            }
        })

        .state('app.frostbite.emergency', {
            url: '/emergency',
            views: {
                'subContent': {
                    templateUrl: 'js/page/frostbite/emergency-care-for-frostbite.html'
                }
            }
        })

        .state('app.glascow', {
            url: '/glascow',
            abstract: true,
            views: {
                'menuContent': {
                    templateUrl: 'js/page/page.html',
                    controller: "PageCtrl"
                }
            }
        })

        .state('app.glascow.glascowComaScale', {
            url: '/glascow-coma-scale',
            views: {
                'subContent': {
                    templateUrl: 'js/page/glascow-coma/glascow-coma-scale.html'
                }
            }
        })

        .state('app.hazmat', {
            url: '/hazmat',
            abstract: true,
            views: {
                'menuContent': {
                    templateUrl: 'js/page/page.html',
                    controller: "PageCtrl"
                }
            }
        })

        .state('app.hazmat.hazmat', {
            url: '/hazmat',
            views: {
                'subContent': {
                    templateUrl: 'js/page/hazmat/hazmat.html'
                }
            }
        })

        .state('app.headInjury', {
            url: '/head-injury',
            abstract: true,
            views: {
                'menuContent': {
                    templateUrl: 'js/page/page.html',
                    controller: "PageCtrl"
                }
            }
        })

        .state('app.headInjury.emergency', {
            url: '/emergency',
            views: {
                'subContent': {
                    templateUrl: 'js/page/head-injury/emergency-care-for-head-injury.html'
                }
            }
        })

        .state('app.heartAttack', {
            url: '/heart-attack',
            abstract: true,
            views: {
                'menuContent': {
                    templateUrl: 'js/page/page.html',
                    controller: "PageCtrl"
                }
            }
        })

        .state('app.heartAttack.signs', {
            url: '/signs',
            views: {
                'subContent': {
                    templateUrl: 'js/page/heart-attack/signs.html'
                }
            }
        })

        .state('app.heatEmergency', {
            url: '/heat-emergency',
            abstract: true,
            views: {
                'menuContent': {
                    templateUrl: 'js/page/page.html',
                    controller: "PageCtrl"
                }
            }
        })

        .state('app.heatEmergency.signsAndSymptoms', {
            url: '/signs-and-symptoms',
            views: {
                'subContent': {
                    templateUrl: 'js/page/heat-emergency/signs-and-symptoms.html'
                }
            }
        })

        .state('app.helicopterLandingZone', {
            url: '/helicopter-landing-zone',
            abstract: true,
            views: {
                'menuContent': {
                    templateUrl: 'js/page/page.html',
                    controller: "PageCtrl"
                }
            }
        })

        .state('app.helicopterLandingZone.helicopterLandingZone', {
            url: '/helicopter-landing-zone',
            views: {
                'subContent': {
                    templateUrl: 'js/page/helicopter-landing-zone/helicopter-landing.html'
                }
            }
        })

        .state('app.hypothermia', {
            url: '/hypothermia',
            abstract: true,
            views: {
                'menuContent': {
                    templateUrl: 'js/page/page.html',
                    controller: "PageCtrl"
                }
            }
        })

        .state('app.hypothermia.signsAndSymptoms', {
            url: '/signs-and-symptoms',
            views: {
                'subContent': {
                    templateUrl: 'js/page/hypothermia/signs-and-symptoms.html'
                }
            }
        })

        .state('app.legalEthical', {
            url: '/legal-ethical',
            abstract: true,
            views: {
                'menuContent': {
                    templateUrl: 'js/page/page.html',
                    controller: "PageCtrl"
                }
            }
        })

        .state('app.legalEthical.consent', {
            url: '/consent',
            views: {
                'subContent': {
                    templateUrl: 'js/page/legal-and-ethical-issues/consent.html'
                }
            }
        })

        .state('app.legalEthical.negligence', {
            url: '/negligence',
            views: {
                'subContent': {
                    templateUrl: 'js/page/legal-and-ethical-issues/negligence.html'
                }
            }
        })

        .state('app.legalEthical.falsificationOfRecords', {
            url: '/falsification-of-records',
            views: {
                'subContent': {
                    templateUrl: 'js/page/legal-and-ethical-issues/falsification-of-records.html'
                }
            }
        })


        .state('app.massCasualtyIncidents', {
            url: '/mass-casualty-incidents',
            abstract: true,
            views: {
                'menuContent': {
                    templateUrl: 'js/page/page.html',
                    controller: "PageCtrl"
                }
            }
        })

        .state('app.massCasualtyIncidents.roleOfEmergency', {
            url: '/role-of-emergency',
            views: {
                'subContent': {
                    templateUrl: 'js/page/mass-casualty-incidents/role-of-emergency.html'
                }
            }
        })


        .state('app.medication', {
            url: '/medication',
            abstract: true,
            views: {
                'menuContent': {
                    templateUrl: 'js/page/page.html',
                    controller: "PageCtrl"
                }
            }
        })

        .state('app.medication.aspirinForHeartAttack', {
            url: '/aspirin-for-heart-attack',
            views: {
                'subContent': {
                    templateUrl: 'js/page/medication/aspirin-for-heart-attack.html'
                }
            }
        })

        .state('app.medication.severeAllergicReation', {
            url: '/severe-allergic-reation',
            views: {
                'subContent': {
                    templateUrl: 'js/page/medication/severe-allergic-reation.html'
                }
            }
        })

        .state('app.medication.autoInjectorSevereAllergicReaction', {
            url: '/auto-injector-for-severe-allergic-reaction',
            views: {
                'subContent': {
                    templateUrl: 'js/page/medication/auto-injector-for-severe-allergic-reaction.html'
                }
            }
        })

        .state('app.medication.cardiacEmergency', {
            url: '/cardiac-emergency',
            views: {
                'subContent': {
                    templateUrl: 'js/page/medication/cardiac-emergency.html'
                }
            }
        })


        .state('app.musculoskeletalInjuries', {
            url: '/musculoskeletal-injuries',
            abstract: true,
            views: {
                'menuContent': {
                    templateUrl: 'js/page/page.html',
                    controller: "PageCtrl"
                }
            }
        })

        .state('app.musculoskeletalInjuries.signsAndSymptoms', {
            url: '/signs-and-symptoms',
            views: {
                'subContent': {
                    templateUrl: 'js/page/musculoskeletal-injuries/signs-and-symptoms.html'
                }
            }
        })

        .state('app.diabeticEmergencies', {
            url: '/app/diabetic-emergencies',
            abstract: true,
            views: {
                'menuContent': {
                    templateUrl: 'js/page/page.html',
                    controller: "PageCtrl"
                }
            }
        })

        .state('app.diabeticEmergencies.diabeticEmergencies', {
            url: '/diabetic-emergencies',
            views: {
                'subContent': {
                    templateUrl: 'js/page/diabetic-emergencies/diabetic-emergencies.html'
                }
            }
        })

        .state('app.documentationTips', {
            url: '/app/documentation-tips',
            abstract: true,
            views: {
                'menuContent': {
                    templateUrl: 'js/page/page.html',
                    controller: "PageCtrl"
                }
            }
        })

        .state('app.documentationTips.documentationTips', {
            url: '/documentation-tips',
            views: {
                'subContent': {
                    templateUrl: 'js/page/documentation-tips/documentation-tips.html'
                }
            }
        })

        .state('app.dressingAndBandages', {
            url: '/app/dressing-and-bandages',
            abstract: true,
            views: {
                'menuContent': {
                    templateUrl: 'js/page/page.html',
                    controller: "PageCtrl"
                }
            }
        })

        .state('app.dressingAndBandagesStatic', {
            url: '/app/dressing-and-bandages',
            abstract: true,
            views: {
                'menuContent': {
                    templateUrl: 'js/page/dressing-and-bandages/index.html',
                    controller: "PageCtrl"
                }
            }
        })

        .state('app.dressingAndBandagesStatic.dressingAndBandages', {
            url: '/dressingAndBandages',
            views: {
                'subContent': {
                    templateUrl: 'js/page/dressing-and-bandages/full-page.html'
                }
            }
        })

        .state('app.dressingAndBandages.dressing', {
            url: '/dressing',
            views: {
                'subContent': {
                    templateUrl: 'js/page/dressing-and-bandages/dressing.html'
                }
            }
        })

        .state('app.dressingAndBandages.bandages', {
            url: '/bandages',
            views: {
                'subContent': {
                    templateUrl: 'js/page/dressing-and-bandages/bandages.html'
                }
            }
        })

        .state('app.assessment', {
            url: '/app/assessment',
            abstract: true,
            views: {
                'menuContent': {
                    templateUrl: 'js/page/page.html',
                    controller: "PageCtrl"
                }
            }
        })

        .state('app.movingPatient', {
            url: '/moving-patient',
            abstract: true,
            views: {
                'menuContent': {
                    templateUrl: 'js/page/page.html',
                    controller: "PageCtrl"
                }
            }
        })


        .state('app.assessment.primaryAssessment', {
            url: '/primary-assessment',
            views: {
                'subContent': {
                    templateUrl: 'js/page/assessment/primary-assessment.html'
                }
            }
        })

        .state('app.assessment.secondaryAssessment', {
            url: '/secondary-assessment',
            views: {
                'subContent': {
                    templateUrl: 'js/page/assessment/secondary-assessment.html'
                }
            }
        })

        .state('app.assessment.auscultation', {
            url: '/auscultation',
            views: {
                'subContent': {
                    templateUrl: 'js/page/assessment/auscultation.html'
                }
            }
        })


        .state('app.movingPatient.clothingDrag', {
            url: '/clothing-drag',
            views: {
                'subContent': {
                    templateUrl: 'js/page/moving-patient/clothing-drag.html'

                }
            }
        })


        .state('app.movingPatient.blanketDrag', {
            url: '/blanket-drag',
            views: {
                'subContent': {
                    templateUrl: 'js/page/moving-patient/blanket-drag.html'

                }
            }
        })


        .state('app.movingPatient.shoulderDrag', {
            url: '/shoulder-drag',
            views: {
                'subContent': {
                    templateUrl: 'js/page/moving-patient/shoulder-drag.html'

                }
            }
        })


        .state('app.movingPatient.firefighterDrag', {
            url: '/firefighter-drag',
            views: {
                'subContent': {
                    templateUrl: 'js/page/moving-patient/firefighter-drag.html'

                }
            }
        })


        .state('app.movingPatient.upperExtremityDrag', {
            url: '/upper-extremity-drag',
            views: {
                'subContent': {
                    templateUrl: 'js/page/moving-patient/upper-extremity-drag.html'

                }
            }
        })


        .state('app.movingPatient.upperExtremityDragForRapidExtrication', {
            url: '/upper-extremity-drag-for-rapid-extrication',
            views: {
                'subContent': {
                    templateUrl: 'js/page/moving-patient/upper-extremity-drag-for-rapid-extrication.html'

                }
            }
        })

        .state('app.movingPatient.1rescuerEmergencyDrags', {
            url: '/emergency-moves',
            views: {
                'subContent': {
                    templateUrl: 'js/page/moving-patient/1-rescuer-emergency-drags.html'
                }
            }
        })

        .state('app.movingPatient.emergencyMoves', {
            url: '/1-rescuer-emergency-drags',
            views: {
                'subContent': {
                    templateUrl: 'js/page/moving-patient/emergency-moves.html'

                }
            }
        })

        .state('app.movingPatient.movingPatient', {
            url: '/moving-patient',
            views: {
                'subContent': {
                    templateUrl: 'js/page/moving-patient/moving-patient.html'

                }
            }
        })


        .state('app.assessment.palpation', {
            url: '/palpation',
            views: {
                'subContent': {
                    templateUrl: 'js/page/assessment/palpation.html'
                }
            }
        })

        .state('app.movingPatient.1RescuerAssist', {
            url: '/1-rescuer-assist',
            views: {
                'subContent': {
                    templateUrl: 'js/page/moving-patient/walking-assist.html'

                }
            }
        })

        .state('app.movingPatient.packstrapCarry', {
            url: '/packstrap-carry',
            views: {
                'subContent': {
                    templateUrl: 'js/page/moving-patient/packstrap-carry.html'

                }
            }
        })

        .state('app.movingPatient.cradleCarry', {
            url: '/cradle-carry',
            views: {
                'subContent': {
                    templateUrl: 'js/page/moving-patient/cradle-carry.html'

                }
            }
        })

        .state('app.movingPatient.piggybackCarry', {
            url: '/piggyback-carry',
            views: {
                'subContent': {
                    templateUrl: 'js/page/moving-patient/piggyback-carry.html'

                }
            }
        })

        .state('app.movingPatient.firefighterCarry', {
            url: '/firefighter-carry',
            views: {
                'subContent': {
                    templateUrl: 'js/page/moving-patient/firefighter-carry.html'

                }
            }
        })

        .state('app.movingPatient.1rescuerEmergencyCarries', {
            url: '/1-rescuer-emergency-carries',
            views: {
                'subContent': {
                    templateUrl: 'js/page/moving-patient/1-rescuer-emergency-carries.html'

                }
            }
        })


        .state('app.assessment.dcapBtls', {
            url: '/dcap-btls',
            views: {
                'subContent': {
                    templateUrl: 'js/page/assessment/dcap-btls.html'
                }
            }
        })

        .state('app.movingPatient.2rescuerEmergencyCarries', {
            url: '/2-rescuer-emergency-carries',
            views: {
                'subContent': {
                    templateUrl: 'js/page/moving-patient/2-rescuer-emergency-carries.html'
                }
            }
        })


        .state('app.assessment.reassessment', {
            url: '/reassessment',
            views: {
                'subContent': {
                    templateUrl: 'js/page/assessment/reassessment.html'
                }
            }
        })

        .state('app.movingPatient.non-emergency-moves', {
            url: '/non-emergency-moves',
            views: {
                'subContent': {
                    templateUrl: 'js/page/moving-patient/non-emergency-moves.html'

                }
            }
        });


    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/home');
})
;
