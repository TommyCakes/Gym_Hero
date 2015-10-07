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
})
