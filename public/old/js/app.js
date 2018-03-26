'use strict';

angular.module('piSensors', [
    'ui.router',
    // app modules
    'piSensors.router',
    'piSensors.login'
])

.controller('MainController', mainController);

mainController.$inject = ['$scope'];

function mainController($scope) {
    $scope.test = 'Angular is on';
};