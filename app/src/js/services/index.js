import angular from 'angular';
import AuthService from './auth.service';

let servicesModule = angular.module('app.services',[]);
servicesModule.service('AuthService',AuthService);

export default servicesModule;
