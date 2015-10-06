angular.module('workoutApp')
  .factory('Auth', function($firebase, firebaseUrl, $firebaseObject, $firebaseArray) {

    var ref = new Firebase(firebaseUrl)
    var authData = ref.getAuth();
    console.log(authData)

    var users = firebaseUrl + 'users'
    var userRef = new Firebase(users)
    this.users = $firebaseArray(userRef)
    var self = this;
    //get user login
    return {
      login: function () {
        ref.authWithOAuthPopup("twitter", function(error, authData) {
          if (error) {
            console.log("Login Failed!", error);
          } else {
            console.log("Authenticated successfully with payload:", authData);
            self.uid = [authData.uid];
            self.proPic = [authData.twitter.profileImageURL];
            self.displayName = [authData.twitter.displayName];

            self.users.$add({
              uid: self.uid,
              name: self.displayName,
              picture: self.proPic
            })
            // console.log(self.proPic)
          }
          // console.log("your id is number: " + self.uid);
        });
      },
      logout: function () {
        ref.unauth()
        console.log('Logged Out!')
      }
  }

})
