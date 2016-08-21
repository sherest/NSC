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
    
        .state('app.abbreviations', {
            url: '/app/abbreviations',
            abstract:true,
            views: {
                'menuContent': {
                    templateUrl: 'js/page/abbreviations/index.html',
                    controller: "PageCtrl"
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
    
    
        .state('app.abbreviations.dots', {
            url: '/dots',
            views: {
                'subContent': {
                    templateUrl: 'js/page/abbreviations/dots.html'
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
    
        .state('app.abdominalPain', {
            url: '/app/abdominal-pain',
            abstract:true,
            views: {
                'menuContent': {
                    templateUrl: 'js/page/abdominal-pain/index.html',
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
    
        .state('app.abdominalPain.emergencyCareForSevereAbdominalPain', {
            url: '/emergency-care-for-severe-abdominal-pain',
            views: {
                'subContent': {
                    templateUrl: 'js/page/abdominal-pain/emergency-care-for-severe-abdominal-pain.html'
                }
            }
        })
    
        .state('app.airwayOpening', {
            url: '/app/airway-opening',
            abstract:true,
            views: {
                'menuContent': {
                    templateUrl: 'js/page/airway-opening/index.html',
                    controller: "PageCtrl"
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
            url: '/app/airway-maintenance',
            abstract:true,
            views: {
                'menuContent': {
                    templateUrl: 'js/page/airway-maintenance/index.html',
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

        .state('app.airwayMaintenance.suctioningInAnInfant', {
            url: '/suctioning-in-an-infant',
            views: {
                'subContent': {
                    templateUrl: 'js/page/airway-maintenance/suctioning-in-an-infant.html'
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

        .state('app.airwayMaintenance.oralAirwayInsertionInAdults', {
            url: '/oral-airway-insertion-in-adults',
            views: {
                'subContent': {
                    templateUrl: 'js/page/airway-maintenance/oral-airway-insertion-in-adults.html'
                }
            }
        })

        .state('app.airwayMaintenance.oralAirwayInChildrenAndInfants', {
            url: '/oral-airway-in-children-and-infants',
            views: {
                'subContent': {
                    templateUrl: 'js/page/airway-maintenance/oral-airway-in-children-and-infants.html'
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
            url: '/app/alcohol-and-drug-abuse',
            abstract:true,
            views: {
                'menuContent': {
                    templateUrl: 'js/page/alcohol-and-drug-abuse/index.html',
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
    
        .state('app.allergicReactions', {
            url: '/app/allergic-reactions',
            abstract:true,
            views: {
                'menuContent': {
                    templateUrl: 'js/page/allergic-reactions/index.html',
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
            url: '/app/altered-mental-status',
            abstract:true,
            views: {
                'menuContent': {
                    templateUrl: 'js/page/altered-mental-status/index.html',
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
            url: '/app/anatomy',
            abstract:true,
            views: {
                'menuContent': {
                    templateUrl: 'js/page/anatomy/index.html',
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
            url: '/app/apgar',
            abstract:true,
            views: {
                'menuContent': {
                    templateUrl: 'js/page/apgar/index.html',
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
            url: '/app/behavioral-emergencies',
            abstract:true,
            views: {
                'menuContent': {
                    templateUrl: 'js/page/behavioral-emergencies/index.html',
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
            url: '/app/bites-and-stings',
            abstract:true,
            views: {
                'menuContent': {
                    templateUrl: 'js/page/bites-and-stings/index.html',
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
            url: '/app/airway-obstruction',
            abstract:true,
            views: {
                'menuContent': {
                    templateUrl: 'js/page/airway-obstruction/index.html',
                    controller: "PageCtrl"
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

        .state('app.chemicalBurns', {
            url: '/app/chemical-burns',
            abstract:true,
            views: {
                'menuContent': {
                    templateUrl: 'js/page/chemical-burns/index.html',
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
            url: '/app/childbirth',
            abstract:true,
            views: {
                'menuContent': {
                    templateUrl: 'js/page/childbirth/index.html',
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
            url: '/app/choking',
            abstract:true,
            views: {
                'menuContent': {
                    templateUrl: 'js/page/choking/index.html',
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
            url: '/app/cold-emergencies',
            abstract:true,
            views: {
                'menuContent': {
                    templateUrl: 'js/page/cold-emergencies/index.html',
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
            url: '/app/electrical-burns',
            abstract:true,
            views: {
                'menuContent': {
                    templateUrl: 'js/page/electrical-burns/index.html',
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
            url: '/app/respiratory-emergencies',
            abstract:true,
            views: {
                'menuContent': {
                    templateUrl: 'js/page/respiratory-emergencies/index.html',
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

        .state('app.reassessment', {
            url: '/app/reassessment',
            abstract:true,
            views: {
                'menuContent': {
                    templateUrl: 'js/page/reassessment/index.html',
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
            url: '/app/recover-position',
            abstract:true,
            views: {
                'menuContent': {
                    templateUrl: 'js/page/recovery-position-haines/index.html',
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
            url: '/app/scene-safety',
            abstract:true,
            views: {
                'menuContent': {
                    templateUrl: 'js/page/scene-safety/index.html',
                    controller: "PageCtrl"
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

        .state('app.sceneSafety.hazardsWithinStructures', {
            url: '/hazards-within-structures',
            views: {
                'subContent': {
                    templateUrl: 'js/page/scene-safety/hazards-within-structures.html'
                }
            }
        })


        .state('app.seizures', {
            url: '/app/seizures',
            abstract:true,
            views: {
                'menuContent': {
                    templateUrl: 'js/page/seizures/index.html',
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
        })


        .state('app.spinalHeadInjury', {
            url: '/app/spinal-head-injury',
            abstract:true,
            views: {
                'menuContent': {
                    templateUrl: 'js/page/spinal-and-head-injuries/index.html',
                    controller: "PageCtrl"
                }
            }
        })

        .state('app.spinalHeadInjury.suspect', {
            url: '/suspect',
            views: {
                'subContent': {
                    templateUrl: 'js/page/spinal-and-head-injuries/suspect.html'
                }
            }
        })


        .state('app.splinting', {
            url: '/app/splinting',
            abstract:true,
            views: {
                'menuContent': {
                    templateUrl: 'js/page/splinting/index.html',
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

        .state('app.splinting.examples', {
            url: '/examples',
            views: {
                'subContent': {
                    templateUrl: 'js/page/splinting/examples.html'
                }
            }
        })

        .state('app.triage', {
            url: '/triage',
            abstract:true,
            views: {
                'menuContent': {
                    templateUrl: 'js/page/triage/index.html',
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

        .state('app.triage.jumpStart', {
            url: '/jump-start',
            views: {
                'subContent': {
                    templateUrl: 'js/page/triage/jump-start.html'
                }
            }
        })


        .state('app.ventilation', {
            url: '/ventilation',
            abstract:true,
            views: {
                'menuContent': {
                    templateUrl: 'js/page/ventilation/index.html',
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
            abstract:true,
            views: {
                'menuContent': {
                    templateUrl: 'js/page/vital-signs/index.html',
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
            abstract:true,
            views: {
                'menuContent': {
                    templateUrl: 'js/page/wounds-and-soft-tissue-injuries/index.html',
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
            url: '/app/frostbite',
            abstract:true,
            views: {
                'menuContent': {
                    templateUrl: 'js/page/frostbite/index.html',
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
            url: '/app/glascow',
            abstract:true,
            views: {
                'menuContent': {
                    templateUrl: 'js/page/glascow-coma/index.html',
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
            url: '/app/hazmat',
            abstract:true,
            views: {
                'menuContent': {
                    templateUrl: 'js/page/hazmat/index.html',
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
            url: '/app/head-injury',
            abstract:true,
            views: {
                'menuContent': {
                    templateUrl: 'js/page/head-injury/index.html',
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
            url: '/app/heart-attack',
            abstract:true,
            views: {
                'menuContent': {
                    templateUrl: 'js/page/heart-attack/index.html',
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
            url: '/app/heat-emergency',
            abstract:true,
            views: {
                'menuContent': {
                    templateUrl: 'js/page/heat-emergency/index.html',
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
            url: '/app/helicopter-landing-zone',
            abstract:true,
            views: {
                'menuContent': {
                    templateUrl: 'js/page/helicopter-landing-zone/index.html',
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
            url: '/app/hypothermia',
            abstract:true,
            views: {
                'menuContent': {
                    templateUrl: 'js/page/hypothermia/index.html',
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
        });


    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/home');
});
