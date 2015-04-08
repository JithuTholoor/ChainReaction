var ChainReactionApp = new angular.module('ChainReactionApp', ['ngRoute']);

ChainReactionApp.controller("MainController", mainController());

var configFunction = function ($routeProvider) {
    $routeProvider.
        when('  ', {
            templateUrl: 'Home.html',
            controller: 'homeController'
        })
        .when('/home', {
            templateUrl: 'Home.html',
            controller: 'homeController'
        })
        .when('/about', {
        templateUrl: 'About.html',
        controller: ''
        })
        .when('/game', {
            templateUrl: 'Game.html',
            controller: 'gameController'
        })
        .when('/award', {
            templateUrl: 'Award.html',
            controller: 'awardController'
        })
        .when('/contacts', {
        templateUrl: 'Contacts.html',
        controller: ''
        })
        .otherwise({ redirectTo: '/home' });
}
configFunction.$inject = ['$routeProvider'];

ChainReactionApp.config(configFunction);

