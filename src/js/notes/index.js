import angular from 'angular';

let notesModule = angular.module('app.notes',[]);



import NotesConfig from './notes.config';
notesModule.config(NotesConfig);


import NotesCtrl from './notes.controller';
notesModule.controller('NotesCtrl', NotesCtrl);


export default notesModule;