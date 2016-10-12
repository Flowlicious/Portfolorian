export default class AuthService {

    constructor($rootScope, AppConstants, lock, authManager, store, $location) {
        'ngInject';
        this._$rootScope = $rootScope;
        this._lock = lock;
        this._authManager = authManager;
        this._store = store;
        this._$location = $location;
        this._AppConstants = AppConstants;
    }

    login() {
        this._lock.show();
    }

    logout() {
        this._store.remove(this._AppConstants.store_profile);
        this._store.remove(this._AppConstants.store_idToken);
        this._authManager.unauthenticate();
        this._$location.path('/');
    }

    registerAuthenticationListener() {
        this._lock.on('authenticated', (authResult) => {
            this._store.set(this._AppConstants.store_idToken, authResult.idToken);
            this._authManager.authenticate();

            this._lock.getProfile(authResult.idToken, (error, profile) => {
                if (error) {
                    console.log(error);
                }
                this._store.set(this._AppConstants.store_profile, profile);
                this._$location.path('/Admin/MySite');
            })
        })
    }

}
