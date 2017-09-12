import angular from 'angular';


let servicesModule = angular.module('app.services', []);


import StorageService from './storage.service';
servicesModule.service('Storage', StorageService);


export default servicesModule;