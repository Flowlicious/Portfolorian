function ViewConfig($stateProvider){
  'ngInject';

  $stateProvider
  .state('app.view',{
    url:'/view/:portfolioid',
    controller:'ViewCtrl',
    controllerAs:'view',
    templateUrl:'view/view.html',
    title:'View'
  })
};

export default ViewConfig;
