'use strict';

angular.module('hackathon', ['ngRoute', 'hackathon.controllers', 'hackathon.services', 'hackathon.directives'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/dash', {
    templateUrl: 'templates/dash.html',
    controller: 'DashCtrl'
  });
}]);

