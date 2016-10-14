angular.module("frontApp", ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
  .state("home", {
      url: "/",
      templateUrl: "./templates/home.html",
      // controller: "homeCtrl"
    })
    .state("about", {
      url: "/about",
      templateUrl: './templates/about.html',
    })
    .state("contact", {
      url: "/contact",
      templateUrl: './templates/contact.html',
    });

$urlRouterProvider.otherwise('/');


});
