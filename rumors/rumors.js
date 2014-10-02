angular.module('rumors', ['ui.bootstrap','ui.utils','ui.router','ngAnimate']);

angular.module('rumors').config(function($stateProvider) {

    $stateProvider.state('rumor-detail', {
        url: '/rumors/:id',
        templateUrl: 'rumors/partial/rumor-detail/rumor-detail.html'
    });
    $stateProvider.state('latest-rumors', {
        url: '/latest',
        templateUrl: 'rumors/partial/latest-rumors/latest-rumors.html'
    });
    /* Add New States Above */

});

