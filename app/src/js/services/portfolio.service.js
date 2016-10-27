export default class PortfolioService {
    constructor($http, store, AppConstants) {
        'ngInject';
        this._$http = $http;
        this._store = store;
        this._AppConstants = AppConstants;
    }

    getAll() {
        return this._$http.get(this._AppConstants + 'portfolio', {
            skipAuthorization: true
        });
    }

    getById(id) {
        return this._$http.get(this._AppConstants.apiUrl + 'portfolio/' + id);

    }
    add(portfolio) {
        return this._$http.post(this._AppConstants.apiUrl + 'portfolio', portfolio);
    }
    getByUser(userid) {
        return this._$http.get(this._AppConstants.apiUrl + 'portfolio/findByUser/' + userid);
    }

}
