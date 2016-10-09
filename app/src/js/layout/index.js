import angular from 'angular';

let layoutModule = angular.module('app.layout',[]);

import AppHeader from './header.component';
layoutModule.component('appHeader',AppHeader);


export default layoutModule;
