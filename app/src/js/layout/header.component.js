class AppHeaderCtrl {
    constructor(AuthService) {
        'ngInject';

        this.motto = "Das ist ein motto";
        this._authService = AuthService;
    }
}


let AppHeader = {
    controller: AppHeaderCtrl,
    controllerAs: 'home',
    templateUrl: 'layout/header.html'
};

export default AppHeader;
