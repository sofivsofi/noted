import angular from 'angular';

let categoriesModule = angular.module('app.categories',[]);



import CategoriesConfig from './categories.config';
categoriesModule.config(CategoriesConfig);


import CategoriesCtrl from './categories.controller';
categoriesModule.controller('CategoriesCtrl', CategoriesCtrl);


export default categoriesModule;