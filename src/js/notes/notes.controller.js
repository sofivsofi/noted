class NotesCtrl {

	constructor(Storage, $state, $stateParams) {
		'ngInject';

		this._Storage     = Storage;
		this.notes        = Storage.get("notes");
		this.categories   = Storage.get("categories");
		this.newNote      = "";
		this.title        = $state.current.title;
		this.category     = "";
		this.showForm     = false;
		this.noteId       = $stateParams.noteIndex;
		this.successfully = false;

	}

	saveNote(newNote,category_) {
		let _newNote  = {name:newNote, done:false, category: category_};
		this.notes.push(_newNote);
		
		this._Storage.save("notes",this.notes);
		this.newNote  = "";
		this.category = "";

	}

	updateNote(name,category){

		this.notes[this.noteId].name = name;
		this.notes[this.noteId].category = category;
		
		this._Storage.save("notes",this.notes);
		this.successfully = true;

	}

	toggleForm() {

		this.showForm = !this.showForm;
		this.newNote  = "";
		this.category = "";

	}



}


export default NotesCtrl;