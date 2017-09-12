export default class Storage {
  constructor($window) {
    'ngInject';

    this._$window = $window;
 
  }

 
  get(objType) {
     return JSON.parse(this._$window.localStorage.getItem(objType) || '[]');
  }

  save(objType,obj) {

  	this._$window.localStorage.setItem(objType, JSON.stringify(obj));
  	
  }

  delete(objType,obj) {

    let fullObject  = this.get(objType);
    fullObject.splice(fullObject.indexOf(obj), 1);

    this.save(objType,fullObject);

  }


}