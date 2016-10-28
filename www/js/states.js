nscApp.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('home', {
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

    .state('search', {
      url: '/search',
      views: {
        'menuContent': {
          templateUrl: 'js/search/search.html',
          controller: "SearchCtrl"
        }
      }
    })

    .state('AZTopics', {
      url: '/a-z',
      views: {
        'menuContent': {
          templateUrl: 'js/a-z topics/a-z.html'
        }
      }
    })

    .state('memoryAidTopics', {
      url: '/memoryAidTopics',
      views: {
        'menuContent': {
          templateUrl: 'js/topics-page/topics-page.html',
          controller: 'TopicsCtrl'
        }
      }
    })

    .state('responderSafetyTopics', {
      url: '/responderSafetyTopics',
      views: {
        'menuContent': {
          templateUrl: 'js/topics-page/topics-page.html',
          controller: 'TopicsCtrl'
        }
      }
    })

    .state('assessmentTopics', {
      url: '/assessmentTopics',
      views: {
        'menuContent': {
          templateUrl: 'js/topics-page/topics-page.html',
          controller: 'TopicsCtrl'
        }
      }
    })

    .state('airwayTopics', {
      url: '/airwayTopics',
      views: {
        'menuContent': {
          templateUrl: 'js/topics-page/topics-page.html',
          controller: 'TopicsCtrl'
        }
      }
    })

    .state('medicalTopics', {
      url: '/medicalTopics',
      views: {
        'menuContent': {
          templateUrl: 'js/topics-page/topics-page.html',
          controller: 'TopicsCtrl'
        }
      }
    })

    .state('traumaTopics', {
      url: '/traumaTopics',
      views: {
        'menuContent': {
          templateUrl: 'js/topics-page/topics-page.html',
          controller: 'TopicsCtrl'
        }
      }
    })

    .state('emsOperationsTopics', {
      url: '/emsOperationsTopics',
      views: {
        'menuContent': {
          templateUrl: 'js/topics-page/topics-page.html',
          controller: 'TopicsCtrl'
        }
      }
    })

    .state('specialSituationsTopics', {
      url: '/specialSituationsTopics',
      views: {
        'menuContent': {
          templateUrl: 'js/topics-page/topics-page.html',
          controller: 'TopicsCtrl'
        }
      }
    })

    .state('miscellaneousTopics', {
      url: '/miscellaneousTopics',
      views: {
        'menuContent': {
          templateUrl: 'js/topics-page/topics-page.html',
          controller: 'TopicsCtrl'
        }
      }
    })

    .state('about', {
      url: '/about',
      views: {
        'menuContent': {
          templateUrl: 'js/about/about.html'
        }
      }
    })

    .state('disclaimer', {
      url: '/disclaimer',
      views: {
        'menuContent': {
          templateUrl: 'js/disclaimer/disclaimer.html'
        }
      }
    })


    .state('page', {
      url: '/page',
      abstract: true,
      views: {
        'menuContent': {
          templateUrl: 'js/page/page.html',
          controller: "PageCtrl"
        }
      }
    })

    .state('page.abbreviations', {
      url: '/abbreviations',
      views: {
        'subContent': {
          templateUrl: 'js/page/abbreviations/abbreviations.html'
        }
      }
    })

    .state('page.aed', {
      url: '/aed',
      views: {
        'subContent': {
          templateUrl: 'js/page/abbreviations/aed.html'
        }
      }
    })

    /*.state('page.apgar', {
      url: '/apgar',
      views: {
        'subContent': {
          templateUrl: 'js/page/abbreviations/apgar.html'
        }
      }
    })*/

    .state('page.avpuScale', {
      url: '/avpu_scale',
      views: {
        'subContent': {
          templateUrl: 'js/page/abbreviations/avpu_scale.html'
        }
      }
    })

    .state('page.bvm', {
      url: '/bvm',
      views: {
        'subContent': {
          templateUrl: 'js/page/abbreviations/bvm.html'
        }
      }
    })

    .state('page.csm', {
      url: '/csm',
      views: {
        'subContent': {
          templateUrl: 'js/page/abbreviations/csm.html'
        }
      }
    })

    .state('page.dots', {
      url: '/dots',
      views: {
        'subContent': {
          templateUrl: 'js/page/abbreviations/dots.html'
        }
      }
    })

    .state('page.dcapBtls', {
      url: '/dcap_btls',
      views: {
        'subContent': {
          templateUrl: 'js/page/abbreviations/dcap_btls.html'
        }
      }
    })

    /*.state('page.fbao', {
      url: '/fbao',
      views: {
        'subContent': {
          templateUrl: 'js/page/abbreviations/fbao.html'
        }
      }
    })*/

    .state('page.mci', {
      url: '/mci',
      views: {
        'subContent': {
          templateUrl: 'js/page/abbreviations/mci.html'
        }
      }
    })

    .state('page.opqrst', {
      url: '/opqrst',
      views: {
        'subContent': {
          templateUrl: 'js/page/abbreviations/opqrst.html'
        }
      }
    })

    .state('page.rpm', {
      url: '/rpm',
      views: {
        'subContent': {
          templateUrl: 'js/page/abbreviations/rpm.html'
        }
      }
    })

    .state('page.smapleHistory', {
      url: '/smaple_history',
      views: {
        'subContent': {
          templateUrl: 'js/page/abbreviations/smaple_history.html'
        }
      }
    })

    .state('page.whenEmergencCareNeeded', {
      url: '/when-emergenc-care-needed',
      views: {
        'subContent': {
          templateUrl: 'js/page/abdominal-pain/when-emergenc-care-needed.html'
        }
      }
    })

    .state('page.airwayOpening', {
      url: '/airway_opening',
      views: {
        'subContent': {
          templateUrl: 'js/page/airway-opening/airway-opening.html'
        }
      }
    })

    .state('page.headTiltChinLift', {
      url: '/head-tilt-chin-lift',
      views: {
        'subContent': {
          templateUrl: 'js/page/airway-opening/head-tilt-chin-lift.html'
        }
      }
    })

    .state('page.jawThrust', {
      url: '/jaw-thrust',
      views: {
        'subContent': {
          templateUrl: 'js/page/airway-opening/jaw-thrust.html'
        }
      }
    })

    .state('page.safetyPrecautionsWhenSuctioning', {
      url: '/safety-precautions-when-suctioning',
      views: {
        'subContent': {
          templateUrl: 'js/page/airway-maintenance/safety-precautions-when-suctioning.html'
        }
      }
    })

    .state('page.suctioningAdultOrChild', {
      url: '/suctioning-adult-or-child',
      views: {
        'subContent': {
          templateUrl: 'js/page/airway-maintenance/suctioning-adult-or-child.html'
        }
      }
    })

    .state('page.suctioningInfant', {
      url: '/suctioning-infant',
      views: {
        'subContent': {
          templateUrl: 'js/page/airway-maintenance/suctioning-infant.html'
        }
      }
    })

    .state('page.oralAirwayInsertionInAdults', {
      url: '/oral-airway-insertion-in-adults',
      views: {
        'subContent': {
          templateUrl: 'js/page/airway-maintenance/oral-airway-insertion-in-adults.html'
        }
      }
    })

    .state('page.nasalAirwayInsertionInAdults', {
      url: '/nasal-airway-insertion-in-adults',
      views: {
        'subContent': {
          templateUrl: 'js/page/airway-maintenance/nasal-airway-insertion-in-adults.html'
        }
      }
    })

    .state('page.alcoholAbuse', {
      url: '/alcohol-abuse',
      views: {
        'subContent': {
          templateUrl: 'js/page/alcohol-and-drug-abuse/alcohol-abuse.html'
        }
      }
    })

    .state('page.alcoholAndDrugAbuse', {
      url: '/alcohol-and-drug-abuse',
      views: {
        'subContent': {
          templateUrl: 'js/page/alcohol-and-drug-abuse/alcohol-and-drug-abuse.html'
        }
      }
    })

    .state('page.opioidDrugOverdose', {
      url: '/opioid-drug-overdose',
      views: {
        'subContent': {
          templateUrl: 'js/page/alcohol-and-drug-abuse/opioid-drug-overdose.html'
        }
      }
    })

    .state('page.drugOverdose', {
      url: '/drug-overdose',
      views: {
        'subContent': {
          templateUrl: 'js/page/alcohol-and-drug-abuse/drug-overdose.html'
        }
      }
    })

    .state('page.earlySignsAndSymptoms', {
      url: '/early-signs-and-symptoms',
      views: {
        'subContent': {
          templateUrl: 'js/page/allergic-reactions/early-signs-and-symptoms.html'
        }
      }
    })

    .state('page.developingSignsAndSymptoms', {
      url: '/developing-signs-and-symptoms',
      views: {
        'subContent': {
          templateUrl: 'js/page/allergic-reactions/developing-signs-and-symptoms.html'
        }
      }
    })

    .state('page.emergencyCareForAllergicReactions', {
      url: '/emergency-care-for-allergic-reactions',
      views: {
        'subContent': {
          templateUrl: 'js/page/allergic-reactions/emergency-care-for-allergic-reactions.html'
        }
      }
    })

    .state('page.commonCausesOfAlteredMentalStatus', {
      url: '/common-causes-of-altered-mental-status',
      views: {
        'subContent': {
          templateUrl: 'js/page/altered-mental-status/common-causes-of-altered-mental-status.html'
        }
      }
    })

    .state('page.emergencyCareForAlteredMentalStatus', {
      url: '/emergency-care-for-altered-mental-status',
      views: {
        'subContent': {
          templateUrl: 'js/page/altered-mental-status/emergency-care-for-altered-mental-status.html'
        }
      }
    })

    .state('page.directionalTerms', {
      url: '/directional-terms',
      views: {
        'subContent': {
          templateUrl: 'js/page/anatomy/directional-terms.html'
        }
      }
    })

    .state('page.abdominalQuadrants', {
      url: '/abdominal-quadrants',
      views: {
        'subContent': {
          templateUrl: 'js/page/anatomy/abdominal-quadrants.html'
        }
      }
    })

    .state('page.respiratorySystem', {
      url: '/respiratory-system',
      views: {
        'subContent': {
          templateUrl: 'js/page/anatomy/respiratory-system.html'
        }
      }
    })

    .state('page.majorArteries', {
      url: '/major-arteries',
      views: {
        'subContent': {
          templateUrl: 'js/page/anatomy/major-arteries.html'
        }
      }
    })

    .state('page.skeletalSystem', {
      url: '/skeletal-system',
      views: {
        'subContent': {
          templateUrl: 'js/page/anatomy/skeletal-system.html'
        }
      }
    })

    .state('page.apgar', {
      url: '/apgar',
      views: {
        'subContent': {
          templateUrl: 'js/page/apgar/apgar.html'
        }
      }
    })

    .state('page.assessingBehavioralEmergencies', {
      url: '/assessing-behavioral-emergencies',
      views: {
        'subContent': {
          templateUrl: 'js/page/behavioral-emergencies/assessing-behavioral-emergencies.html'
        }
      }
    })

    .state('page.emergencyCareForBehavioralEmergencies', {
      url: '/emergency-care-for-behavioral-emergencies',
      views: {
        'subContent': {
          templateUrl: 'js/page/behavioral-emergencies/emergency-care-for-behavioral-emergencies.html'
        }
      }
    })

    .state('page.careForAnimalBites', {
      url: '/care-for-animal-bites',
      views: {
        'subContent': {
          templateUrl: 'js/page/bites-and-stings/care-for-animal-bites.html'
        }
      }
    })

    .state('page.careForOtherBitesAndStings', {
      url: '/care-for-other-bites-and-stings',
      views: {
        'subContent': {
          templateUrl: 'js/page/bites-and-stings/care-for-other-bites-and-stings.html'
        }
      }
    })

    .state('page.airwayObstructionUnresponsive', {
      url: '/airway-obstruction-unresponsive',
      views: {
        'subContent': {
          templateUrl: 'js/page/airway-obstruction/airway-obstruction-unresponsive.html'
        }
      }
    })

    .state('page.fbao', {
      url: '/fbao',
      views: {
        'subContent': {
          templateUrl: 'js/page/airway-obstruction/fbao.html'
        }
      }
    })

    .state('page.fbaoAdult', {
      url: '/fbao-adult',
      views: {
        'subContent': {
          templateUrl: 'js/page/airway-obstruction/fbao-adult.html'
        }
      }
    })

    .state('page.fbaoInfant', {
      url: '/fbao-infant',
      views: {
        'subContent': {
          templateUrl: 'js/page/airway-obstruction/fbao-infant.html'
        }
      }
    })

    .state('page.bleedingExternal', {
      url: '/bleeding-external',
      views: {
        'subContent': {
          templateUrl: 'js/page/bleeding/bleeding-external.html'
        }
      }
    })

    .state('page.controlBleedingUsingTourniquet', {
      url: '/control-bleeding-using-tourniquet',
      views: {
        'subContent': {
          templateUrl: 'js/page/bleeding/control-bleeding-using-tourniquet.html'
        }
      }
    })

    .state('page.bleedingInternal', {
      url: '/bleeding-internal',
      views: {
        'subContent': {
          templateUrl: 'js/page/bleeding/bleeding-internal.html'
        }
      }
    })

    .state('page.stroke', {
      url: '/stroke',
      views: {
        'subContent': {
          templateUrl: 'js/page/stroke/stroke.html'
        }
      }
    })

    .state('page.fastStroke', {
      url: '/FAST-stroke',
      views: {
        'subContent': {
          templateUrl: 'js/page/stroke/fast-stroke.html'
        }
      }
    })

    .state('page.burns', {
      url: '/burns',
      views: {
        'subContent': {
          templateUrl: 'js/page/burns/burns.html'
        }
      }
    })

    .state('page.ruleOfNineBurns', {
      url: '/rule-of-nine-burns',
      views: {
        'subContent': {
          templateUrl: 'js/page/burns/rule-of-nine-burns.html'
        }
      }
    })

    .state('page.burnsHeat', {
      url: '/burns-heat',
      views: {
        'subContent': {
          templateUrl: 'js/page/burns/burns-heat.html'
        }
      }
    })

    .state('page.burnsChemical', {
      url: '/burns-chemical',
      views: {
        'subContent': {
          templateUrl: 'js/page/chemical-burns/burns-chemical.html'
        }
      }
    })

    .state('page.supportiveCareDuringLabor', {
      url: '/supportive-care-during-labor',
      views: {
        'subContent': {
          templateUrl: 'js/page/childbirth/supportive-care-during-labor.html'
        }
      }
    })

    .state('page.childbirth', {
      url: '/childbirth',
      views: {
        'subContent': {
          templateUrl: 'js/page/childbirth/childbirth.html'
        }
      }
    })

    .state('page.assessingChildbirthImminence', {
      url: '/assessing-childbirth-imminence',
      views: {
        'subContent': {
          templateUrl: 'js/page/childbirth/assessing-childbirth-imminence.html'
        }
      }
    })

    .state('page.prepareForChildbirth', {
      url: '/prepare-for-childbirth',
      views: {
        'subContent': {
          templateUrl: 'js/page/childbirth/prepare-for-childbirth.html'
        }
      }
    })

    .state('page.assistingWithDelivery', {
      url: '/assisting-with-delivery',
      views: {
        'subContent': {
          templateUrl: 'js/page/childbirth/assisting-with-delivery.html'
        }
      }
    })

    .state('page.careForMaternalBleedingAfterDelivery', {
      url: '/care-for-maternal-bleeding-after-delivery',
      views: {
        'subContent': {
          templateUrl: 'js/page/childbirth/care-for-maternal-bleeding-after-delivery.html'
        }
      }
    })

    .state('page.careOfTheNewborn', {
      url: '/care-of-the-newborn',
      views: {
        'subContent': {
          templateUrl: 'js/page/childbirth/care-of-the-newborn.html'
        }
      }
    })

    .state('page.choking', {
      url: '/choking',
      views: {
        'subContent': {
          templateUrl: 'js/page/choking/choking.html'
        }
      }
    })

    .state('page.coldEmergencies', {
      url: '/cold-emergencies',
      views: {
        'subContent': {
          templateUrl: 'js/page/cold-emergencies/cold-emergencies.html'
        }
      }
    })

    .state('page.frostbite', {
      url: '/frostbite',
      views: {
        'subContent': {
          templateUrl: 'js/page/cold-emergencies/frostbite.html'
        }
      }
    })

    .state('page.hypothermia', {
      url: '/hypothermia',
      views: {
        'subContent': {
          templateUrl: 'js/page/cold-emergencies/hypothermia.html'
        }
      }
    })

    .state('page.burnsElectrical', {
      url: '/burns-electrical',
      views: {
        'subContent': {
          templateUrl: 'js/page/electrical-burns/burns-electrical.html'
        }
      }
    })

    .state('page.fainting', {
      url: '/fainting',
      views: {
        'subContent': {
          templateUrl: 'js/page/fainting/fainting.html'
        }
      }
    })

    .state('page.callFirstVsCallFast', {
      url: '/call-first-vs-call-fast',
      views: {
        'subContent': {
          templateUrl: 'js/page/cpr/call-first-vs-call-fast.html'
        }
      }
    })

    .state('page.cprAed', {
      url: '/cpr-aed',
      views: {
        'subContent': {
          templateUrl: 'js/page/cpr/cpr-aed.html'
        }
      }
    })

    .state('page.1RescuerCpr', {
      url: '/1-rescuer-cpr',
      views: {
        'subContent': {
          templateUrl: 'js/page/cpr/1-rescuer-cpr.html'
        }
      }
    })

    .state('page.2RescuerCprForAdultsAndChildren', {
      url: '/2-rescuer-cpr-for-adults-and-children',
      views: {
        'subContent': {
          templateUrl: 'js/page/cpr/2-rescuer-cpr-for-adults-and-children.html'
        }
      }
    })

    .state('page.2RescuerCprForInfants', {
      url: '/2-rescuer-cpr-for-infants',
      views: {
        'subContent': {
          templateUrl: 'js/page/cpr/2-rescuer-cpr-for-infants.html'
        }
      }
    })

    .state('page.usingAnAed', {
      url: '/using-an-aed',
      views: {
        'subContent': {
          templateUrl: 'js/page/cpr/using-an-aed.html'
        }
      }
    })

    .state('page.signAndSymptom', {
      url: '/sign-and-symptom',
      views: {
        'subContent': {
          templateUrl: 'js/page/respiratory-emergencies/sign-and-symptom.html'
        }
      }
    })

    .state('page.respiratoryEmergencies', {
      url: '/respiratory-emergencies',
      views: {
        'subContent': {
          templateUrl: 'js/page/respiratory-emergencies/respiratory-emergency.html'
        }
      }
    })

    .state('page.respiratoryDistress', {
      url: '/respiratory-distress',
      views: {
        'subContent': {
          templateUrl: 'js/page/respiratory-emergencies/respiratory-distress.html'
        }
      }
    })

    .state('page.inadequateBreathing', {
      url: '/inadequate-breathing',
      views: {
        'subContent': {
          templateUrl: 'js/page/respiratory-emergencies/inadequate-breathing.html'
        }
      }
    })

    .state('page.emergencyCareForAnAsthama', {
      url: '/emergency-care-for-an-asthama',
      views: {
        'subContent': {
          templateUrl: 'js/page/respiratory-emergencies/emergency-care-for-an-asthama.html'
        }
      }
    })

    .state('page.administration', {
      url: '/administration',
      views: {
        'subContent': {
          templateUrl: 'js/page/oxygen-administration/oxygen-administration.html'
        }
      }
    })

    .state('page.oxygenCylinderVolumes', {
      url: '/oxygen-cylinder-volumes',
      views: {
        'subContent': {
          templateUrl: 'js/page/oxygen-administration/oxygen-cylinder-volumes.html'
        }
      }
    })

    .state('page.pediatricProblems', {
      url: '/pediatric-problems',
      views: {
        'subContent': {
          templateUrl: 'js/page/pediatric-problems/pediatric-problems.html'
        }
      }
    })

    .state('page.blowByOxygen', {
      url: '/blow-by-oxygen',
      views: {
        'subContent': {
          templateUrl: 'js/page/pediatric-problems/blow-by-oxygen-for-respiratory-distress.html'
        }
      }
    })

    .state('page.seizures', {
      url: '/seizures-pediatric',
      views: {
        'subContent': {
          templateUrl: 'js/page/pediatric-problems/seizures.html'
        }
      }
    })

    .state('page.SUID', {
      url: '/SUID',
      views: {
        'subContent': {
          templateUrl: 'js/page/pediatric-problems/SUID.html'
        }
      }
    })

    .state('page.traumaPediatricPatients', {
      url: '/trauma-in-pediatric-patients',
      views: {
        'subContent': {
          templateUrl: 'js/page/pediatric-problems/trauma-in-pediatric-patients.html'
        }
      }
    })

    .state('page.abuseIsSuspected', {
      url: '/abuse-is-suspected',
      views: {
        'subContent': {
          templateUrl: 'js/page/pediatric-problems/abuse-is-suspected.html'
        }
      }
    })

    .state('page.poisioningControlCenters', {
      url: '/poisioning-control-centers',
      views: {
        'subContent': {
          templateUrl: 'js/page/poisoning/poisioning-control-centers.html'
        }
      }
    })

    .state('page.swallowedPoison', {
      url: '/swallowed-poison',
      views: {
        'subContent': {
          templateUrl: 'js/page/poisoning/swallowed-poison.html'
        }
      }
    })

    .state('page.poisonSwallowed', {
      url: '/poison-swallowed',
      views: {
        'subContent': {
          templateUrl: 'js/page/poisoning/swallowed-poison.html'
        }
      }
    })

    .state('page.inhaledPoison', {
      url: '/inhaled-poison',
      views: {
        'subContent': {
          templateUrl: 'js/page/poisoning/inhaled-poison.html'
        }
      }
    })

    .state('page.reassessment', {
      url: '/reassessment',
      views: {
        'subContent': {
          templateUrl: 'js/page/reassessment/reassessment.html'
        }
      }
    })

    .state('page.recoverPosition', {
      url: '/recover-position',
      views: {
        'subContent': {
          templateUrl: 'js/page/recovery-position-haines/recovery-position.html'
        }
      }
    })

    .state('page.sceneSafety', {
      url: '/scene-safety',
      views: {
        'subContent': {
          templateUrl: 'js/page/scene-safety/scene-safety.html'
        }
      }
    })

    .state('page.potentialViolence', {
      url: '/potential-violence',
      views: {
        'subContent': {
          templateUrl: 'js/page/scene-safety/potential-violence.html'
        }
      }
    })

    .state('page.vehicleCrashHazards', {
      url: '/vehicle-crash-hazards',
      views: {
        'subContent': {
          templateUrl: 'js/page/scene-safety/vehicle-crash-hazards.html'
        }
      }
    })

    .state('page.sceneSizeUp', {
      url: '/scene-size-up',
      views: {
        'subContent': {
          templateUrl: 'js/page/scene-safety/scene-size-up.html'
        }
      }
    })

    .state('page.environmentalDangers', {
      url: '/environmental-dangers',
      views: {
        'subContent': {
          templateUrl: 'js/page/scene-safety/environmental-dangers.html'
        }
      }
    })

    .state('page.hazardsWithinStructures', {
      url: '/hazards-within-structures',
      views: {
        'subContent': {
          templateUrl: 'js/page/scene-safety/hazards-within-structures.html'
        }
      }
    })

    .state('page.causesOfSeizures', {
      url: '/causes-of-seizures',
      views: {
        'subContent': {
          templateUrl: 'js/page/seizures/seizures.html'
        }
      }
    })

    .state('page.signsAndSymptomsOfShock', {
      url: '/signsAndSymptomsOfShock',
      views: {
        'subContent': {
          templateUrl: 'js/page/shock/shock.html'
        }
      }
    })

    .state('page.spinalInjuries', {
      url: '/spinal-injuries',
      views: {
        'subContent': {
          templateUrl: 'js/page/spinal-and-head-injuries/spinal-injuries.html'
        }
      }
    })

    .state('page.splinting', {
      url: '/splinting',
      views: {
        'subContent': {
          templateUrl: 'js/page/splinting/splinting.html'
        }
      }
    })

    .state('page.rigidSplint', {
      url: '/rigid-splint',
      views: {
        'subContent': {
          templateUrl: 'js/page/splinting/rigid-splint.html'
        }
      }
    })

    .state('page.slingAndBinder', {
      url: '/sling-and-binder',
      views: {
        'subContent': {
          templateUrl: 'js/page/splinting/sling-and-binder.html'
        }
      }
    })

    .state('page.assessMentalStatusChild', {
      url: '/assess-mental-status-child',
      views: {
        'subContent': {
          templateUrl: 'js/page/triage/assess-mental-status-child.html'
        }
      }
    })

    .state('page.assessMentalStatus', {
      url: '/assess-mental-status',
      views: {
        'subContent': {
          templateUrl: 'js/page/triage/assess-mental-status.html'
        }
      }
    })


    .state('page.triage', {
      url: '/triage',
      views: {
        'subContent': {
          templateUrl: 'js/page/triage/triage.html'
        }
      }
    })

    .state('page.startTriageAssessment', {
      url: '/start-triage-assessment',
      views: {
        'subContent': {
          templateUrl: 'js/page/triage/triage-start-assessment.html'
        }
      }
    })

    .state('page.triageAssessment', {
      url: '/triage-assessment',
      views: {
        'subContent': {
          templateUrl: 'js/page/triage/triage-assessment.html'
        }
      }
    })

    .state('page.triageCategories', {
      url: '/triage-categories',
      views: {
        'subContent': {
          templateUrl: 'js/page/triage/triage-categories.html'
        }
      }
    })

    .state('page.triageJumpStart', {
      url: '/triage-jump-start',
      views: {
        'subContent': {
          templateUrl: 'js/page/triage/triage-jump-start.html'
        }
      }
    })

    .state('page.ventilation', {
      url: '/ventilation',
      views: {
        'subContent': {
          templateUrl: 'js/page/ventilation/ventilation.html'
        }
      }
    })


    .state('page.mouthToMaskVentilation', {
      url: '/mouth-to-mask-ventilation',
      views: {
        'subContent': {
          templateUrl: 'js/page/ventilation/mouth-to-mask-ventilation.html'
        }
      }
    })


    .state('page.bvmVentilation', {
      url: '/bvm-ventilation',
      views: {
        'subContent': {
          templateUrl: 'js/page/ventilation/bvm-ventilation.html'
        }
      }
    })

    .state('page.vitalSigns', {
      url: '/vital-signs',
      views: {
        'subContent': {
          templateUrl: 'js/page/vital-signs/vital-signs.html'
        }
      }
    })

    .state('page.wounds', {
      url: '/wounds',
      views: {
        'subContent': {
          templateUrl: 'js/page/wounds-and-soft-tissue-injuries/wounds.html'
        }
      }
    })

    .state('page.softTissueInjuries', {
      url: '/soft-tissue-injuries',
      views: {
        'subContent': {
          templateUrl: 'js/page/wounds-and-soft-tissue-injuries/wounds.html'
        }
      }
    })

    .state('page.frostbiteEmergency', {
      url: '/frostbite-emergency',
      views: {
        'subContent': {
          templateUrl: 'js/page/frostbite/emergency-care-for-frostbite.html'
        }
      }
    })

    .state('page.glascowComaScale', {
      url: '/glascow-coma-scale',
      views: {
        'subContent': {
          templateUrl: 'js/page/glascow-coma/glascow-coma-scale.html'
        }
      }
    })

    .state('page.hazmat', {
      url: '/hazmat',
      views: {
        'subContent': {
          templateUrl: 'js/page/hazmat_n/hazmat.html'
        }
      }
    })

    .state('page.emergency', {
      url: '/emergency',
      views: {
        'subContent': {
          templateUrl: 'js/page/head-injury/emergency-care-for-head-injury.html'
        }
      }
    })

    .state('page.signs', {
      url: '/signs',
      views: {
        'subContent': {
          templateUrl: 'js/page/heart-attack/signs.html'
        }
      }
    })

    .state('page.heatEmergencySignsAndSymptoms', {
      url: '/heat-emergency-signs-and-symptoms',
      views: {
        'subContent': {
          templateUrl: 'js/page/heat-emergency/signs-and-symptoms.html'
        }
      }
    })

    .state('page.heatStroke', {
      url: '/heat-stroke',
      views: {
        'subContent': {
          templateUrl: 'js/page/heat-emergency/heat-stroke.html'
        }
      }
    })

    .state('page.heatExhaustion', {
      url: '/heat-exhaustion',
      views: {
        'subContent': {
          templateUrl: 'js/page/heat-emergency/heat-exhaustion.html'
        }
      }
    })

    .state('page.helicopterLandingZone', {
      url: '/helicopter-landing-zone',
      views: {
        'subContent': {
          templateUrl: 'js/page/helicopter-landing-zone/helicopter-landing.html'
        }
      }
    })

    /*.state('page.signsAndSymptoms', {
      url: '/signs-and-symptoms',
      views: {
        'subContent': {
          templateUrl: 'js/page/hypothermia/signs-and-symptoms.html'
        }
      }
    })*/

    .state('page.consent', {
      url: '/consent',
      views: {
        'subContent': {
          templateUrl: 'js/page/legal-and-ethical-issues/consent.html'
        }
      }
    })

    .state('page.crimeScenes', {
      url: '/crime-scenes',
      views: {
        'subContent': {
          templateUrl: 'js/page/legal-and-ethical-issues/crime-scenes.html'
        }
      }
    })

    .state('page.consentRefuses', {
      url: '/consent-refuses',
      views: {
        'subContent': {
          templateUrl: 'js/page/legal-and-ethical-issues/victim-refuses-consent.html'
        }
      }
    })
    .state('page.advanceDirective', {
      url: '/advance-directive',
      views: {
        'subContent': {
          templateUrl: 'js/page/legal-and-ethical-issues/advance-directive.html'
        }
      }
    })
    .state('page.impliedConsent', {
      url: '/implied-consent',
      views: {
        'subContent': {
          templateUrl: 'js/page/legal-and-ethical-issues/implied-consent.html'
        }
      }
    })
    .state('page.legalIssues', {
      url: '/legal-issues',
      views: {
        'subContent': {
          templateUrl: 'js/page/legal-and-ethical-issues/legal-issues.html'
        }
      }
    })
    .state('page.ethicalResponsibilities', {
      url: '/ethical-responsibilities',
      views: {
        'subContent': {
          templateUrl: 'js/page/legal-and-ethical-issues/ethical-responsibilities.html'
        }
      }
    })
    .state('page.expressConsent', {
      url: '/express-consent',
      views: {
        'subContent': {
          templateUrl: 'js/page/legal-and-ethical-issues/express-consent.html'
        }
      }
    })
    .state('page.reportableEvents', {
      url: '/reportable-events',
      views: {
        'subContent': {
          templateUrl: 'js/page/legal-and-ethical-issues/reportable-events.html'
        }
      }
    })
    .state('page.confidentiality', {
      url: '/confidentiality',
      views: {
        'subContent': {
          templateUrl: 'js/page/legal-and-ethical-issues/confidentiality.html'
        }
      }
    })

    .state('page.negligence', {
      url: '/negligence',
      views: {
        'subContent': {
          templateUrl: 'js/page/legal-and-ethical-issues/negligence.html'
        }
      }
    })

    .state('page.falsificationOfRecords', {
      url: '/falsification-of-records',
      views: {
        'subContent': {
          templateUrl: 'js/page/legal-and-ethical-issues/falsification-of-records.html'
        }
      }
    })

    .state('page.roleOfEmergency', {
      url: '/role-of-emergency',
      views: {
        'subContent': {
          templateUrl: 'js/page/mass-casualty-incidents/role-of-emergency.html'
        }
      }
    })

    .state('page.medication', {
      url: '/medication',
      views: {
        'subContent': {
          templateUrl: 'js/page/medication/medication.html'
        }
      }
    })

    .state('page.aspirinForHeartAttack', {
      url: '/aspirin-for-heart-attack',
      views: {
        'subContent': {
          templateUrl: 'js/page/medication/aspirin-for-heart-attack.html'
        }
      }
    })

    .state('page.glucosePasteForHypoglycemia', {
      url: '/glucose-paste-for-hypoglycemia',
      views: {
        'subContent': {
          templateUrl: 'js/page/medication/glucose-paste-for-hypoglycemia.html'
        }
      }
    })

    .state('page.bronchodilatorInhalerAsthmaAttack', {
      url: '/bronchodilator-inhaler-asthma-attack',
      views: {
        'subContent': {
          templateUrl: 'js/page/medication/bronchodilator-inhaler-asthma-attack.html'
        }
      }
    })

    .state('page.severeAllergicReation', {
      url: '/severe-allergic-reation',
      views: {
        'subContent': {
          templateUrl: 'js/page/medication/severe-allergic-reation.html'
        }
      }
    })

    .state('page.autoInjectorSevereAllergicReaction', {
      url: '/auto-injector-for-severe-allergic-reaction',
      views: {
        'subContent': {
          templateUrl: 'js/page/medication/auto-injector-for-severe-allergic-reaction.html'
        }
      }
    })

    .state('page.cardiacEmergency', {
      url: '/cardiac-emergency',
      views: {
        'subContent': {
          templateUrl: 'js/page/medication/cardiac-emergency.html'
        }
      }
    })

    .state('page.signsAndSymptoms', {
      url: '/signs-and-symptoms',
      views: {
        'subContent': {
          templateUrl: 'js/page/musculoskeletal-injuries/signs-and-symptoms.html'
        }
      }
    })

    .state('page.hyperglycemia', {
      url: '/hyperglycemia',
      views: {
        'subContent': {
          templateUrl: 'js/page/diabetic-emergencies/hyperglycemia.html'
        }
      }
    })

    .state('page.hypoglycemia', {
      url: '/hypoglycemia',
      views: {
        'subContent': {
          templateUrl: 'js/page/diabetic-emergencies/hypoglycemia.html'
        }
      }
    })

    .state('page.diabeticEmergencies', {
      url: '/diabetic-emergencies',
      views: {
        'subContent': {
          templateUrl: 'js/page/diabetic-emergencies/diabetic-emergencies.html'
        }
      }
    })

    .state('page.documentationTips', {
      url: '/documentation-tips',
      views: {
        'subContent': {
          templateUrl: 'js/page/documentation-tips/documentation-tips.html'
        }
      }
    })

    .state('page.correctingErrorInReports', {
      url: '/correcting-error-in-reports',
      views: {
        'subContent': {
          templateUrl: 'js/page/documentation-tips/correcting-error-in-reports.html'
        }
      }
    })

    .state('page.dressingAndBandages', {
      url: '/dressingAndBandages',
      views: {
        'subContent': {
          templateUrl: 'js/page/dressing-and-bandages/full-page.html'
        }
      }
    })

    .state('page.dressing', {
      url: '/dressing',
      views: {
        'subContent': {
          templateUrl: 'js/page/dressing-and-bandages/dressing.html'
        }
      }
    })

    .state('page.bandages', {
      url: '/bandages',
      views: {
        'subContent': {
          templateUrl: 'js/page/dressing-and-bandages/bandages.html'
        }
      }
    })

    .state('page.primaryAssessment', {
      url: '/primary-assessment',
      views: {
        'subContent': {
          templateUrl: 'js/page/assessment/primary-assessment.html'
        }
      }
    })

    .state('page.bleedingSerious', {
      url: '/bleeding-serious',
      views: {
        'subContent': {
          templateUrl: 'js/page/assessment/bleeding-serious.html'
        }
      }
    })


    .state('page.pulseChecking', {
      url: '/pulse-checking',
      views: {
        'subContent': {
          templateUrl: 'js/page/assessment/pulse-checking.html'
        }
      }
    })

    .state('page.assessingResponsiveness', {
      url: '/assessing-responsiveness',
      views: {
        'subContent': {
          templateUrl: 'js/page/assessment/assessing-responsiveness.html'
        }
      }
    })

    .state('page.secondaryAssessment', {
      url: '/secondary-assessment',
      views: {
        'subContent': {
          templateUrl: 'js/page/assessment/secondary-assessment.html'
        }
      }
    })

    .state('page.sampleHistory', {
      url: '/sample-history',
      views: {
        'subContent': {
          templateUrl: 'js/page/assessment/sample-history.html'
        }
      }
    })

    .state('page.auscultation', {
      url: '/auscultation',
      views: {
        'subContent': {
          templateUrl: 'js/page/assessment/auscultation.html'
        }
      }
    })


    .state('page.clothingDrag', {
      url: '/clothing-drag',
      views: {
        'subContent': {
          templateUrl: 'js/page/moving-patient/clothing-drag.html'

        }
      }
    })


    .state('page.blanketDrag', {
      url: '/blanket-drag',
      views: {
        'subContent': {
          templateUrl: 'js/page/moving-patient/blanket-drag.html'

        }
      }
    })


    .state('page.shoulderDrag', {
      url: '/shoulder-drag',
      views: {
        'subContent': {
          templateUrl: 'js/page/moving-patient/shoulder-drag.html'

        }
      }
    })


    .state('page.dragsheetTransfer', {
      url: '/dragsheet-transfer',
      views: {
        'subContent': {
          templateUrl: 'js/page/moving-patient/dragsheet-transfer.html'

        }
      }
    })


    .state('page.firefighterDrag', {
      url: '/firefighter-drag',
      views: {
        'subContent': {
          templateUrl: 'js/page/moving-patient/firefighter-drag.html'

        }
      }
    })


    .state('page.upperExtremityDrag', {
      url: '/upper-extremity-drag',
      views: {
        'subContent': {
          templateUrl: 'js/page/moving-patient/upper-extremity-drag.html'

        }
      }
    })


    .state('page.upperExtremityDragForRapidExtrication', {
      url: '/upper-extremity-drag-for-rapid-extrication',
      views: {
        'subContent': {
          templateUrl: 'js/page/moving-patient/upper-extremity-drag-for-rapid-extrication.html'

        }
      }
    })

    .state('page.1rescuerEmergencyDrags', {
      url: '/emergency-moves',
      views: {
        'subContent': {
          templateUrl: 'js/page/moving-patient/1-rescuer-emergency-drags.html'
        }
      }
    })

    .state('page.emergencyMoves', {
      url: '/1-rescuer-emergency-drags',
      views: {
        'subContent': {
          templateUrl: 'js/page/moving-patient/emergency-moves.html'

        }
      }
    })

    .state('page.movingPatient', {
      url: '/moving-patient',
      views: {
        'subContent': {
          templateUrl: 'js/page/moving-patient/moving-patient.html'

        }
      }
    })


    .state('page.palpation', {
      url: '/palpation',
      views: {
        'subContent': {
          templateUrl: 'js/page/assessment/palpation.html'
        }
      }
    })

    .state('page.1RescuerAssist', {
      url: '/1-rescuer-assist',
      views: {
        'subContent': {
          templateUrl: 'js/page/moving-patient/walking-assist.html'

        }
      }
    })

    .state('page.packstrapCarry', {
      url: '/packstrap-carry',
      views: {
        'subContent': {
          templateUrl: 'js/page/moving-patient/packstrap-carry.html'

        }
      }
    })

    .state('page.cradleCarry', {
      url: '/cradle-carry',
      views: {
        'subContent': {
          templateUrl: 'js/page/moving-patient/cradle-carry.html'

        }
      }
    })

    .state('page.piggybackCarry', {
      url: '/piggyback-carry',
      views: {
        'subContent': {
          templateUrl: 'js/page/moving-patient/piggyback-carry.html'

        }
      }
    })

    .state('page.firefighterCarry', {
      url: '/firefighter-carry',
      views: {
        'subContent': {
          templateUrl: 'js/page/moving-patient/firefighter-carry.html'

        }
      }
    })

    .state('page.1rescuerEmergencyCarries', {
      url: '/1-rescuer-emergency-carries',
      views: {
        'subContent': {
          templateUrl: 'js/page/moving-patient/1-rescuer-emergency-carries.html'

        }
      }
    })


    .state('page.assessmentDcapBtls', {
      url: '/assessment-dcap-btls',
      views: {
        'subContent': {
          templateUrl: 'js/page/assessment/dcap-btls.html'
        }
      }
    })

    .state('page.2rescuerEmergencyCarries', {
      url: '/2-rescuer-emergency-carries',
      views: {
        'subContent': {
          templateUrl: 'js/page/moving-patient/2-rescuer-emergency-carries.html'
        }
      }
    })


    /*.state('page.reassessment', {
      url: '/reassessment',
      views: {
        'subContent': {
          templateUrl: 'js/page/assessment/reassessment.html'
        }
      }
    })*/


    .state('page.reassessmentComparing', {
      url: '/reassessment-comparing',
      views: {
        'subContent': {
          templateUrl: 'js/page/reassessment/reassessment-comparing.html'
        }
      }
    })

    .state('page.directCarry', {
      url: '/direct-carry',
      views: {
        'subContent': {
          templateUrl: 'js/page/moving-patient/direct-carry.html'

        }
      }
    })

    .state('page.directGroundLift', {
      url: '/direct-ground-lift',
      views: {
        'subContent': {
          templateUrl: 'js/page/moving-patient/direct-ground-lift.html'

        }
      }
    })

    .state('page.extremityLift', {
      url: '/extremity-lift',
      views: {
        'subContent': {
          templateUrl: 'js/page/moving-patient/extremity-lift.html'

        }
      }
    })

    .state('page.non-emergency-moves', {
      url: '/non-emergency-moves',
      views: {
        'subContent': {
          templateUrl: 'js/page/moving-patient/non-emergency-moves.html'

        }
      }
    });


  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/home');
})
;
