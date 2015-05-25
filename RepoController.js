(function () {  //IIFE This removes global scope

    var app = angular.module("githubViewer");

    var RepoController = function ($scope, $location, github, $routeParams) {


        //$scope.repo = github.getRepo($routeParams.username, $routeParams.reponame)
        //
        //$scope.contributors = github.getContributors($scope.repo)


        var onRepoComplete = function (data) {
            $scope.repo = data;
            github.getContributors($scope.repo).then(onContrib, onError)
        }

        var onContrib = function (data) {
            $scope.contributors = data;
        }

        var onError = function (reason) {
            $scope.error = "oh no!"
        }

        $scope.username = $routeParams.username;


        github.getRepo($routeParams.username, $routeParams.reponame).then(onRepoComplete, onError)


    }


    app.controller("RepoController", RepoController);

}());


