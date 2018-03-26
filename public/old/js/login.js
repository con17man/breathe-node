'use strict';

angular.module('piSensors.login', ['ui.router'])
    .controller('LoginController', loginController);

loginController.$inject = ['$scope', '$state'];

function loginController($scope, $state) {

    this.login = function() {
        $state.go('main');
    }
}
