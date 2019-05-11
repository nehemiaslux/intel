angular.module('starter.controllers', [])

.controller('categoriesCtrl', function($scope) {
  //categories
  $scope.categoria = [{
    cat:"Celulares",
    ico:"fas fa-mobile-alt"
  },{
    cat:"Tablets",
    ico:"fas fa-tablet-alt"    
  },{
    cat:"Teclados",
    ico:"fas fa-keyboard"
  },{
    cat:"impresora",
    ico:"fas fa-print"
    },{
    cat:"audio",
    ico:"fas fa-file-audio"
    },{
    cat:"laptops",
    ico:"fas fa-laptop"      
  }]
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
