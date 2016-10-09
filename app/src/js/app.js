import angular from 'angular';

import appConfig from './config/app.config';

import 'jquery';
import 'angular-ui-router';
import './layout';
import './home';
import './config/app.templates';

import 'bootstrap/dist/js/bootstrap.js';



const requires = [
    'ui.router',
    'templates',
    'app.layout',
    'app.home',

]


window.app = angular.module('app', requires);

angular.module('app').config(appConfig);

angular.bootstrap(document, ['app'], {
    strictDi: true
});
