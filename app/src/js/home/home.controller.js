class HomeCtrl {
    constructor($log, $stateParams, PortfolioService) {
        'ngInject';

        this._$log = $log;
        this._$stateParams = $stateParams;
        this._PortfolioService = PortfolioService;
        this.portfolio;

        if ($stateParams.portfolioid) {
            this._PortfolioService.getById($stateParams.portfolioid).success((response) => {
                this.portfolio = response;
            }).error((err) => {
                $log.error(err);
            })
        }
    }
  }

export default HomeCtrl;
