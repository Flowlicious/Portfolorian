class MySiteCtrl {
    constructor(PortfolioService, $log) {
        'ngInject';
        this._PortfolioService = PortfolioService;
        this.portfolio = {};
        this._$log = $log;
    }

    save() {
        this._PortfolioService.add(this.portfolio).success((response) => {
            console.log(response);
        }).error((err) => {
            this._$log.error(err);
        });
    }
}

export default MySiteCtrl;
