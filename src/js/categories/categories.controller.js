class CategoriesCtrl {

	constructor(Storage,$state) {
		'ngInject';

		this._Storage = Storage;
		this.categories = Storage.get("categories");
		this.newCategory = "";
		this.title = $state.current.title;

	}

	saveCategory(newCategory) {
		let _newCategory = {name:newCategory};
		this.categories.push(_newCategory);
		
		this._Storage.save("categories",this.categories);
		this.newCategory = "";

	}


}


export default CategoriesCtrl;