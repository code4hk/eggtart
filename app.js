angular.module('eggTart', ['ui.bootstrap', 'ui.utils', 'ui.router', 'ngAnimate', 'rumors']);

angular.module('eggTart').config(function($stateProvider, $urlRouterProvider) {

    /* Add New States Above */
    $urlRouterProvider.otherwise('/latest');

});

angular.module('eggTart').run(function($rootScope) {

    $rootScope.safeApply = function(fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

});
