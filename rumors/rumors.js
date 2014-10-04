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

angular.module('rumors').controller('rumorsCtrl', ['$scope', function($scope){

    $scope.story = {
        id: "QWD50Xm6",
        title: "昨日下午五時左右，一輛客貨車在灣仔駕駛時，司機突然休克，撞上泥頭車身亡。東方日報隨後用大標題指事件源於佔領運動造成塞車。",
        description: "<p>【本報訊】灣仔交通擠塞，客貨車司機駕駛途中疑病發休克，撼泥頭車身亡。昨午五時許，一輛豐田深藍色客貨車，沿灣仔會議道往北角方向行駛，至舊灣仔碼頭對開天橋底時，姓孫（六十二歲）司機疑患心臟病，突然病發休克，客貨車直衝路邊石壆，再反彈越過對面行車線，撞向一輛泥頭車，當時客貨車後方剛有消防車，消防員即下車施行急救。</p><p>惟孫送抵醫院，仍告不治，被撞泥頭車司機則無受傷。警員初步調查，相信司機突然病發，引致意外。</p>",
        medias: [
            'https://fbcdn-sphotos-b-a.akamaihd.net/hphotos-ak-xpf1/v/t1.0-9/10687127_10154631470330494_7242929053154320884_n.jpg?oh=c6c4fc197d1b58fa52fe2c804b86e467&oe=54B05F73&__gda__=1422907404_84215fc3d0a15cbef6465f471fe96e54'
        ],
        postedDate: "Sun 03/10 16:45",
        verifiedDate: "" ,
        status: "Not verified",
        verifiers: [
            "Verifier A",
            "Verifier B",
            "Verifier C"
        ],
        comment:"comment from verifiers",
        sources: [
            {
                title: "政府新聞公報",
                link: "http://www.info.gov.hk/gia/general/201409/29/P201409291127.htm"
            },
            {
                title: "東方日報",
                link: "http://orientaldaily.on.cc/cnt/news/20140930/00176_088.html?facebook=y"
            }
        ],
        evidences: [
            {
                title: "家人澄清",
                link: "https://www.facebook.com/photo.php?fbid=10154631470330494&set=a.10150204307775494.450470.870160493&type=1"
            },
            {
                title: "東方日報已更新標題",
                link: "http://orientaldaily.on.cc/cnt/news/20140930/00176_088.html?facebook=y"
            }
        ]
    };

    console.log('rumorsCtrl init', $scope.story);
}]);

