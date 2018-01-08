'use strict';

const app = angular.module('PiSensors', [])

app.controller('MainController', mainController);

mainController.$inject = [ '$scope' ];

function mainController( $scope ){
  $scope.test = 'Angular is on';
};
