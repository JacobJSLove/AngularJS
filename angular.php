<!DOCTYPE html>
<html ng-app>
<head>
	<title>Nauka Angulara</title>
	<link rel='stylesheet' href='bootstrap.min.css' />
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<style>

</style>
</head>
<body>
    <div ng-init="employees = [
                { name: 'Ben', gender: 'Male', city: 'London'},
                { name: 'Sara', gender: 'Female', city: 'Chennai'},
                { name: 'Mark', gender: 'Male', city: 'Chicago'},
                { name: 'Pam', gender: 'Female', city: 'London'},
                { name: 'Todd', gender: 'Male', city: 'Chennai'}
            ]">
        <table class="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>City</th>
                </tr>
            </thead>    
            <tbody>
                <tr ng-repeat="employee in employees">
                    <td>{{employee.name}}</td>
                    <td>{{employee.gender}}</td>
                    <td>{{employee.city}}</td>
                </tr>
            </tbody>

        </table>


    </div>

	<div ng-controller="Ctrl">

	</div>
</body>
<script src="jquery-3.1.0.min.js"></script>
<script src="angular.js"></script>
<script src="controlsler.js"></script>
<script src="bootstrap.js"></script>
</html>