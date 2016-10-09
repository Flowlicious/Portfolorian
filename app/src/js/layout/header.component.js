class AppHeaderCtrl {
    constructor() {
        'ngInject';

        this.motto = "Das ist ein motto";

    }
}


let AppHeader = {
  controller: AppHeaderCtrl,
  templateUrl: 'layout/header.html'
};

export default AppHeader;
