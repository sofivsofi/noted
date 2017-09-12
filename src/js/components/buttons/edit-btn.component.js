class EditBtnCtrl {
  constructor(Storage, $state,$location) {
    'ngInject';

    this._Storage = Storage;
    this.title = $state.current.title;
    this._state = $state;
    this._location = $location;

  }

  editItem(items,item) {

   //console.log(item);
   //this._state.go('app.notesEdit', params);
   let index_ = items.indexOf(item);
    let params = {noteIndex: index_};
   //this._location.path('/notes/'+index_);
   this._state.go('app.notesEdit', params);
 }

}

let EditBtn = {
  bindings: {
    items: '=',
    item: '='
  },
  transclude: true,
  controller: EditBtnCtrl,
  templateUrl: 'components/buttons/edit-btn.html'
};

export default EditBtn;