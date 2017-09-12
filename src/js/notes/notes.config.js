function NotesConfig($stateProvider) {
	'ngInject';

	$stateProvider
	.state('app.notes',{
		url: '/',
		controller: 'NotesCtrl',
		controllerAs: '$ctrl',
		templateUrl: 'notes/notes.html',
		title: "Notes"

	})
	.state('app.notesEdit',{
		url: '/notes/:noteIndex',
		controller: 'NotesCtrl',
		controllerAs: '$ctrl',
		templateUrl: 'notes/notesEdit.html',
		title: "Edit Note"

	});


};


export default NotesConfig;