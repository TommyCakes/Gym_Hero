angular.module('workoutApp')
.controller('MoveCtrl', function($firebaseObject, $firebaseArray, firebaseUrl, $stateParams) {
  var self = this;
  console.log($stateParams.muscle);
  var random = $stateParams.muscle
  console.log(random)

  self.chests = ['Bench press', 'Incline Bench Press'];
  self.legs = ['Leg press', 'Squat'];
  self.arms = ['Dumbell curl', 'Skull crushers'];
  self.shoulders = ['Miltary Press', 'Front raise'];
  self.abs = ['Situps', 'Window cleaners'];

  if (random == 'chest') {
    self.filtered = self.chests;
  }
  else if (random == 'legs') {
    self.filtered = self.legs;
  }
  else if (random == 'arms') {
    self.filtered = self.arms;
  }
  else if (random == 'shoulders') {
    self.filtered = self.shoulders;
  }
  else {
    self.filtered = self.abs;
  }

  var movements = firebaseUrl + 'movements'
  var moveRef = new Firebase(movements)
  this.movements = $firebaseArray(moveRef)

  this.userWorkout = [ ]

  this.exercises =  {
    chest: self.chests,
    legs: self.legs,
    arms: self.arms,
    shoulders: self.shoulders,
    abs: self.abs,
  };

    var move = self.selected;

  this.selectedExercises = {
    first: self.selected,
  }

  this.addExercise = function () {
    // self.userWorkout.push(this.exercises);
    self.userWorkout.push(self.selected);
      console.log(self.selected)
  }


    this.saved = function() {
      self.movements.$add ({
        date: Date.now(),
        movements: this.userWorkout,
      })
      this.userWorkout=[ ];
    };


  //try this first
  // this.savedWorkout = function () {
  //   self.movements.push
  // }


  //$add {
  // date: ''
  // movements: 'array we created localy' /this.userWorkout
  // }



// this.firstWorkout = function () {
//   // self.movements.$add ({
//     // self.userWorkout.$add
//   name: self.chest,
//   weight: self.weight + " kg",
//   reps: self.reps,
//   sets: self.sets,
//   time: self.time,
//   date: Date.now()
// });
// self.chest = "",
// self.weight = "",
// self.reps = "",
// self.sets = "",
// self.time = "",
//
// console.log(this.movements)
// };

// this.userWorkout = [ ]
//
// this.savedWorkout = function () {
//   self.userWorkout.push(self.movements);
//   console.log(this.userWorkout)
// }
})
