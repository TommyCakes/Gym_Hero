angular.module('workoutApp')
  .factory('Records', function($firebase, firebaseUrl, $firebaseObject, $firebaseArray, Auth) {

    var self = this;

    var currentUser = Auth.getCurrentUser()

    var records = firebaseUrl + 'records/' + currentUser.$id
    var recordsRef = new Firebase(records)
    var recordsObj = $firebaseObject(recordsRef)

    console.log(self.records)

    return {

      userData: function (name, newValue) {
        var weight = parseInt(newValue)
        recordsRef.child(name).set(weight);
      }
    }
})
