angular.module('workoutApp')
  .controller('HomeCtrl', function($firebaseObject, $firebaseArray, firebaseUrl ){
  this.fireLink = firebaseUrl;
    var self = this;
    var ref = new Firebase(firebaseUrl)
    var movements = firebaseUrl + 'movements'
    var users = firebaseUrl + 'users'
    var exercises = firebaseUrl + 'exercises'

    var moveRef = new Firebase(movements)
    var userRef = new Firebase(users)
    // var exerciseRef = new Firebase(exercises)

    // this.firstArray = $firebaseArray(ref)
    this.movements = $firebaseArray(moveRef)
    this.users = $firebaseArray(userRef)
    // this.exercises = $firebaseArray(exerciseRef)
    // this.firstObject = $firebaseObject(ref)

    // this.firstWorkout = function () {
    //   self.movements.$add ({
    //     movement: 'Barbell Curl'
    //   })
    // }
    this.login = function () {
    ref.authWithOAuthPopup("twitter", function(error, authData) {
      if (error) {
        console.log("Login Failed!", error);
      } else {
        console.log("Authenticated successfully with payload:", authData);
      }
    });
    };

    this.addUser = function () {
      self.users.$add({
        name: self.userName,
        password: self.password
      });
      self.userName = "",
      self.password = ""
    }

    this.firstWorkout = function () {
      self.movements.$add ({
      name: self.name,
      weight: self.weight + " kg",
      reps: self.reps,
    });
    self.name = "",
    self.weight = "",
    self.reps = ""
    console.log(this.movements)
  };


    // this.workout = [ ];
    //
    // this.addMovement = function() {
    //   this.workout.push({
    //     name: self.name,
    //     weight: self.weight + " kg",
    //     reps: self.reps,
    //   });
    //   self.name = "",
    //   self.weight = "",
    //   self.reps = ""
    //   console.log(this.workout)
    // };

    // self.exercises = ['BB curl', 'Crunch', 'Leg press', 'Chin up', 'Calf raise', 'Military press'];
    // this.addNewExercise = function () {
    // }

    //
    // this.addExercises = function (selected) {
    //   self.exercises.$add({
    //     exercise: 'selected'
    //   })
    // }

    // this.firstWorkout = function () {
    //   self.firstObject.$
    // }

  })
