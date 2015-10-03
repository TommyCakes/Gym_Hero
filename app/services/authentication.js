angular.module('workoutApp')
  .factory('Auth', function($firebase, firebaseUrl) {
    var ref = new Firebase(firebaseUrl)
    var authData = ref.getAuth();

    return {
      login: function () {
        ref.authWithOAuthPopup("twitter", function(error, authData) {
          if (error) {
            console.log("Login Failed!", error);
          } else {
            console.log("Authenticated successfully with payload:", authData);
          }
          self.uid = [authData.uid];
          // console.log("your id is number: " + self.uid);
        });
      },
      logout: function () {
        ref.unauth()
        console.log('Logged Out!')
      }
  }

})
