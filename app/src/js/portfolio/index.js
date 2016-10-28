import angular from 'angular';

let portfolioModule = angular.module('app.portfolio',[]);

import portfolioConfig from './portfolio.config';
portfolioModule.config(portfolioConfig);

import portfolioCtrl from './portfolio.controller';
portfolioModule.controller('portfolioCtrl',portfolioCtrl);

import ngThumbDirective from './ngThumb.directive';
portfolioModule.directive('ngThumb',ngThumbDirective);

export default portfolioModule;
