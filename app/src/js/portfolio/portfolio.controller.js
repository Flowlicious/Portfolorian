class portfolioCtrl {
    constructor(AppConstants, PortfolioService, $log, store) {
        'ngInject';
        this._PortfolioService = PortfolioService;
        this._AppConstants = AppConstants;
        this._$log = $log;
        this.profile = store.get(AppConstants.store_profile);
        //initially set the userid
        this.getByUser();
    }

    getByUser() {
        this._PortfolioService.getByUser(this.profile.user_id).success((response) => {
            if (response) {
                this.portfolio = response;
            } else {
                this.portfolio = {};
                this.portfolio.projects = [];
                this.portfolio.userid = this.profile.user_id;
            }
        }).error((err) => {
            this._$log.error(err);
        });
    }

    getUrl() {
        return this._AppConstants.portfoliourl + this.portfolio._id;
    }


    save() {
        this._PortfolioService.add(this.portfolio).success((response) => {
            console.log(response);
            this.portfolio = response;
        }).error((err) => {
            this._$log.error(err);
        });
    }
}

export default portfolioCtrl;
