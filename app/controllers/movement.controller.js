'use strict';


angular.module('workoutApp')
.controller('MoveCtrl', function($firebaseObject, $firebaseArray, firebaseUrl, $stateParams, Auth, userWorkouts) {
  var self = this;
  var muscles = $stateParams.muscles
  // console.log(muscles)


  var movements = firebaseUrl + 'movements'
  var moveRef = new Firebase(movements)
  this.movements = $firebaseArray(moveRef)

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
      console.log('your selected muscle ' + muscle)
      if (muscle === 'chests') {
        self.muscleList.chest = self.chests;
      }
      else {
        self.muscleList.legs = self.legs;
      }
      console.log('this is muscle in the object', self.muscleList )
  };

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
        exercises: this.userWorkout,
      })
      swal(
        "Great!",
      "Your workout has been saved!",
      "success")
      this.userWorkout=[ ];
    };
})
