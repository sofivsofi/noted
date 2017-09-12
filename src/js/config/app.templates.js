angular.module('templates', []).run(['$templateCache', function($templateCache) {$templateCache.put('categories/categories.html','<div class="container">\t\r\n\t<header class="text-center mt-5 mb-5">\r\n\t\t<h1 ng-bind="::$ctrl.title"></h1>\r\n\t\t<h4>{{$ctrl.categories.length || 0 }} items</h4>\r\n\t</header>\r\n\t<form ng-submit="$ctrl.saveCategory($ctrl.newCategory);">\r\n\t\t<input type="text" class="form-control mb-3" placeholder="Add a category..." ng-model="$ctrl.newCategory"/>\r\n\t</form>\t\r\n\t<list-categories categories="$ctrl.categories"></list-categories>\r\n</div>\r\n');
$templateCache.put('notes/notes.html','<div class="container">\r\n\t<header class="text-center mt-5 mb-5">\r\n\t\t<h1 ng-bind="::$ctrl.title"></h1>\r\n\t\t<h4>{{$ctrl.notes.length || 0 }} items</h4>\r\n\t</header>\r\n\t<button class="btn btn-info" ng-click="$ctrl.toggleForm();">{{ (!$ctrl.showForm) ? \'+ Add New Note\' : \'- Close Form\' }} </button>\r\n\t<form style="background: #f4f4f4;padding: 30px;margin-bottom: 20px;margin-top:15px" ng-show="$ctrl.showForm">\r\n\t\t<div class="form-group">\r\n\t    <label>Note:</label>\r\n\t\t<input type="text" class="form-control mb-3" placeholder="Add an item..." ng-model="$ctrl.newNote"/>\r\n\t\t</div>\r\n\t\t<div class="form-group">\r\n\t      <label>Category:</label>\r\n\t      <select class="form-control mb-3" ng-model="$ctrl.category">\r\n\t        <option value="">Select Category...</option>\r\n\t      \t<option ng-repeat="option in $ctrl.categories" value="{{option.name}}">{{option.name}}</option>\r\n\t      </select>\r\n\t    </div>\r\n\t    <div class="form-group" style="padding-top:20px">\r\n\t    \t<button class="btn btn-outline-info my-2 my-sm-0" type="submit" ng-click="$ctrl.saveNote($ctrl.newNote,$ctrl.category);">Save Note</button>\r\n\t    </div>\r\n\t</form>\t\r\n\t<list-notes notes="$ctrl.notes"></list-notes>\r\n</div>\r\n');
$templateCache.put('notes/notesEdit.html','<div class="container">\r\n\t<header class="text-center mt-5 mb-5">\r\n\t\t<h1 ng-bind="::$ctrl.title"></h1>\r\n\t</header>\r\n\t<form style="background: #f4f4f4;padding: 30px;margin-bottom: 20px;margin-top:15px">\r\n\t\t<div class="form-group">\r\n\t    <label>Note:</label>\r\n\t\t<input type="text" class="form-control mb-3" placeholder="Add an item..." ng-model="$ctrl.notes[$ctrl.noteId].name"/>\r\n\t\t</div>\r\n\t\t<div class="form-group">\r\n\t      <label>Category:</label>\r\n\t      <select class="form-control mb-3" ng-model="$ctrl.notes[$ctrl.noteId].category">\r\n\t        <option value="">Select Category...</option>\r\n\t      \t<option ng-repeat="option in $ctrl.categories" value="{{option.name}}">{{option.name}}</option>\r\n\t      </select>\r\n\t    </div>\r\n\t    <div class="form-group" style="padding-top:20px">\r\n\t    \t<button class="btn btn-outline-info my-2 my-sm-0" type="submit" ng-click="$ctrl.updateNote($ctrl.notes[$ctrl.noteId].name,$ctrl.notes[$ctrl.noteId].category);">Update Note</button>\r\n\t    \t<div class="alert alert-success" role="alert" style="margin-top:15px" ng-show="$ctrl.successfully">\r\n\t\t \t <strong>Success!</strong> The note has been successfully updated\r\n\t\t\t</div>\r\n\r\n\r\n\t    </div>\r\n\t</form>\t\r\n</div>\r\n');
$templateCache.put('layout/app-view.html','<app-header></app-header>\r\n\r\n<div ui-view></div>\r\n\r\n<app-footer></app-footer> ');
$templateCache.put('layout/footer.html','<footer>\n  <div class="container">\n    <a class="logo-font" ui-sref="app.home" ng-bind="::$ctrl.appName | lowercase"></a>\n    <span class="attribution">\n      &copy; {{::$ctrl.date | date:\'yyyy\'}}.\n     A simple application for note management\n    </span>\n  </div>\n</footer>\n');
$templateCache.put('layout/header.html','<div class="container-fluid" ng-init="$ctrl.isIt=true;">\r\n\r\n\t<div class="row" style="background:#343A40">\r\n\t\t<div class="col-sm-12">\r\n\t\t\t<nav class="navbar navbar-expand-lg navbar-dark bg-dark">\r\n\t\t\t\t<a class="navbar-brand" href="#">Noted!</a>\r\n\t\t\t\t<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" ng-click="$ctrl.isIt=!$ctrl.isIt">\r\n\t\t\t\t\t<span class="navbar-toggler-icon"></span>\r\n\t\t\t\t</button>\r\n\r\n\t\t\t\t<div class="navbar-collapse" ng-class="{\'collapse\': $ctrl.isIt}" id="navbarSupportedContent">\r\n\t\t\t\t\t<ul class="navbar-nav mr-auto">\r\n\t\t\t\t\t\t<li class="nav-item">\r\n\t\t\t\t\t\t\t<a class="nav-link"  ui-sref-active="active"\r\n\t\t\t\t\t\t\tui-sref="app.notes">Notes <span class="sr-only">(current)</span></a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class="nav-item">\r\n\t\t\t\t\t\t\t<a class="nav-link"  ui-sref-active="active"\r\n\t\t\t\t\t\t\tui-sref="app.categories">Categories</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\t\t\t</nav>\r\n\t\t</div>\r\n\t</div>\r\n\r\n</div>');
$templateCache.put('components/buttons/delete-btn.html',' <button class="btn btn-outline-danger my-2 my-sm-0" style="float:right;" ng-click="$ctrl.deleteItem($ctrl.items,$ctrl.item);">Delete</button>');
$templateCache.put('components/buttons/edit-btn.html',' <button class="btn btn-outline-info my-2 my-sm-0" style="float:right;margin-right: 15px" ng-click="$ctrl.editItem($ctrl.items,$ctrl.item)">Edit</button>');
$templateCache.put('components/list-notes/list-notes.html',' <div class="list-group mb-3" style="margin-top:15px;">\r\n\r\n\t <div ng-repeat="item in $ctrl.notes track by $index" class="list-group-item list-group-item-action">\r\n        {{item.name}}\r\n        <span class="badge badge-info" ng-show="item.category!=null">{{item.category}}</span>\r\n\r\n        <delete-btn items="$ctrl.notes" item="item"></delete-btn>\r\n        <edit-btn items="$ctrl.notes"  item="item"></edit-btn>\r\n     </div>\r\n     <div class="list-group-item list-group-item-action" ng-show="$ctrl.notes.length==0">No notes yet :(</div>\r\n </div>');
$templateCache.put('components/list-categories/list-categories.html',' <div class="list-group mb-3">\r\n\r\n\t <div ng-repeat="item in $ctrl.categories track by $index" class="list-group-item list-group-item-action">\r\n        {{item.name}}\r\n       <delete-btn items="$ctrl.categories" item="item"></delete-btn>\r\n     </div>\r\n     <div class="list-group-item list-group-item-action" ng-show="$ctrl.categories.length==0"> No categories yet</div>\r\n\r\n </div>');}]);