(function () {
    var app = angular.module('Angular-ToDoList', ["ngRoute", "LocalStorageModule", 'ngMaterial']);

    app.config(function ($routeProvider, localStorageServiceProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "main.html",
                controller: "MainController"
            })
            .otherwise({ redirectTo: "/" });

        localStorageServiceProvider.setPrefix('Angular-ToDoList');
    });
} ());