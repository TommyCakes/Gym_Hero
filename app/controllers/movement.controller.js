'use strict';


angular.module('workoutApp')
.controller('MoveCtrl', function($firebaseObject, $firebaseArray, firebaseUrl, $stateParams, Auth) {
  var self = this;
  this.muscles = $stateParams.muscles
  console.log(self.muscles)
  var currentUser = Auth.getCurrentUser()
  console.log(Auth.getCurrentUser())

  var movements = firebaseUrl + 'movements/' + currentUser.$id
  var moveRef = new Firebase(movements)
  this.movements = $firebaseArray(moveRef)
    console.log(self.movements)


    //try service or factory
    //if passed an id it makes this call to refenrence
    //look at snapshot docs
    //record ref
    //var records = ...


  //body parts
  self.chests = ['Bench press', 'Incline Bench Press'];
  self.legs = ['Leg press', 'Squat'];
  self.arms = ['Dumbell curl', 'Skull crushers'];
  self.shoulders = ['Miltary Press', 'Front raise'];
  self.abs = ['Situps', 'Window cleaners'];

  this.selectedMuscles = [ ]
  this.muscleList = { }

  //Select muscle function
  this.addMuscle = function(muscle) {
    self.selectedMuscles.push(muscle);
    console.log(self.selectedMuscles)
      console.log('your selected muscle is ' + muscle)
      if (muscle === 'chests') {
        // self.chestChoice = true;
        self.muscleList.chest = self.chests;
        console.log(self.chestChoice);
      }
      else if (muscle === 'legs') {
        self.muscleList.legs = self.legs;
      }
      else if (muscle === 'arms') {
        self.muscleList.arms = self.arms
      }
      else if (muscle === 'shoulders') {
        self.muscleList.shoulders = self.shoulders
      }
      else {
        self.muscleList.abs = self.abs
      }
      console.log('this is muscles in the object', self.muscleList )
  };

  this.selectedMuscle = function(muscle) {
    if (self.muscleList.chest = self.chests) {
      // self.chestChoice = true;
      self.currentMuscle = "chest"
    }
    else if (self.muscleList.legs = self.legs) {
    self.currentMuscle = "legs"
    }
    else if (self.muscleList.arms = self.arms) {
    self.currentMuscle = "arms"
    }
    else if (self.muscleList.shoulders = self.shoulders) {
    self.currentMuscle = "shoulders"
    }
    else {
    self.currentMuscle = "abs"
    }
  }
  this.userWorkout = [ ]

  this.exercises =  {
    chest: self.chests,
    legs: self.legs,
    arms: self.arms,
    shoulders: self.shoulders,
    abs: self.abs,
  };

  var move = self.selected;
  var chosen = self.chosen;
  self.count = 0;

  //rating logic
  self.rating = false;
  self.mood = "";
  self.bad = "";
  self.good = "";

  this.selectedMood = function (mood) {
    if (mood === 'bad') {
      self.bad = "bad";
      self.ok = "";
      self.good = "";
      self.mood = self.bad;
        console.log(self.mood + " is sad")
    }
    else if (mood === 'ok') {
      self.bad = "";
      self.ok = "ok";
      self.good = "";
    }
    else {
    self.bad = "";
    self.ok = "";
    self.good = "good";
    self.mood = self.good;
      console.log(self.mood + " is happy")
    }
  }
  //end of rating logic

  //record logic
  self.recordWeight = 90;
  self.recordReps = 50

  self.benchPressWeight
  //
  // if (self.weight > self.recordWeight) {
  //   Materialize.toast('Highest weight achieved!!' , 2000)
  // }
  // else {
  // }
  // self.recordWeight =
  // console.log(self.recordWeight)
  //End of records

  this.addExercise = function () {
    this.selectedExercises = {
      name: self.selected,
      reps: self.reps,
      weight: self.weight,
      sets: self.sets,
      count: self.count,
      mood: self.mood
    }
    self.rating = true;
    self.userWorkout.push(this.selectedExercises);
    Materialize.toast('Movement added!' , 2000)
      console.log(self.selected)
        console.log([this.userWorkout])
        self.weight = "",
        self.reps = "",
        self.sets = "",
        self.selected = "",
        self.count++
        console.log(self.selectedExercises.count)
  }
    self.back = false
    this.saved = function() {
      self.back = true;
      self.movements.$add ({
        date: Date.now(),
        exercises: this.userWorkout,
      })
      swal({
        title: "Great!",
        text: "Would you like to rate your workout?",
        // type: "warning",
         imageUrl: "bower_components/sweetalert/example/images/thumbs-up.jpg",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Yes",
       cancelButtonText: "No, just save my workout please!",
       closeOnConfirm: false,
       closeOnCancel: false },
       function(isConfirm){
         if (isConfirm) {
           swal("Please ",
           "Your workout has been saved!");
          } else {
           swal("All good",
           "Your workout has been saved!");
         } });

      this.userWorkout=[ ];
    };
})
