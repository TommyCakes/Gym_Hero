'use strict';


angular.module('workoutApp')
.controller('MoveCtrl', function($firebaseObject, $firebaseArray, firebaseUrl, $stateParams, Auth, userWorkouts) {
  var self = this;
  console.log($stateParams.muscle);
  var muscle = $stateParams.muscle
  console.log(muscle)


  var movements = firebaseUrl + 'movements'
  var moveRef = new Firebase(movements)
  this.movements = $firebaseArray(moveRef)

  self.chests = ['Bench press', 'Incline Bench Press'];
  self.legs = ['Leg press', 'Squat'];
  self.arms = ['Dumbell curl', 'Skull crushers'];
  self.shoulders = ['Miltary Press', 'Front raise'];
  self.abs = ['Situps', 'Window cleaners'];


  this.chestClick = function () {
    self.chestEx = 10;
    console.log(self.chestEx);
  }


  if (muscle == 'chest') {
    self.filtered = self.chests;
  }
  else if (muscle == 'legs') {
    self.filtered = self.legs;
  }
  else if (muscle == 'arms') {
    self.filtered = self.arms;
  }
  else if (muscle == 'shoulders') {
    self.filtered = self.shoulders;
  }
  else {
    self.filtered = self.abs;
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

  this.addExercise = function () {
    this.selectedExercises = {
      name: self.selected,
      reps: self.reps,
      weight: self.weight,
      sets: self.sets
    }
    self.userWorkout.push(this.selectedExercises);
    // self.userWorkout.push(
      // self.selected, self.weight);
    Materialize.toast('Movement added!' , 2000)
      console.log(self.selected)
        console.log([this.userWorkout])
        self.weight = "",
        self.reps = "",
        self.sets = "",
        self.time = "",
      self.added = true;
  }

    this.saved = function() {
      self.movements.$add ({
        date: Date.now(),
        movements: this.userWorkout,
      })
      swal(
        "Great!",
      "Your workout has been saved!",
      "success")
      this.userWorkout=[ ];
    };
})
