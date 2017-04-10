<!DOCTYPE html>
<html ng-app="app">
<head>
	<title>Nauka Angulara</title>
	<link rel='stylesheet' href='bootstrap.min.css' />
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<style>

</style>
</head>
<body>
	<div ng-controller="Ctrl">
		Order By : <select ng-model="sortCol">
					<option  value="name">Name ASC</option>
					<option selected value="gender">Gender ASC</option>
					<option value="dateOfBirth">DateOfBirth ASC</option>
					<option value="-salary">Salary DESC</option>

					</select>
		<table class="table">
			<thead>
				<tr>
					<th>Name</th>
					<th>Date</th>
					<th>Gender</th>
					<th>Salary</th>
					<th>Salary</th>
				</tr>
			</thead>
			<tbody>
				<tr ng-repeat="employee in employees | orderBy:sortCol">
					<td>{{employee.name | uppercase}}</td>
					<td>{{employee.dateOfBirth | date:"dd/MM/yyyy"}}</td>
					<td>{{employee.gender | lowercase}}</td>
					<td>{{employee.salary | number:2}}</td>
					<td>{{employee.salary | currency:"&":1}}</td>
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