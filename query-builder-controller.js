﻿var app = angular.module('app', ['ngSanitize', 'queryBuilder', 'hljs', 'ui.bootstrap', 'angularjs-dropdown-multiselect']);
app.config(['hljsServiceProvider', function(hljsServiceProvider) {
	hljsServiceProvider.setOptions({
		// replace tab with 4 spaces
		tabReplace: '  '
	});
}]);
app.controller('QueryBuilderCtrl', ['$scope', '$templateCache', 'queryService', function($scope, $templateCache, queryService) {
	$scope.fields1 = [
		{
			id: 1,
			name: 'Gender'
		},
		{
			id: 2,
			name: 'Age'
		},
		{
			name: 'Favorite city', id: 4
		}
	];

	$scope.comparators1 = [
		{ id: 1, name: 'equal to', value: '==' },
		{ id: 2, name: 'not equal to', value: '!=' },
		{ id: 3, name: 'smaller than', value: '<' },
		{ id: 4, name: 'smaller than or equal to', value: '<=' },
		{ id: 5, name: 'greater than', value: '>' },
		{ id: 6, name: 'greater than or equal to', value: 'equal to or greater' }
	];

	$scope.operators1 = [
		{ name: 'AND', value: '&&' },
		{ name: 'OR', value: '||' }
	];

	$scope.json1 = null;

	$scope.filter1 = {
		group: {
			operator: $scope.operators1[0], rules: []
		}
	};

	$scope.settings1 = {
		nesting: false,
		addIconClass: 'glyphicon glyphicon-plus',
		removeIconClass: 'glyphicon glyphicon-minus',
		addButtonClass: 'btn btn-sm btn-success',
		removeButtonClass: 'btn btn-sm btn-danger'
	};

	$scope.$watch('filter1', function(newValue) {
		$scope.json = JSON.stringify(newValue, null, 2);
		$scope.outputReadable = queryService.asReadable(newValue.group);
		$scope.outputString = queryService.asString(newValue.group);
	}, true);

	$scope.fields2 = [
		{
			id: 1,
			name: 'Gender',
			options: [
				{ name: 'male', id: 1},
				{ name: 'female', id: 2}
			],
			disabledComparators: [
				3, 4, 5, 6
			]
		},
		{
			id: 2,
			name: 'Age'
		},
		{
			name: 'Favorite city', id: 3,
			options: [
				{ name: 'paris', id: 1 },
				{ name: 'london', id: 2 },
				{ name: 'brussels', id: 3 }
			],
			disabledComparators: [
				3, 4, 5, 6, 2
			]
		}
	];

	$scope.comparators2 = [
		{ id: 1, name: 'equal to', value: '==', defaultData: ''},
		{ id: 2, name: 'not equal to 1', value: '!=', defaultData: '' },
		{ id: 3, name: 'smaller than', value: '<' },
		{ id: 4, name: 'smaller than or equal to', value: '<=' },
		{ id: 5, name: 'greater than', value: '>' },
		{ id: 6, name: 'greater than or equal to', value: '>=' },
		{ id: 7, name: 'not equal to 2', value: '!=', defaultData: '' },
	];

	$scope.operators2 = [
		{ name: 'AND', value: '&&' },
		{ name: 'OR', value: '||' }
	];

	$scope.settings2 = {
		nesting: true,
		addIconClass: 'glyphicon glyphicon-plus',
		removeIconClass: 'glyphicon glyphicon-minus',
		addButtonClass: 'btn btn-sm btn-success',
		removeButtonClass: 'btn btn-sm btn-danger'
	}

	$scope.filter2 = {};
	$scope.queryAsString2 = '((2=="23"||3!="2")&&1=="1")';
	$scope.json2 = null;

	$scope.$watch('filter2', function(newValue) {
		$scope.json2 = JSON.stringify(newValue, null, 2);
		$scope.output2Readable = queryService.asReadable(newValue.group);
		$scope.output2String = queryService.asString(newValue.group);
	}, true);

	$scope.fields3 = [
		{
			name: 'Favorite city', id: 1,
			options: [
				{ label: 'paris', name: 'paris', id: 1 },
				{ label: 'london', name: 'london', id: 2 },
				{ label: 'brussels', name: 'brussels', id: 3 }
			]
		},
		{
			name: 'Favorite city 2', id: 2,
			options: [
				{ label: 'paris', name: 'paris', id: 1 },
				{ label: 'london', name: 'london', id: 2 },
				{ label: 'brussels', name: 'brussels', id: 3 }
			]
		}
	];

	$templateCache.put('inTemplate',
		'<div ng-dropdown-multiselect options="rule.field.options" selected-model="rule.data"></div>'
	);

	$scope.comparators3 = [
		{
			id: 1, name: 'in', value: '->', dataTemplate: 'inTemplate', defaultData: [],
		},
		{ id: 2, name: 'equal to', value: '==' }
	];

	$scope.operators3 = [
		{ name: 'AND', value: '&&' }
	];

	$scope.settings3 = {
		nesting: false,
		addIconClass: 'glyphicon glyphicon-plus',
		removeIconClass: 'glyphicon glyphicon-minus',
		addButtonClass: 'btn btn-sm btn-success',
		removeButtonClass: 'btn btn-sm btn-danger'
	}

	$scope.filter3 = {};
	$scope.queryAsString3 = '(1->"")';
	$scope.json3 = null;

	$scope.$watch('filter3', function(newValue) {
		$scope.json3 = JSON.stringify(newValue, null, 2);
		$scope.output3Readable = queryService.asReadable(newValue.group);
		$scope.output3String = queryService.asString(newValue.group);
	}, true);

	$scope.fields4 = [
		{
			id: 1,
			name: 'Gender',
			disabledComparators: [
				1
			]
		},
		{
			id: 2,
			name: 'Age'
		},
		{
			name: 'Favorite city', id: 4
		}
	];

	$scope.comparators4 = [
		{ id: 1, name: 'equal to', value: '==' },
		{ id: 2, name: 'not equal to', value: '!=' },
		{ id: 3, name: 'smaller than', value: '<' },
		{ id: 4, name: 'smaller than or equal to', value: '<=' },
		{ id: 5, name: 'greater than', value: '>' },
		{ id: 6, name: 'greater than or equal to', value: 'equal to or greater' }
	];

	$scope.operators4 = [
		{ name: 'AND', value: '&&' },
		{ name: 'OR', value: '||' }
	];

	$scope.json4 = null;

	$scope.filter4 = {
		group: {
			operator: $scope.operators4[0], rules: []
		}
	};

	$scope.settings4 = {
		nesting: false,
		addIconClass: 'glyphicon glyphicon-plus',
		removeIconClass: 'glyphicon glyphicon-minus',
		addButtonClass: 'btn btn-sm btn-success',
		removeButtonClass: 'btn btn-sm btn-danger'
	};

	$scope.$watch('filter4', function(newValue) {
		$scope.json4 = JSON.stringify(newValue, null, 2);
		$scope.outputReadable4 = queryService.asReadable(newValue.group);
		$scope.outputString4 = queryService.asString(newValue.group);
	}, true);

	$scope.fields5 = [
		{
			id: 1,
			name: 'Gender'
		},
		{
			id: 2,
			name: 'Age'
		},
		{
			name: 'Favorite city', id: 4
		}
	];

	$scope.comparators5 = [
		{ id: 1, name: 'equal to', value: '==' },
		{ id: 2, name: 'not equal to', value: '!=' },
		{ id: 3, name: 'smaller than', value: '<' },
		{ id: 4, name: 'smaller than or equal to', value: '<=' },
		{ id: 5, name: 'greater than', value: '>' },
		{ id: 6, name: 'greater than or equal to', value: 'equal to or greater' }
	];

	$scope.operators5 = [
		{ name: 'AND', value: '&&' },
		{ name: 'OR', value: '||' }
	];

	$scope.json5 = null;

	$scope.filter5 = {
		group: {
			operator: $scope.operators5[0], rules: []
		}
	};

	$scope.settings5 = {
		nesting: false,
		onlyAllowFieldsOnce: true,
		addIconClass: 'glyphicon glyphicon-plus',
		removeIconClass: 'glyphicon glyphicon-minus',
		addButtonClass: 'btn btn-sm btn-success',
		removeButtonClass: 'btn btn-sm btn-danger'
	};

	$scope.$watch('filter5', function(newValue) {
		$scope.json5 = JSON.stringify(newValue, null, 2);
		$scope.outputReadable5 = queryService.asReadable(newValue.group);
		$scope.outputString5 = queryService.asString(newValue.group);
	}, true);

	$scope.fields6 = [
		{
			name: 'Favorite city', id: 1,
			options: [
				{ label: 'paris', name: 'paris', id: 1 },
				{ label: 'london', name: 'london', id: 2 },
				{ label: 'brussels', name: 'brussels', id: 3 }
			]
		},
		{
			name: 'Favorite city 2', id: 2,
			options: [
				{ label: 'paris', name: 'paris', id: 1 },
				{ label: 'london', name: 'london', id: 2 },
				{ label: 'brussels', name: 'brussels', id: 3 }
			]
		}
	];

	$templateCache.put('inTemplate',
		'<div ng-dropdown-multiselect options="rule.field.options" selected-model="rule.data"></div>'
	);

	$scope.comparators6 = [
		{
			id: 1, name: 'in', value: '->', dataTemplate: 'inTemplate', defaultData: [],
			isValid: function(data) {
				return angular.isArray(data) && data.length > 0;
			}
		},
		{ id: 2, name: 'equal to', value: '==' }
	];

	$scope.operators6 = [
		{ name: 'AND', value: '&&' }
	];

	$scope.settings6 = {
		nesting: true,
		addIconClass: 'glyphicon glyphicon-plus',
		removeIconClass: 'glyphicon glyphicon-minus',
		addButtonClass: 'btn btn-sm btn-success',
		removeButtonClass: 'btn btn-sm btn-danger'
	}

	$scope.filter6 = {
		group: {
			operator: $scope.operators6[0], rules: []
		}
	};
	$scope.json6 = null;

	$scope.$watch('filter6', function(newValue) {
		$scope.json6 = JSON.stringify(newValue, null, 2);
		$scope.output6Readable = queryService.asReadable(newValue.group);
		$scope.output6String = queryService.asString(newValue.group);
	}, true);
}]);
