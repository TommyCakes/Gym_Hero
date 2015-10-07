angular.module('workoutApp')
  .controller('HomeCtrl', function($firebaseObject, $firebaseArray, $location, firebaseUrl, Auth, $stateParams ){
  this.fireLink = firebaseUrl;
    var self = this;
    var ref = new Firebase(firebaseUrl)

    var users = firebaseUrl + 'users'
    var userRef = new Firebase(users)
    this.users = $firebaseArray(userRef)

    this.login = Auth.login
    Auth.onAuth(function(user) {
      self.user = user
      console.log(self.user)
      if (user === false) {
        return $location.path('/signIn')
      }
      else {
        return $location.path('/')
      }
    })
    this.logout = Auth.logout
    // console.log(self.users)
})
