import angular from 'angular';

// Import our app config files
import constants  from './config/app.constants';
import appConfig  from './config/app.config';
import appRun     from './config/app.run';
import 'angular-ui-router';
import 'angular-ui-bootstrap';
// Import our templates file (generated by Gulp)
import './config/app.templates';
import './layout';
import './components';
import './notes';
import './services';
import './categories';


// Create and bootstrap application
const requires = [
  'ui.router',
  'ui.bootstrap',
  'templates',
  'app.layout',
  'app.components',
  'app.notes',
  'app.services',
  'app.categories'
  
];


window.app = angular.module('app', requires);

angular.module('app').constant('AppConstants', constants);

angular.module('app').config(appConfig);

angular.module('app').run(appRun);

angular.bootstrap(document, ['app'], {
  strictDi: true
});
