<!DOCTYPE html>
<html ng-app="app">
<head>
	<title>Nauka Angulara</title>
	<link rel='stylesheet' href='bootstrap.min.css' />
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<style>
th{
	cursor: pointer;
}
.arrow-up {
     width: 0;
     height: 0;
     border-left: 5px solid transparent;
     border-right: 5px solid transparent;
     border-bottom: 10px solid black;
     display:inline-block;
}

.arrow-down {
     width: 0;
     height: 0;
     border-left: 5px solid transparent;
     border-right: 5px solid transparent;
     border-top: 10px solid black;
     display:inline-block;
}
</style>
</head>
<body>
	<div ng-controller="Ctrl">
		<table class="table">
			<thead>
				<tr>
					<th ng-click="sortData('name')">
						Name <div ng-class="getSortClass('name')"></div>
					</th>
					<th ng-click="sortData('dateOfBirth')">
						Date <div ng-class="getSortClass('dateOfBirth')"></div>
					</th>
					<th ng-click="sortData('gender')">
						Gender <div ng-class="getSortClass('gender')"></div>
					</th>
					<th ng-click="sortData('salary')">
						Salary <div ng-class="getSortClass('salary')"></div>
					</th>
				</tr>
			</thead>
			<tbody>
				<tr ng-repeat="employee in employees | orderBy:sortCol:reverseSort">
					<td>{{employee.name | uppercase}}</td>
					<td>{{employee.dateOfBirth | date:"dd/MM/yyyy"}}</td>
					<td>{{employee.gender | lowercase}}</td>
					<td>{{employee.salary | number:2}}</td>
				</tr>
			</tbody>
		</table>	
	</div>
</body>
<script src="jquery-3.1.0.min.js"></script>
<script src="angular.js"></script>
<script src="controller.js"></script>
<script src="bootstrap.js"></script>
</html>