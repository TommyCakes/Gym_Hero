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
        params: {
           chest: 5,  // default value of x is 5
           y: 100 // default value of y is 100
         }
      })
      .state('createWorkout.addMovement', {
        url:'/addMovement/:muscle',
        templateUrl: 'app/states/addMovement.html',
        controller: 'MoveCtrl as move'
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
