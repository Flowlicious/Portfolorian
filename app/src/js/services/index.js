import angular from 'angular';
import AuthService from './auth.service';
import PortfolioService from './portfolio.service';

let servicesModule = angular.module('app.services',[]);
servicesModule.service('AuthService',AuthService);
servicesModule.service('PortfolioService',PortfolioService)

export default servicesModule;
