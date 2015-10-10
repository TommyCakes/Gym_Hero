'use strict';


angular.module('workoutApp')
  .factory('Auth', function($firebase, firebaseUrl, $firebaseObject, $firebaseArray) {

    var ref = new Firebase(firebaseUrl)
    var authData = ref.getAuth();
    console.log(authData)
    // var users = firebaseUrl + 'users'
    // var userRef = new Firebase(users)
    // this.users = $firebaseArray(userRef)

    //Welcome messages, morn, noon and night
    var self = this;
    var date = new Date();
    var time = date.getHours()
    if (time < 12) {
      self.morn = true;
    }
    else if (time >= 12 && time <= 17) {
      self.morn = false;
      self.afternoon = true;
    }
    else {
      self.morn = false;
      self.afternoon = false;
      self.eve = true;
    }

    //Get user login

    return {
      login: function () {
        ref.authWithOAuthPopup("twitter", function(error, authData) {
          if (error) {
            console.log("Login Failed!", error);
              Materialize.toast('Error logging in', 2000 , 'center')
          }
          else {
            console.log("Authenticated successfully with payload:", authData);
            if (self.morn == true) {
              Materialize.toast('Good Morning!' , 2000);
            } else if (self.afternoon = true) {
                Materialize.toast('Good Afternoon!' , 2000);
            } else {
              Materialize.toast('Good Evening you have Sucessfully Logged In!' , 2000);
            }
          }
        });
          // console.log("your id is number: " + self.uid);
      },
      //logout function
      logout: function () {
        ref.unauth()
        console.log('Logged Out!')
          Materialize.toast('You have Logged Out' , 2000)
      },
      onAuth: function (cb) {
        ref.onAuth(function(data) {
          cb(updateUser(data))
        })
      }
  }
  //Making sure current user is updated
  function updateUser (userData) {
    if (userData === null) {
      return false
    }
    var user = ref.child('users').child(userData.uid)
      user.update({
      uid: userData.uid,
      displayName: userData.twitter.displayName,
      picture: userData.twitter.profileImageURL,
      twitterObj: userData.twitter
    })
    user = $firebaseObject(user)
    return user;
  }
})
