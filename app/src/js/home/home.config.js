function HomeConfig($stateProvider){
  'ngInject';

  $stateProvider
  .state('app.home',{
    url:'/:portfolioid',
    controller:'HomeCtrl',
    controllerAs:'home',
    templateUrl:'home/home.html',
    title:'Home'
  })
};

export default HomeConfig;
