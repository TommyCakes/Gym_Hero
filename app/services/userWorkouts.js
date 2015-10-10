'use strict';


angular.module('workoutApp')
  .service('userWorkouts', function ($firebase, firebaseUrl, $firebaseObject, $firebaseArray) {

    var movements = firebaseUrl + 'movements'
    var moveRef = new Firebase(movements)
    this.movements = $firebaseArray(moveRef)

    function updateUser (userData) {
      if (userData === null) {
        return false
      }
      var move = ref.child('movements').child(userData.uid)
      user.update({
        uid: userData.uid,
        // displayName: userData.twitter.displayName,
        // picture: userData.twitter.profileImageURL,
        // twitterObj: userData.twitter
      })
      user = $firebaseObject(user)
      return move;
  }
});
