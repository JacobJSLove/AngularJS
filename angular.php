<!DOCTYPE html>
<html ng-app="app">
<head>
	<title>Nauka Angulara</title>
	<link rel='stylesheet' href='bootstrap.min.css' />
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<style>

</style>
</head>
<body ng-controller="countryController">
    <span ng-repeat="country in countries">
        <button ng-click="scrollTo(country.Name)">{{country.Name}}</button>
    </span>
    <br /><br />
    <div class="containerDiv">
        <fieldset ng-repeat="country in countries" id="{{country.Name}}">
            <legend>{{country.Name}}</legend>
            <ul>
                <li ng-repeat="city in country.Cities">
                    {{city.Name}}
                </li>
            </ul>
        </fieldset>
    </div>
</body>
<script src="jquery-3.1.0.min.js"></script>
<script src="angular.js"></script>
<script src="controller.js"></script>
<script src="bootstrap.js"></script>
</html>