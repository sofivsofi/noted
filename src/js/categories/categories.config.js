function CategoriesConfig($stateProvider) {
	'ngInject';

	$stateProvider
	.state('app.categories',{
		url: '/categories',
		controller: 'CategoriesCtrl',
		controllerAs: '$ctrl',
		templateUrl: 'categories/categories.html',
		title: "Categories"

	});


};


export default CategoriesConfig;