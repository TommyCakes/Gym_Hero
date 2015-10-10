'use strict';


angular.module('workoutApp')
  .controller('HomeCtrl', function($firebaseObject, $firebaseArray, $location, firebaseUrl, Auth, $stateParams, $state ){
     var self = this;
     
     this.fireLink = firebaseUrl;
     var ref = new Firebase(firebaseUrl)

    var movements = firebaseUrl + 'movements'
    var moveRef = new Firebase(movements)
    this.movements = $firebaseArray(moveRef)

    var users = firebaseUrl + 'users'
    var userRef = new Firebase(users)
    this.users = $firebaseArray(userRef)

    //Calling login function
    this.login = Auth.login
    Auth.onAuth(function(user) {
      self.user = user
      // console.log(self.user)
      if (user === false) {
        return $location.path('/signIn')
      }
      else {
        return $location.path('/')
      }
    })
    this.logout = Auth.logout
    // console.log(self.users)
})
