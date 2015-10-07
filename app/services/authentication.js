angular.module('workoutApp')
  .factory('Auth', function($firebase, firebaseUrl, $firebaseObject, $firebaseArray) {

    var ref = new Firebase(firebaseUrl)
    var authData = ref.getAuth();
    console.log(authData)
    // var users = firebaseUrl + 'users'
    // var userRef = new Firebase(users)
    // this.users = $firebaseArray(userRef)
    var self = this;
    //get user login
    return {
      login: function () {
        ref.authWithOAuthPopup("twitter", function(error, authData) {
          if (error) {
            console.log("Login Failed!", error);
          }
          else {
            console.log("Authenticated successfully with payload:", authData);
            // console.log(self.proPic)
          }
          // console.log("your id is number: " + self.uid);
        });
      },
      logout: function () {
        ref.unauth()
        console.log('Logged Out!')
      },
      onAuth: function (cb) {
        ref.onAuth(function(data) {
          cb(updateUser(data))
        })
      }
  }
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
