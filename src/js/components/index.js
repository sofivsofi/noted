import angular from 'angular';

let componentsModule = angular.module('app.components', []);


import ListNotes from './list-notes/list-notes.component';
componentsModule.component('listNotes', ListNotes);

import ListCategories from './list-categories/list-categories.component';
componentsModule.component('listCategories', ListCategories);

import DeleteBtn from './buttons/delete-btn.component';
componentsModule.component('deleteBtn', DeleteBtn);

import EditBtn from './buttons/edit-btn.component';
componentsModule.component('editBtn', EditBtn);



export default componentsModule;
