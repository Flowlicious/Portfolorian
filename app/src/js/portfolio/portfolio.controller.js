class portfolioCtrl {
    constructor(AppConstants, PortfolioService, $log, store, FileUploader, $window) {
        'ngInject';
        this._PortfolioService = PortfolioService;
        this._AppConstants = AppConstants;
        this._$log = $log;
        this.profile = store.get(AppConstants.store_profile);
        this._FileUploader = new FileUploader({
            url: 'http://localhost:3000/api/upload'
        });
        this._FileUploader.onAfterAddingFile = (fileItem) => {
            this.previewFile = fileItem;
        };
        this._$window = $window;
        this.getByUser();
    }

    getByUser() {
        this._PortfolioService.getByUser(this.profile.user_id).success((response) => {
            if (response) {
                this.portfolio = response;
            } else {
                this.portfolio = {};
                this.portfolio.projects = [];
                this.portfolio.picture = this.profile.picture ? this.profile.picture : "img/profile.png";
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
        if (this.previewFile) {
            this._FileUploader.onCompleteItem = (fileItem, response, status, headers) => {
                this.portfolio.picture = this._AppConstants.pictureUrl + response;
                this._PortfolioService.add(this.portfolio).success((response) => {
                    console.log(response);
                    this.portfolio = response;
                }).error((err) => {
                    this._$log.error(err);
                });
                console.info('onCompleteItem', fileItem, response, status, headers);
            };
            this._FileUploader.uploadAll();
        } else {
            this._PortfolioService.add(this.portfolio).success((response) => {
                console.log(response);
                this.portfolio = response;
            }).error((err) => {
                this._$log.error(err);
            });
        }



    }
}

export default portfolioCtrl;
