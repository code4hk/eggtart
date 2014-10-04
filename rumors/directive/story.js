angular.module('rumors').controller('rumorStoryCtrl', ['$scope', function($scope){
    console.log('rumor story directive controller');
}]);

angular.module('rumors').directive('rumorStory', function(){
    return {
        template: 'story.html',
        controller: 'rumorStoryCtrl',
        scope: {
            story: '='
        },
        link: function() {

        }
    };
});