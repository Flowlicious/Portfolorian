import angular from 'angular';

let viewModule = angular.module('app.view',[]);

import ViewConfig from './view.config';
viewModule.config(ViewConfig);

import ViewCtrl from './view.controller';
viewModule.controller('ViewCtrl',ViewCtrl);

export default viewModule;
