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
        this._FileUploader.onWhenAddingFileFailed = function(item /*{File|FileLikeObject}*/, filter, options) {
           console.info('onWhenAddingFileFailed', item, filter, options);
       };
       this._FileUploader.onAfterAddingFile = function(fileItem) {
           console.info('onAfterAddingFile', fileItem);
       };
       this._FileUploader.onAfterAddingAll = function(addedFileItems) {
           console.info('onAfterAddingAll', addedFileItems);
       };
       this._FileUploader.onBeforeUploadItem = function(item) {
           console.info('onBeforeUploadItem', item);
       };
       this._FileUploader.onProgressItem = function(fileItem, progress) {
           console.info('onProgressItem', fileItem, progress);
       };
       this._FileUploader.onProgressAll = function(progress) {
           console.info('onProgressAll', progress);
       };
       this._FileUploader.onSuccessItem = function(fileItem, response, status, headers) {
           console.info('onSuccessItem', fileItem, response, status, headers);
       };
       this._FileUploader.onErrorItem = function(fileItem, response, status, headers) {
           console.info('onErrorItem', fileItem, response, status, headers);
       };
       this._FileUploader.onCancelItem = function(fileItem, response, status, headers) {
           console.info('onCancelItem', fileItem, response, status, headers);
       };
       this._FileUploader.onCompleteItem = function(fileItem, response, status, headers) {
           console.info('onCompleteItem', fileItem, response, status, headers);
       };
       this._FileUploader.onCompleteAll = function() {
           console.info('onCompleteAll');
       };
        this._$window = $window;
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
