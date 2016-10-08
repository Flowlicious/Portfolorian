import angular from 'angular';

import appConfig from './config/app.config';

import 'angular-ui-router';
import './home';
import './config/app.templates';




const requires = [
  'ui.router',
  'templates',
  'app.home'
]


window.app = angular.module('app',requires);

angular.module('app').config(appConfig);

angular.bootstrap(document, ['app'], {
  strictDi: true
});
