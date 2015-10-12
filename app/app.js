'use strict';


angular.module('workoutApp', ['ui.router', 'firebase', 'ngAnimate'])
  .constant('firebaseUrl', 'https://gym-hero.firebaseio.com/')

  .config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/signIn');
    $stateProvider

    //SignIn view
    .state('signIn', {
      url: '/signIn',
      templateUrl: 'app/states/signIn.html'
    })
    .state('home', {
      url: '/',
      templateUrl: 'app/states/home.html'
    })
    .state('createWorkout', {
      url: '/createWorkout',
      templateUrl: 'app/states/createWorkout.html',
    })
      .state('createWorkout.chooseMuscleGroup', {
        url: '/chooseMuscleGroup',
        templateUrl: 'app/states/chooseMuscleGroup.html',
        controller: 'MoveCtrl as move'
      })
      .state('createWorkout.addMovement', {
        url:'/addMovement',
        templateUrl: 'app/states/addMovement.html',
        controller: 'MoveCtrl as move',
        params: {
          muscle: {
            array: true
          }
        }
      })
    .state('previousWorkout', {
      url: '/previousWorkout',
      templateUrl: 'app/states/previousWorkout.html',
    })
    .state('previousWorkout.workouts', {
      url: '/workouts',
      templateUrl: 'app/states/workouts.html',
    })
    .state('previousWorkout.workout-list', {
      url: '/workout-list',
      templateUrl: 'app/states/workout-list.html',
    })
    .state('challenges', {
      url: '/challenges',
      templateUrl: 'app/states/challenges.html',
    })
  })
