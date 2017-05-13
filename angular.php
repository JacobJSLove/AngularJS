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
	<div ng-controller="1Ctrl">
		<table class="table table-striped">
			<thead>
				<tr>
					<th>Name</th>
					<th>Like</th>
					<th>Dislike</th>
					<th>Like/Dislike</th>
				</tr>
			</thead>
			<tbody>
				<tr ng-repeat="technology in technologies">
					<td>{{ technology.name }}</td>
					<td>{{ technology.like }}</td>
					<td>{{ technology.dislike }}</td>
					<td>
						<input type="button" value="like" ng-click="addlike(technology)">
						<input type="button" value="like" ng-click="adddislike(technology)">
					</td>
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