function AppConfig($httpProvider, $stateProvider, $locationProvider, $urlRouterProvider, lockProvider, $provide, jwtOptionsProvider, jwtInterceptorProvider, AppConstants) {
    'ngInject';

    $stateProvider
        .state('app', {
            abstract: true,
            templateUrl: 'layout/app-view.html'
        });

    $urlRouterProvider.otherwise('/');


    jwtInterceptorProvider.tokenGetter = function(store) {
      'ngInject';
        return store.get(AppConstants.store_idToken);
    }

    jwtOptionsProvider.config({
        whiteListedDomains: ['localhost']
    })

    lockProvider.init({
      domain: 'rian0702.eu.auth0.com',
          clientID: 'neCYBEyJpofhgpBClkCbxpCvWpnmNnAy',
          options: {
              auth: {
                  redirect: false
              },
              autoclose: true
          }
    })



    function redirect($q,$injector,AuthService,store,$location){
      'ngInject';
        return {
          responseError:function(rejection){
            if(rejection.status === 401){
              AuthService.logout();
            }
            return $q.reject(rejection);
          }
        }
      }
      $provide.factory('redirect',redirect);
      $httpProvider.interceptors.push('redirect');
      $httpProvider.interceptors.push('jwtInterceptor');

}

export default AppConfig;
