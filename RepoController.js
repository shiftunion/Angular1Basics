(function () {  //IIFE This removes global scope

    var app = angular.module("githubViewer");

    var RepoController = function ($scope, github, $routeParams) {

        var onRepoComplete = function (data) {
            $scope.repo = data;
        }

        var onError = function (reason) {
            $scope.error = "oh no!"
        }

        $scope.username = $routeParams.username;


        github.getContributors($routeParams.username, $routeParams.reponame).then(onRepoComplete, onError)

    }

    app.controller("RepoController", RepoController);

}());


