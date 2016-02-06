(function() {
    var app = angular.module("Angular-ToDoList");
    
    var MainController = function ($scope, localStorageService) {
        $scope.todos = []
        $scope.addTodo = function (todo) {
            $scope.todos.push(todo);
            localStorageService.set('todos', $scope.todos);
        };
    };
    
    app.controller("MainController", MainController);
}());