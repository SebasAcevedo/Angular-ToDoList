(function() {
    var app = angular.module("Angular-ToDoList");
    
    var MainController = function ($scope, localStorageService) {
        
        var saveTodos = function () {
            localStorageService.set('todos', $scope.todos);
        }
        
        $scope.addTodo = function (todo) {
            $scope.todos.push(todo);
            saveTodos();
        };
        
        $scope.deleteAll = function () {
            $scope.todos = [];
            localStorageService.clearAll();
        };
        
        $scope.deleteTask = function (task) {
            var todos = $scope.todos;
            var index = todos.indexOf(task);
            todos.splice(index, 1);
            saveTodos();
        }
        
        var lsTodos = localStorageService.get('todos');
        if (lsTodos != null) {
            $scope.todos = lsTodos;   
        } else {
            $scope.todos = []
        }
    };
    
    app.controller("MainController", MainController);
}());