import angular from 'angular';

let MySiteModule = angular.module('app.mysite',[]);

import MySiteConfig from './mysite.config';
MySiteModule.config(MySiteConfig);

import MySiteCtrl from './mysite.controller';
MySiteModule.controller('MySiteCtrl',MySiteCtrl);

export default MySiteModule;
