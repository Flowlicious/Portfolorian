class MySiteCtrl {
    constructor(PortfolioService) {
        'ngInject';
        this._PortfolioService = PortfolioService;
        this.portfolio = {};
    }

    save() {
        this._PortfolioService.add(this.portfolio).success((response) => {
            console.log(response);
        }).error((err) => {
            console.log(err);
        });
    }
}

export default MySiteCtrl;
