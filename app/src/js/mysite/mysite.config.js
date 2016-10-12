function MySiteConfig($stateProvider) {
    'ngInject';

    $stateProvider
        .state('app.mysite', {
            url: '/mysite',
            controller: 'MySiteCtrl',
            controllerAs: 'mysite',
            templateUrl: 'mysite/mysite.html',
            title:'My Site',

        })

}

export default MySiteConfig;
