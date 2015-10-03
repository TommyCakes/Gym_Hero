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
      url: '/home',
      templateUrl: 'app/states/home.html'
    })
    .state('createWorkout', {
      url: '/createWorkout',
      templateUrl: 'app/states/createWorkout.html'
    })
      .state('createWorkout.chooseMuscleGroup', {
        url: '/chooseMuscleGroup',
        templateUrl: 'app/states/chooseMuscleGroup.html'
      })
      .state('createWorkout.addMovement', {
        url:'/addMovement',
        templateUrl: 'app/states/addMovement.html'
      })
    .state('previousWorkout', {
      url: '/previousWorkout',
      templateUrl: 'app/states/previousWorkout.html',
    })
    .state('challenges', {
      url: '/challenges',
      templateUrl: 'app/states/challenges.html',
    })
  })
