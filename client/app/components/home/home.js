import angular from 'angular';
import uiRouter from 'angular-ui-router';
import homeComponent from './home.component';

let homeModule = angular.module('home', [
    uiRouter
]).config(($stateProvider) => {
    "ngInject";
    $stateProvider
        .state('home', {
            url: '/home',
            template: '<home/>'
        });

}).component('home', homeComponent);

export default homeModule;
