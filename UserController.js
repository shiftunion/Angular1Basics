(function () {  //IIFE This removes global scope

    var userController = function ($scope, github, $routeParams) {

        $scope.message = "The GitHub Viewer";
        $scope.repoSortOrder = "-stargazers_count";

        var onUserComplete = function (data) {
            $scope.user = data;
            github.getRepos($scope.user).then(onRepos, onError)
        }

        var onRepos = function (data) {
            $scope.repos = data;
        }

        var onError = function (reason) {
            $scope.error = "oh no!"
        }

        $scope.username = $routeParams.username;


        github.getUser($scope.username).then(onUserComplete, onError)

    }

    var module = angular.module("githubViewer");
    module.controller("UserController", userController);

}());


