angular.module('workoutApp')
  .controller('HomeCtrl', function($firebaseObject, $firebaseArray, firebaseUrl, Auth, $stateParams ){
  this.fireLink = firebaseUrl;
    var self = this;
    var ref = new Firebase(firebaseUrl)

    var users = firebaseUrl + 'users'
    var userRef = new Firebase(users)
    this.users = $firebaseArray(userRef)

    this.login = Auth.login
    this.logout = Auth.logout
    // console.log(self.users)

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
  })
