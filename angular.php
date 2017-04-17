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
<table class="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>Salary</th>
                </tr>
            </thead>
            <tbody>
                <tr ng-repeat="employee in employees">
                    <td> {{ employee.name }} </td>
                    <td> {{ employee.gender | gender }} </td>
                    <td> {{ employee.salary }} </td>
                </tr>
            </tbody>
        </table>	
	</div>
</body>
<script src="jquery-3.1.0.min.js"></script>
<script src="angular.js"></script>
<script src="controller.js"></script>
<script src="filter.js"></script>
<script src="bootstrap.js"></script>
</html>