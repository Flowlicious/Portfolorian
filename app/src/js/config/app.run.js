function AppRun($rootScope, AuthService, authManager, store, jwtHelper, $location) {
  'ngInject';
    $rootScope.AuthService = AuthService;
    AuthService.registerAuthenticationListener();

    $rootScope.$on('$locationChangeStart', function() {
        var token = store.get('id_token');
        if (token) {
            if (!jwtHelper.isTokenExpired(token)) {
                if (!authManager.isAuthenticated) {
                    authManager.authenticate(store.get('profile'), token);
                }
            }
        } else {
            $location.path('/');
        }
    })
}

export default AppRun;
