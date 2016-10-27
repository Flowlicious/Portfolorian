function portfolioConfig($stateProvider) {
    'ngInject';

    $stateProvider
        .state('app.portfolio', {
            url: '/portfolio',
            controller: 'portfolioCtrl',
            controllerAs: 'portfolioView',
            templateUrl: 'portfolio/portfolio.html',
            title:'My Site',

        })

}

export default portfolioConfig;
