angular.module('workoutApp')
  .controller('HomeCtrl', function($firebaseObject, $firebaseArray, firebaseUrl, Auth ){
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

    self.exercises = ['hello', 'you'];
    self.chests = ['Bench press', 'Incline Bench Press'];
    self.legs = ['Leg press', 'Squat']

    this.login = Auth.login
    this.logout = Auth.logout
    console.log(self.users)

    this.firstWorkout = function () {
      self.movements.$add ({
      name: self.chest,
      weight: self.weight + " kg",
      reps: self.reps,
      sets: self.sets,
      time: self.time,
      date: Date.now()
    });
    self.chest = "",
    self.weight = "",
    self.reps = "",
    self.sets = "",
    self.time = "",

    console.log(this.movements)
  };
  //   this.firstWorkout = function () {
  //     self.movements.$add ({
  //     name: self.name,
  //     weight: self.weight + " kg",
  //     reps: self.reps,
  //   });
  //   self.name = "",
  //   self.weight = "",
  //   self.reps = ""
  //   console.log(this.movements)
  // };
  //
  this.workout = [ ];

  this.addWorkout = function(){
    this.workout.push({
      name: "",
      reps: "",
      rds: "",
      weight: "",
    });
  };
  console.log(this.workout)

  // self.chest = false;
  // this.chest = function() {
  //   self.chest = true;
  // }
    // this.addExercises = function (selected) {
    //   self.exercises.$add({
    //     exercise: 'selected'
    //   })
    // }

  })
