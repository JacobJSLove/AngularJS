<!DOCTYPE html>
<html ng-app="app">
<head>
	<title>Nauka Angulara</title>
    <base href="/"> </base>
	<link rel='stylesheet' href='bootstrap.min.css' />
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<style>
.header {
    width: 800px;
    height: 80px;
    text-align: center;
    background-color: #BDBDBD;
}

.footer {
    background-color: #BDBDBD;
    text-align: center;
}

.leftMenu {
    height: 500px;
    background-color: #D8D8D8;
    width: 150px;
}

.mainContent {
    height: 500px;
    background-color: #E6E6E6;
    width: 650px;
}
.active {
    background-color: black;
    font:white;
}
a{
    display:block;
    padding:5px
}
</style>
</head>
<body>
    <table class="table" style="font-family: Arial">
    <tr>
        <td colspan="2" class="header">
            <h1>
                WebSite Header
            </h1>
        </td>
    </tr>
    <tr>
        <td class="leftMenu">   
            <!-- ui-sref-active="active" dodawanie klasy do aktywnej części menu -->
            <a ui-sref="home" ui-sref-active="active">Home</a>
            <a ui-sref="courses" ui-sref-active="active">Courses</a>
            <a ui-sref="students" ui-sref-active="active">Students</a>
        </td>
        <td class="mainContent">
           <ui-view></ui-view>
        </td>
    </tr>
    <tr>
        <td colspan="2" class="footer">
            <b>Website Footer</b>
        </td>
    </tr>
</table>
</body>
<script src="jquery-3.1.0.min.js"></script>
<script src="angular.js"></script>
<script src="//unpkg.com/angular-ui-router/release/angular-ui-router.min.js"></script>
<script src="controller.js"></script>
<script src="bootstrap.js"></script>
</html>