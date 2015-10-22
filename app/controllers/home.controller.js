'use strict';


angular.module('workoutApp')
  .controller('HomeCtrl', function($firebaseObject, $firebaseArray, $location, firebaseUrl, Auth,  Records, $stateParams, $state ){
     var self = this;


    this.fireLink = firebaseUrl;
    var ref = new Firebase(firebaseUrl)

    var movements = firebaseUrl + 'movements'
    var moveRef = new Firebase(movements)
    this.movements = $firebaseArray(moveRef)

    var users = firebaseUrl + 'users'
    var userRef = new Firebase(users)
    this.users = $firebaseArray(userRef)

    // console.log(self.records)

    //Calling login function
    this.login = function() {
      self.loading = true;
      Auth.login();
      console.log(Auth.updateUser)
    }

    Auth.onAuth(function(user) {
      self.user = user

      self.loading = false;
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

    //gender choice
    this.gender = "";
    this.genderSelect = function(gender) {
      if (gender === 'male') {
        self.gender = 'male';
      }
      else {
      self.gender = 'female'
      }
    }
