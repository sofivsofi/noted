class DeleteBtnCtrl {
  constructor(Storage, $state) {
    'ngInject';

    this._Storage = Storage;
    this.title = $state.current.title;

  }

  deleteItem(items,item) {
    console.log(item);
    
    if (confirm('Are you sure you want to delete this item?')) {
      this._Storage.delete(this.title.toLowerCase(),item);
      items.splice(items.indexOf(item), 1);
    } 
 }

}

let DeleteBtn = {
  bindings: {
    items: '=',
    item: '='
  },
  transclude: true,
  controller: DeleteBtnCtrl,
  templateUrl: 'components/buttons/delete-btn.html'
};

export default DeleteBtn;