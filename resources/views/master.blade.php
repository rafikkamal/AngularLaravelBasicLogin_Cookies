<!DOCTYPE html>
<html lang="en" ng-app="myApp">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Laravel Angular OAuth</title>

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">
    <link rel="stylesheet" type="text/css" 
    href="{{asset('bower_components/bootstrap/dist/css/bootstrap.min.css')}}">

    <script type="text/javascript"> 
        var baseUrl = "{{ url('/') }}/";
    </script>

</head>
<body>
    <div class="container">
        <div ng-view></div>
    </div>
    <script type="text/javascript" src="{{asset('bower_components/angular/angular.min.js')}}"></script>
    <script type="text/javascript" src="{{asset('bower_components/angular-route/angular-route.min.js')}}"></script>
    <script type="text/javascript" src="{{asset('bower_components/angular-cookies/angular-cookies.min.js')}}"></script>
    <script type="text/javascript" src="{{asset('js/app.js')}}"></script>
    <script type="text/javascript" src="{{asset('js/controllers.js')}}"></script>
    <script type="text/javascript" src="{{asset('js/models.js')}}"></script>
</body>
</html>
