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
                <tr>
                    <td>String</td>
                    <td> <input type="text" ng-model="input"/> </td>
                </tr>
                <tr>
                    <td>Result</td>
                    <td> <input type="text" ng-model="output"/> </td>
                </tr>
                <tr>
                    <td></td>
                    <td> <input type="button" ng-click="tranform(input)" value="Change String" /> </td>
                </tr>
        </table>
	</div>
</body>
<script src="jquery-3.1.0.min.js"></script>
<script src="angular.js"></script>
<script src="controller.js"></script>
<script src="stringService.js"></script>
<script src="bootstrap.js"></script>
</html>