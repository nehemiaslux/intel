// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDaEK7H4kt9vezAZAFLPnltBjJDIYZ2XRY",
    authDomain: "studentdb-9e377.firebaseapp.com",
    databaseURL: "https://studentdb-9e377.firebaseio.com",
    projectId: "studentdb-9e377",
    storageBucket: "studentdb-9e377.appspot.com",
    messagingSenderId: "151487969584",
    appId: "1:151487969584:web:ac7bec7dc487e700"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // Get a reference to the database service
  var database = firebase.database();
angular.module('starter.controllers', [])
.controller('DashCtrl', function($scope, $rootScope) {
  
})
.controller('dataCtrl', function($scope, $rootScope) {
  $scope.pers = 
  [
  {
    nombre: '',
    edad: 18
  },{
    nombre: '',
    edad: 15
  },{
    nombre: '',
    edad: 25
  }
  ]
  $scope.data = function (x) {
    $rootScope.datos = x;
  }
})

.controller('showCtrl', function($scope, $rootScope) {
  $rootScope.specific = $rootScope.datos;
})

.controller('dbCtrl', function ($scope, $rootScope, $state) {
  $scope.categories = [
  {
    nombre: 'Telefonía',
    icono: 'fas fa-mobile'
  }, {
    nombre: 'Impresoras',
    icono: 'fas fa-print'
  }, {
    nombre: 'Gaming',
    icono: 'fas fa-gamepad'
  }, {
    nombre: 'Computadoras',
    icono: 'fas fa-laptop-code'
  }, {
    nombre: 'Accesorios',
    icono: 'fas fa-keyboard'
  }, {
    nombre: 'Componentes',
    icono: 'fab fa-creative-commons-remix'
  }, {
    nombre: 'Mobiliario',
    icono: 'fas fa-couch'
  }, {
    nombre: 'Cámaras',
    icono: 'fas fa-video'
  }, {
    nombre: 'Redes',
    icono: 'fas fa-network-wired'
  }, {
    nombre: 'Juegos',
    icono: 'fab fa-steam'
  }
  ];
  $rootScope.data = [];
  var starCountRef = firebase.database().ref('Productos/');
  starCountRef.on('value', function(snapshot) {  
    snapshot.forEach(function(keysSnapshot) {
      $rootScope.data.push(keysSnapshot.val());
      console.log($rootScope.data)
    });
  });
  $scope.CallFunction = function(x) {
    $rootScope.categorySelected = x;
    console.log($rootScope.categorySelected);
  }
})

.controller('showCtrl', function($scope, $rootScope) {
  $scope.displayProducts = $rootScope.data;
})